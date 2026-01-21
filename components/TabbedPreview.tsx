'use client'

import React, { ReactNode } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CodeBlock } from '@/components/ui/code-block'
import { PagePreview } from '@/components/PagePreview'

interface TabbedPreviewProps {
  children: ReactNode
  code: string
  language?: string
  filename?: string
  className?: string
  width?: string
  height?: string
  mobileWidth?: string
  mobileHeight?: string
  highlightLines?: number[]
}

export function TabbedPreview({ 
  children,
  code,
  language = 'tsx',
  filename = 'example.tsx',
  className = '',
  width = '90%',
  height = '80vh',
  mobileWidth,
  mobileHeight,
  highlightLines = []
}: TabbedPreviewProps) {
  return (
    <div className="w-full border border-border rounded-lg overflow-hidden bg-background">
      <Tabs defaultValue="preview" className="w-full">
        <div className="border-b border-border px-4">
          <TabsList className="mb-0 bg-transparent p-0 h-auto rounded-none">
            <TabsTrigger 
              value="preview"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3 text-sm"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger 
              value="code"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3 text-sm"
            >
              Code
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="preview" className="mt-0 p-0 border-none focus-visible:ring-0">
          <div className="p-6 md:p-8">
            <PagePreview 
              className={className}
              width={width}
              height={height}
              mobileWidth={mobileWidth}
              mobileHeight={mobileHeight}
            >
              {children}
            </PagePreview>
          </div>
        </TabsContent>
        
        <TabsContent value="code" className="mt-0 p-0 border-none focus-visible:ring-0">
          <div className="p-0">
            <CodeBlock
              language={language}
              filename={filename}
              code={code}
              highlightLines={highlightLines}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
