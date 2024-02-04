import { Inter } from 'next/font/google'
import './globals.css'
import Headers from '@/components/headers'
const inter = Inter({ subsets: ['latin'] })
import RecoilProvider from '../components/RecoilProvider'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from "@/components/ui/toaster"

export const metadata = {
  title: 'Greenmind Store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
        <RecoilProvider>
        <Headers/>
        {children}
        </RecoilProvider>
        </ThemeProvider>
        <Toaster />
        </body>
    </html>
  )
}
