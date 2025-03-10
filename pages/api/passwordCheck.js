import { passwordCheckHandler } from "next-password-protect";
export default passwordCheckHandler("2025", {
  cookieName: "next-password-protect",
});
