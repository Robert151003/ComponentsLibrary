'use client'

import { AppSidebar } from '@/components/AppSidebar'
import { Sidebar, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React, { ReactNode } from 'react'

const HomeLayout = ({ children }: { children: ReactNode }) => {

  return (
    <div className="bg-background min-h-screen">
        <SidebarProvider>
            <AppSidebar />
            <main className='relative bg-background min-h-screen pl-60 pt-20'>
                <SidebarTrigger className='absolute top-4 left-4' />
                {children}
            </main>
        </SidebarProvider>
    </div>

    
  )
}

export default HomeLayout