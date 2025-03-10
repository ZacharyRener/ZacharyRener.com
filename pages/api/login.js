import { loginHandler } from "next-password-protect";
export default loginHandler("2025", {
  cookieName: "next-password-protect",
});
