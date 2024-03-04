import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Dubinsko Pranje Nameštaja Paja",
  description:
    "Osvežite svoj nameštaj i uklonite fleke, bakterije i neprijatne mirise. Zakažite svoje pranje već danas!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
