import './globals.css'
import '@fontsource-variable/manrope'
import { ThemeProvider } from '@/components/theme-provider'

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
      <body className="font-sans antialiased bg-white text-[#171614]">
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

