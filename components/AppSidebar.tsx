'use client'

import React, { useState } from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { components_sidebar_links, installation_sidebar_links, sidebar_links } from "@/constants/sidebar_links"
import { Moon, Sun, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function AppSidebar() {
  const [isComponentsOpen, setIsComponentsOpen] = useState(true)
  const [isInstallationOpen, setIsInstallationOpen] = useState(true)
  const { setTheme } = useTheme()

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
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
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebar_links.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel asChild>
            <button
              onClick={() => setIsInstallationOpen(!isInstallationOpen)}
              className="group/collapsible flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm font-medium text-sidebar-foreground/70 outline-none hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 focus-visible:ring-sidebar-ring"
            >
              Installation
              <ChevronDown className={`ml-auto transition-transform ${isInstallationOpen ? 'rotate-180' : ''}`} />
            </button>
          </SidebarGroupLabel>
          {isInstallationOpen && (
            <SidebarGroupContent>
              <SidebarMenu>
              {installation_sidebar_links.sort((a, b) => a.title.localeCompare(b.title)).map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              </SidebarMenu>
            </SidebarGroupContent>
          )}
        </SidebarGroup>
        <SidebarSeparator/>
        <SidebarGroup>
          <SidebarGroupLabel asChild>
            <button
              onClick={() => setIsComponentsOpen(!isComponentsOpen)}
              className="group/collapsible flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm font-medium text-sidebar-foreground/70 outline-none hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 focus-visible:ring-sidebar-ring"
            >
              Components
              <ChevronDown className={`ml-auto transition-transform ${isComponentsOpen ? 'rotate-180' : ''}`} />
            </button>
          </SidebarGroupLabel>
          {isComponentsOpen && (
            <SidebarGroupContent>
              <SidebarMenu>
              {components_sidebar_links.sort((a, b) => a.title.localeCompare(b.title)).map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              </SidebarMenu>
            </SidebarGroupContent>
          )}
        </SidebarGroup>
        
      </SidebarContent>
    </Sidebar>
  )
}