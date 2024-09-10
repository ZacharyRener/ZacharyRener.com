import "hamburgers/dist/hamburgers.min.css";
import "../styles/globals.css";
import "../styles/main.scss";

import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
    useEffect(() => {}, []);
    return <Component {...pageProps} />;
}

export default MyApp;
