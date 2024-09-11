import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Layout } from "antd";
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
        <body style={{ margin: 0 }}>
          <AntdRegistry>
            <Layout
              style={{ minHeight: "100vh", minWidth: "100vw", margin: "0 auto", background: "#fff", padding: "22px" }}
            >
              {children}
            </Layout>
          </AntdRegistry>
        </body>
      </html>
    </>
  );
}
