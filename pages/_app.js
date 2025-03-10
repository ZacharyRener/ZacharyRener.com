import "hamburgers/dist/hamburgers.min.css";
import "../styles/globals.css";
import "../styles/main.scss";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Maintenance from "../components/maintenance";
import { withPasswordProtect } from "next-password-protect";
import CustomLogin from "../components/CustomLogin";
import App from "next/app";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [globalState, setGlobalState] = useState({ postID: 0 });
  const [hasUserOverride, setHasUserOverride] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("override=true")) {
      setHasUserOverride(true);
    }
    // Your existing postID fetching logic...
  }, [router.asPath]);

  if (process.env.MAINTENANCE_MODE && !hasUserOverride) {
    return <Maintenance />;
  }

  return (
    <GlobalContext.Provider value={globalState}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

export default process.env.PASSWORD_PROTECT
  ? withPasswordProtect(MyApp, { loginApiUrl: "/api/login" })
  : MyApp;
