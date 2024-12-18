import Head from "next/head";
import { Layout } from "antd";

import { AntdRegistry } from "@ant-design/nextjs-registry";

import ReactQueryProvider from "@components/global/ReactQueryProvider";
import { HomeMenu } from "@components/services";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="ko">
      <Head>
        <meta charSet="utf-8" />
        <title>바디버디</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <body style={{ margin: 0 }}>
        <ReactQueryProvider>
          <AntdRegistry>
            <Layout
              style={{
                minHeight: "100vh",
                minWidth: "100vw",
                margin: "0 auto",
                background: "#fff",
                padding: "22px",
                display: "grid",
                gridTemplateRows: "1fr auto" /* 상단은 가변, 하단은 고정 */,
                height: "100vh" /* 화면 전체 높이 */,
              }}
            >
              {children}
              <HomeMenu />
            </Layout>
          </AntdRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
