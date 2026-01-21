import React, { ReactNode } from 'react'
import { ThemeProvider } from "@/components/ThemeProvider"

const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <main>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
    </main>
  )
}

export default RootLayout