'use client'
import { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />;
  return (
    <NextUIProvider>

        <Component {...pageProps} />

    </NextUIProvider>
  );
}
export default App;
