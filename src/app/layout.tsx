"use client";
import Providers from "@/components/Providers";
import { Container } from "@mui/material";
import StyledLayout from "@/components/StyledLayout";
import SEO from "@/components/SEO";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "@/components/Theme";
import CssBaseline from "@mui/material/CssBaseline";

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
          <Providers>
            <ThemeProvider theme={Theme}>
              <CssBaseline />
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
