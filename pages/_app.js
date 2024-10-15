import "hamburgers/dist/hamburgers.min.css";
import "../styles/globals.css";
import "../styles/main.scss";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";

// Configure NProgress
// NProgress.configure({ showSpinner: false, speed: 400, minimum: 0.3 });

Router.events.on("routeChangeStart", () => {
    NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
    NProgress.done();
});

Router.events.on("routeChangeError", () => {
    NProgress.done();
});

function MyApp({ Component, pageProps }) {
    useEffect(() => {}, []);
    return <Component {...pageProps} />;
}

export default MyApp;
