'use client'

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '@/components/ui/code-block'
import { TabbedPreview } from '@/components/TabbedPreview'
import { AppSidebar } from '@/components/components_showcase/AppSidebar'
import { import_functions } from '@/constants/import_functions'

const page = () => {
  const importData = import_functions.find(item => item.title === 'sidebar_import')
  const previewClass = "sidebar-preview-box"

  const previewCode = `import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/AppSidebar'

export default function SidebarDemo() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='relative bg-background flex-1'>
        <SidebarTrigger className='absolute top-4 left-4 z-10' />
        <div className="p-4 pt-16">
          <h1 className="text-2xl font-bold mb-2">Sidebar Component</h1>
          <p className="text-muted-foreground">This is the sidebar component displayed in a box.</p>
        </div>
      </main>
    </SidebarProvider>
  )
}`

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-foreground">Sidebar</h1>
      <p className="text-sm text-muted-foreground mb-6">A collapsible sidebar component with navigation links and responsive design.</p>

      <Separator />

      <h2 className="text-2xl font-bold mb-6 text-foreground py-4">Installation</h2>
      {importData && (
        <CodeBlock
          language="bash"
          filename={importData.title}
          code={importData.code_snippet}
        />
      )}

      <Separator className="mt-8" />

      <h2 className="text-2xl font-bold mb-6 text-foreground py-4">Preview</h2>
      <TabbedPreview
        code={previewCode}
        language="typescript"
        filename="sidebar-demo.tsx"
        className='w-full max-w-xl'
        highlightLines={[6, 7, 8]}
      >
        <>
          <style>{`
            .${previewClass} [data-slot="sidebar-container"] {
              position: absolute !important;
              left: 0 !important;
              top: 0 !important;
              bottom: 0 !important;
              height: 100% !important;
            }
            .${previewClass} [data-slot="sidebar-gap"] {
              position: relative !important;
              flex-shrink: 0 !important;
            }
            .${previewClass} .group {
              position: relative !important;
            }
            .${previewClass} [data-slot="sidebar-inner"] {
              border-radius: 0 !important;
            }
            .${previewClass} [data-side="left"][data-slot="sidebar-container"] {
              border-right: 1px solid hsl(var(--border)) !important;
            }
          `}</style>
          <div className={`${previewClass} relative w-full max-w-5xl h-120 border rounded-lg shadow-lg overflow-hidden bg-background`}
               >
            <SidebarProvider>
              <AppSidebar />
              <main className='relative bg-background flex-1'>
                <SidebarTrigger className='absolute top-4 left-4 z-10' />
                <div className="p-4 pt-16">
                  <h1 className="text-2xl font-bold mb-2">Sidebar Component</h1>
                  <p className="text-muted-foreground">This is the sidebar component displayed in a box.</p>
                </div>
              </main>
            </SidebarProvider>
          </div>
        </>
      </TabbedPreview>

      <Separator className="my-8" />


    </div>
  )
}

export default page