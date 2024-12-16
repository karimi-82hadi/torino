import api from "@/config/axios";
import { getCookie } from "@/utils/cookie";

async function getNewTokens() {
  const refToken = getCookie("Torino::RefToken");
  if (!refToken) return;

  try {
    const response = await api.post("/auth/refresh-token", {
      refreshToken: refToken,
    });
    return { response };
  } catch (error) {
    return { error };
  }
}

export { getNewTokens };
