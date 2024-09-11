import { Html, Head, Main, NextScript } from "next/document";
import Document from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head />
                <body className="hidden">
                    <Main />
                    <NextScript />
                    <noscript>
                        <style>{`.hidden { display: block; }`}</style>
                    </noscript>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
