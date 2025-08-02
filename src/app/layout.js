import Header from "./components/Header";
import "./globals.css";
import AppProvider from "./AppContext";
import { Red_Hat_Text } from "next/font/google";

const redHatText = Red_Hat_Text({
  subsets: ["latin"],
  weight: ["400", "700", "600", "500"],
  variable: "--font-redhat",
  display: "swap",
});

export const metadata = {
  title: "Hot Plate 🍽",
  description: "Order your food right now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={redHatText.className}>
      <body>
        <AppProvider>
          <Header />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
