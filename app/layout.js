import localFont from "next/font/local";
import "./globals.css";
import Header from "./views/header/page";
import Menu from "./views/menu/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "EventBooking",
  description: "EventBooking, reserva tus eventos de la mejor manera!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <Menu />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
