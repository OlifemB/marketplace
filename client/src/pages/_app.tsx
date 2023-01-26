import React from "react";
import type {AppProps} from 'next/app';
import '@/app/styles/globals.css'
import {wrapper} from "@/app/store";

function App({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(App);