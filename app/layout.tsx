import type { Metadata } from "next";
import { JetBrains_Mono, Varela_Round, Sacramento, Poiret_One } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
});

const varelaRound = Varela_Round({
  variable: "--font-varelaRound",
  weight: "400",
  subsets: ["latin"],
});

const sacramento = Sacramento({
  variable: "--font-sacramento",
  weight: "400",
  subsets: ["latin"],
});

const poiret_One = Poiret_One({
  variable: "--font-poiretOne",
  weight: "400",
  subsets: ["latin"],
});


// const jetbrainsMono = JetBrains_Mono({
//   variable: "--font-jetbrainsMono",
//   subsets: ["latin"],
// });

// const geistMono = jetbrainsMono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Kelechi Kingsley",
  description: "Modern Portfolio built with NextJs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${varelaRound.variable} ${poiret_One.variable} ${sacramento.variable}} antialiased`}
      >
        
        {children}
      </body>
    </html>
  );
}
