import { jwtDecode, type JwtPayload } from "jwt-decode";

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const decoded = jwtDecode<JwtPayload>(token);
    const currentTime = Date.now() / 1000;
    return !!decoded.exp && decoded.exp > currentTime;
  } catch (e) {
    console.error("Token decode failed:", e);
    return false;
  }
};
