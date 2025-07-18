import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

export default {
  async fetch(request, env, ctx) {
    try {
      return await getAssetFromKV({ request });
    } catch (e) {
      console.error("Asset not found:", e.message);
      return new Response("404 Not Found", {
        status: 404,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }
  },
};
