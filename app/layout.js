import localFont from "next/font/local";
import { AuthProvider } from '../app/context/AuthContext'
import "./globals.css";
import Header from "./components/header/page";
import Footer from './components/footer/page';
import Menu from "./components/menu/page";
import './icons';  
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; 


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
  icons: {
    icon: '/favicon.png', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AuthProvider>
          <Header />
          <Menu />
          <main>
            {children}
          </main>
          <Footer /> 
        </AuthProvider>
      </body>
    </html>
  );
}
