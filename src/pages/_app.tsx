import ThemeRegistry from "@/styles/theme-registry.client";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeRegistry>
          <Component {...pageProps} />
        </ThemeRegistry>
      </body>
    </html>
  );
}
