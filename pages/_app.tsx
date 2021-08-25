import type { AppProps } from "next/app";
import NextProgressBar from "nextjs-progressbar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextProgressBar />
      <Component {...pageProps} />
    </>
  );
}
