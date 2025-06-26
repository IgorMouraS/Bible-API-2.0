import type { Metadata } from "next";
import { Montserrat, Roboto, Tangerine } from "next/font/google";
import StyledComponentsRegistry from './registry';
import { GlobalStyle } from './styles/globals.style';

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const tangerine = Tangerine({
  variable: "--font-tangerine",
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Bible Api 2.0",
  description: "Bible Api 2.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${montserrat.variable} ${tangerine.variable} ${roboto.variable} antialiased`}
      >
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
