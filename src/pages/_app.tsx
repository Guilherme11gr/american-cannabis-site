import ThemeRegistry from "@/styles/theme-registry.client";
import { AppProps } from "next/app";
import 'keen-slider/keen-slider.min.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeRegistry>
      <Component {...pageProps} />
    </ThemeRegistry>
  );
}
