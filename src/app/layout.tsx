"use client";
import Providers from "@/components/Providers";
import { Container } from "@mui/material";
import StyledLayout from "@/components/StyledLayout";
import { global } from "@/styles/globals";
import { Global } from "@emotion/react";
import SEO from "@/components/SEO";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
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
  );
}
