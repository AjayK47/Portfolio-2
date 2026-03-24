import './globals.css'
import { VT323, Space_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
})

const vt323 = VT323({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vt323',
})

export const metadata = {
  title: 'Ajay Kommineni - AI/ML Engineer',
  description: 'AI/ML Engineer specializing in Agentic Frameworks and RAG.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceMono.variable} ${vt323.variable} font-mono antialiased bg-black text-[#00ff41]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

