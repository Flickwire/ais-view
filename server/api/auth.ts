import { defineHandler } from "nitro";
import { useRuntimeConfig } from "nitro/runtime-config";

export default defineHandler(async () => {
  return (
    await fetch("https://id.barentswatch.no/connect/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: useRuntimeConfig().barentswatchClientId,
        client_secret: useRuntimeConfig().barentswatchClientSecret,
        grant_type: "client_credentials",
        scope: "ais",
      }),
    })
  ).json();
});
