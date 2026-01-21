'use client'

import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '@/components/ui/code-block'
import { TabbedPreview } from '@/components/TabbedPreview'
import { import_functions, usage_Code } from '@/constants/import_functions'

const page = () => {
  const importData = import_functions.find(item => item.title === 'separator_import')
  const usageData = usage_Code.find(item => item.title === 'separator_usage')

  const previewCode = `import { Separator } from '@/components/ui/separator'

export default function SeparatorDemo() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-foreground">Separator</h1>
      <Separator />
      <p className="text-sm text-muted-foreground m-6">This is an example separator</p>
      <Separator className='my-4' />
      <div className="flex h-5 items-center space-x-4 text-sm items-center">
        <div className='text-muted-foreground'>One</div>
        <Separator orientation="vertical" />
        <div className='text-muted-foreground'>Two</div>
        <Separator orientation="vertical" />
        <div className='text-muted-foreground'>Three</div>
      </div>
    </div>
  )
}`

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-foreground">Separator</h1>
      <p className="text-sm text-muted-foreground mb-6">Visually or semantically separates content.</p>

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
        width="100%" 
        height="40vh" 
        className="p-4"
        code={previewCode}
        language="typescript"
        filename="separator-demo.tsx"
        highlightLines={[1, 7, 9, 12, 14]}
      >
        <div>
          <h1 className="text-3xl font-bold mb-6 text-foreground">Separator</h1>
          <Separator />
          <p className="text-sm text-muted-foreground m-6">This is an example separator</p>
          <Separator className='my-4' />
          <div className="flex h-5 items-center space-x-4 text-sm items-center">
            <div className='text-muted-foreground'>One</div>
            <Separator orientation="vertical" />
            <div className='text-muted-foreground'>Two</div>
            <Separator orientation="vertical" />
            <div className='text-muted-foreground'>Three</div>
          </div>
        </div>
      </TabbedPreview>

      <Separator className="mt-8" />

      <h2 className="text-2xl font-bold mb-6 text-foreground py-4">Usage</h2>
      {usageData && (
        <div className='pb-6'>
          <CodeBlock
            language="typescript"
            filename={usageData.title}
            code={usageData.code_snippet}
          />
        </div>
      )}
    </div>
  )
}

export default page