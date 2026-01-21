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
import { ChevronDown } from "lucide-react"

export function AppSidebar() {
  const [isComponentsOpen, setIsComponentsOpen] = useState(true)
  const [isInstallationOpen, setIsInstallationOpen] = useState(true)

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
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