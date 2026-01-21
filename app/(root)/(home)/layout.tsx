'use client'

import { AppSidebar } from '@/components/AppSidebar'
import { Button } from '@/components/ui/button'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { ReactNode } from 'react'

const HomeLayout = ({ children }: { children: ReactNode }) => {

  const { setTheme } = useTheme()

    return (
    <div className="relative bg-background min-h-screen">
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger className='absolute top-4 left-4 z-30 transition-[left] duration-200 ease-linear md:left-[calc(var(--sidebar-width)+0.75rem)] md:peer-data-[collapsible=icon]:left-[calc(var(--sidebar-width-icon)+0.75rem)]' />
        <div className='fixed top-4 right-4 z-30'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <main className='relative bg-background min-h-screen flex-1 min-w-0 pt-20 max-w-6xl mx-auto px-6'>
          {children}
        </main>
      </SidebarProvider>
    </div>

    
  )
}

export default HomeLayout