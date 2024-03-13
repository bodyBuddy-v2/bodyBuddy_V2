"use client";
import Providers from "@/components/Providers";
import { Container } from "@mui/material";
import StyledLayout from "@/components/StyledLayout";
import { global } from "@/styles/globals";
import { Global } from "@emotion/react";
import SEO from "@/components/SEO";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<<<<<<< HEAD
    <>
      <html lang="en">
        <SEO />
        <body>
          <Global styles={global} />
          <Providers>
            <Container maxWidth="sm">
              <StyledLayout>{children}</StyledLayout>
            </Container>
          </Providers>
        </body>
      </html>
    </>
=======
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
>>>>>>> 8cfa6bb22fdb37b8a060b460155bcc53b0c02a5a
  );
}
