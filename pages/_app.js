import "hamburgers/dist/hamburgers.min.css";
import "../styles/globals.css";
import "../styles/main.scss";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useState, useEffect } from "react";

const isMaintenanceMode = true;

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
    const [hasUserOverride, setHasUserOverride] = useState(false);

    useEffect(() => {
        // This code runs only on the client side
        if (window.location.search.includes("override=true")) {
            setHasUserOverride(true);
        }
    }, []);

    if (isMaintenanceMode && !hasUserOverride) {
        return (
            <div className="maintenance">
                <p>
                    Briefly unavailable for scheduled maintenance. Check back in
                    an hour or so.
                </p>
                <ul>
                    <li>
                        <a
                            target="_blank"
                            href="https://docs.google.com/document/d/1TIZ4wakhXfRBrbQAm_x_dapY2KwqyK7dH9bMZ-bk4Nw/edit?usp=sharing"
                        >
                            Resume
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="https://docs.google.com/document/d/1F7Xmob4Jh8ImSJ9EataWQ7xxaf8bIx4cs6jWiF7IfBw/edit#heading=h.hnwatklyy346"
                        >
                            Code Samples
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="https://github.com/ZacharyRener"
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="https://us18.list-manage.com/contact-form?u=c3aee447c73a5506280ee1d82&form_id=037fdd1db95dae27e6e70b47841aa70b"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        );
    }

    return <Component {...pageProps} />;
}

export default MyApp;
