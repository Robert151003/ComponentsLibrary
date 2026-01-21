'use client'

import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '@/components/ui/code-block'
import { TabbedPreview } from '@/components/TabbedPreview'
import { import_functions, usage_Code } from '@/constants/import_functions'
import { seperator_code_previews } from '@/constants/components_showcase/seperator_code_preview'
import { CodeInline } from '@/components/ui/code-inline'

const page = () => {


  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-foreground">Separator</h1>
      <p className="text-sm text-muted-foreground mb-6">Visually or semantically separates content.</p>

      <Separator />

      <h2 className="text-2xl font-bold text-foreground py-4">Installation</h2>
      {seperator_code_previews.code_snippet && (
        <CodeBlock
          language="bash"
          filename='Separator Import'
          code={seperator_code_previews.code_snippet}
        />
      )}

      <Separator className="mt-8" />

      <h2 className="text-2xl font-bold text-foreground py-4">Preview</h2>
      <p className="text-medium text-foreground py-4">A basic seperator. Can be made vertical by adding <CodeInline>orientation="vertical"</CodeInline> to the seperator.</p>
      <TabbedPreview 
        width="100%" 
        height="40vh" 
        className="p-4"
        code={seperator_code_previews.basic}
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

      <h2 className="text-2xl font-bold text-foreground py-4">Usage</h2>
      {seperator_code_previews.import && (
        <div className='pb-6'>
          <CodeBlock
            language="typescript"
            filename='Seperator Usage'
            code={seperator_code_previews.import}
          />
        </div>
      )}
    </div>
  )
}

export default page