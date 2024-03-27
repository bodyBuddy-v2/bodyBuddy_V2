"use client";
import Providers from "@/components/Providers";
import { Container } from "@mui/material";
import StyledLayout from "@/components/StyledLayout";
import { global } from "@/styles/globals";
import { Global } from "@emotion/react";
import SEO from "@/components/SEO";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "@/components/Theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <SEO />
        <body>
          <Global styles={global} />
          <Providers>
            <ThemeProvider theme={Theme}>
              <Container maxWidth="sm">
                <StyledLayout>{children}</StyledLayout>
              </Container>
            </ThemeProvider>
          </Providers>
        </body>
      </html>
    </>
  );
}
