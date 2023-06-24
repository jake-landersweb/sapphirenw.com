import { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";

export default function Document() {
    return (
        <Html style={{ "scrollPaddingTop": "30px" }} className="scroll-smooth bg-dk-700 text-lt">
            <Head>{CssBaseline.flush()}</Head>
            <body className="scroll-smooth bg-dk-700 text-lt">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
