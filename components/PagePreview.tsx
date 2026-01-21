'use client'

import React, { ReactNode } from 'react'

interface PagePreviewProps {
  children: ReactNode
  className?: string
  width?: string // e.g., "80vw", "90%", "1200px", "100%"
  height?: string // e.g., "80vh", "600px", "auto"
  mobileWidth?: string // Optional override for mobile
  mobileHeight?: string // Optional override for mobile
}

export function PagePreview({ 
  children, 
  className = '',
  width = '90%',
  height = '80vh',
  mobileWidth,
  mobileHeight
}: PagePreviewProps) {
  const containerId = React.useId()
  const uniqueClass = `page-preview-${containerId.replace(/:/g, '-')}`
  
  // Use mobile values if provided, otherwise use desktop values
  const finalMobileWidth = mobileWidth || width
  const finalMobileHeight = mobileHeight || height
  
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .${uniqueClass} [data-slot="sidebar-container"] {
          position: absolute !important;
          left: 0 !important;
          top: 0 !important;
          bottom: 0 !important;
          height: 100% !important;
        }
        .${uniqueClass} [data-slot="sidebar-gap"] {
          position: relative !important;
          flex-shrink: 0 !important;
        }
        .${uniqueClass} .group {
          position: relative !important;
        }
        .${uniqueClass} [data-slot="sidebar-inner"] {
          border-radius: 0 !important;
        }
        .${uniqueClass} [data-side="left"][data-slot="sidebar-container"] {
          border-right: 1px solid hsl(var(--border)) !important;
        }
        .${uniqueClass}-box {
          width: ${finalMobileWidth};
          height: ${finalMobileHeight};
          min-height: ${finalMobileHeight};
        }
        @media (min-width: 768px) {
          .${uniqueClass}-box {
            width: ${width};
            height: ${height};
            min-height: ${height};
          }
        }
      `}} />
      <div className="flex justify-center p-4 md:p-8">
        <div 
          className={`border rounded-lg shadow-lg bg-background relative overflow-hidden ${uniqueClass} ${uniqueClass}-box ${className}`}
        >
          <div className="flex relative h-full">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
