'use client'

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CodeBlock } from '@/components/ui/code-block'
import { Separator } from '@/components/ui/separator'
import { PagePreview } from '@/components/PagePreview'

const previewCode = `import { PagePreview } from "@/components/PagePreview"

export default function Example() {
  return (
    <PagePreview width="100%" height="480px" className="p-6">
      <div className="flex h-full items-center justify-center rounded-lg bg-secondary">
        <div className="space-y-2 text-center">
          <p className="text-lg font-semibold">Previewed content</p>
          <p className="text-sm text-muted-foreground">Your UI lives inside here.</p>
        </div>
      </div>
    </PagePreview>
  )
}
`

const PagePreviewDemo = () => {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Page Preview</h1>
        <p className="text-sm text-muted-foreground">
          Wrap any component tree in a fixed preview box to keep layouts contained during demos.
        </p>
      </header>

      <Separator />

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
          <div className="p-6 md:p-8 flex justify-center">
            <div className="w-full max-w-3xl">
              <PagePreview width="100%" height="480px" className="p-6">
                <div className="flex h-full items-center justify-center rounded-lg bg-secondary">
                  <div className="space-y-2 text-center">
                    <p className="text-lg font-semibold">Previewed content</p>
                    <p className="text-sm text-muted-foreground">Your UI lives inside here.</p>
                  </div>
                </div>
              </PagePreview>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code" className="mt-0 p-0 border-none focus-visible:ring-0">
          <CodeBlock
            language="tsx"
            filename="page-preview-example.tsx"
            code={previewCode}
            highlightLines={[]}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default PagePreviewDemo
