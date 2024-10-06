"use client";
import { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import "@/styles/globals.css";
import Layout from "@/components/layout";
function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default App;
