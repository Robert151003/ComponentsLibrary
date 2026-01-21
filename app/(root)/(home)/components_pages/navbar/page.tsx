'use client'

import React from 'react'
import { AppSidebar } from '@/components/AppSidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

const page = () => {
  return (
    <div>

      <div className="p-4 pt-16">
                <h1 className="text-2xl font-bold mb-2">Navbar Component</h1>
                <p className="text-muted-foreground">This is the Navbar component displayed in a box.</p>
            </div>
    </div>
  )
}

export default page