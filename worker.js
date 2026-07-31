// Gates /toolkit behind HTTP Basic Auth before falling through to the site's
// static assets. This is deliberately simple: one shared username/password,
// checked server-side (the password never reaches the browser, unlike a
// client-side JS prompt — nothing to find by viewing page source). Good
// enough to keep the DM Toolkit off search engines and out of randoms'
// hands; not meant to withstand a determined, targeted attacker.
//
// The password is read from the TOOLKIT_PASSWORD secret — set it with:
//   wrangler secret put TOOLKIT_PASSWORD
// (type the real value at the prompt; it's never stored in this repo).
// For local `wrangler dev` testing, put a throwaway value in .dev.vars
// instead (gitignored, never deployed).

const GATED_PREFIX = "/toolkit";
const REALM = "DM Toolkit";
const USERNAME = "clutch";

function unauthorized() {
  return new Response("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": `Basic realm="${REALM}"` },
  });
}

// Constant-time-ish string compare — avoids the most trivial timing leak
// from a plain `===` on secret material. Not cryptographic-grade, but this
// is a casual gate, not a bank vault.
function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

function isGatedPath(pathname) {
  return pathname === GATED_PREFIX || pathname.startsWith(GATED_PREFIX + "/");
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (isGatedPath(url.pathname)) {
      if (!env.TOOLKIT_PASSWORD) {
        // Misconfiguration (secret never set) should fail closed, not open.
        return new Response(
          "The toolkit's password isn't configured yet — set the TOOLKIT_PASSWORD secret.",
          { status: 500 },
        );
      }

      const authHeader = request.headers.get("Authorization") || "";
      if (!authHeader.startsWith("Basic ")) {
        return unauthorized();
      }

      let user = "";
      let pass = "";
      try {
        const decoded = atob(authHeader.slice(6));
        const sep = decoded.indexOf(":");
        user = decoded.slice(0, sep);
        pass = decoded.slice(sep + 1);
      } catch (e) {
        return unauthorized();
      }

      if (!safeEqual(user, USERNAME) || !safeEqual(pass, env.TOOLKIT_PASSWORD)) {
        return unauthorized();
      }
    }

    return env.ASSETS.fetch(request);
  },
};
