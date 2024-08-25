"use server";

import { Providers } from "@/components";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <>
      <html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <title>바디버디</title>
          <link rel="icon" href="/favicon/favicon.ico" />
        </Head>
        <body>
          <AntdRegistry>
            <Providers>{children}</Providers>
          </AntdRegistry>
        </body>
      </html>
    </>
  );
}
