"use client";
import { SEO, Providers, StyledLayout, Theme } from "@/components";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
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
