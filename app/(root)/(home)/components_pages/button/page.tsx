'use client'

import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '@/components/ui/code-block'
import { TabbedPreview } from '@/components/TabbedPreview'
import { button_code_preview } from '@/constants/components_showcase/button_code_preview'
import { CodeInline } from '@/components/ui/code-inline'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowUpIcon, CircleFadingArrowUpIcon } from 'lucide-react'
import { IconGitBranch } from '@tabler/icons-react'
import { Spinner } from '@/components/ui/spinner'

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-foreground">Button</h1>
      <p className="text-sm text-muted-foreground mb-6">Displays a button or a component that looks like a button.</p>

      <Separator />

      <h2 className="text-2xl font-bold text-foreground py-4">Installation</h2>
      {button_code_preview.code_snippet && (
        <CodeBlock
          language="bash"
          filename='Button Import'
          code={button_code_preview.code_snippet}
        />
      )}

      <Separator className="my-8" />

      {/* Basic Button Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Basic Button</h2>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={button_code_preview.basic}
          language="typescript"
          filename="Button-Basic.tsx"
          highlightLines={[7, 8, 9, 10]}
        >
          <div>
            <Button>Button</Button>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Outline Button Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Outline Button</h2>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={button_code_preview.outline}
          language="typescript"
          filename="Button-Outline.tsx"
          highlightLines={[4]}
        >
          <div>
            <Button variant="outline">Outline</Button>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Ghost Button Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Ghost Button</h2>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={button_code_preview.ghost}
          language="typescript"
          filename="Button-Ghost.tsx"
          highlightLines={[4]}
        >
          <div>
            <Button variant="ghost">Ghost</Button>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Secondary Button Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Secondary Button</h2>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={button_code_preview.secondary}
          language="typescript"
          filename="Button-Secondary.tsx"
          highlightLines={[4]}
        >
          <div>
            <Button variant="secondary">Secondary</Button>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Destructive Button Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Destructive Button</h2>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={button_code_preview.destructive}
          language="typescript"
          filename="Button-Destructive.tsx"
          highlightLines={[4]}
        >
          <div>
            <Button variant="destructive">Destructive</Button>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Link Button Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Link Button</h2>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={button_code_preview.link_variant}
          language="typescript"
          filename="Button-Link.tsx"
          highlightLines={[4]}
        >
          <div>
            <Button variant="link">Link</Button>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Icon Button Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Icon Button</h2>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={button_code_preview.icon}
          language="typescript"
          filename="Button-Icon.tsx"
          highlightLines={[7]}
        >
          <div>
            <Button variant="outline" size="icon">
              <CircleFadingArrowUpIcon />
            </Button>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* With Icon Button Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">With Icon Button</h2>
        <p className="text-medium text-foreground py-4">Remember to add the <CodeInline>data-icon="inline-start"</CodeInline> or <CodeInline>data-icon="inline-end"</CodeInline> attribute to the icon for the correct spacing.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={button_code_preview.with_icon}
          language="typescript"
          filename="Button-WithIcon.tsx"
          highlightLines={[]}
        >
          <div>
            <Button variant="outline" size="sm">
              <IconGitBranch /> New Branch
            </Button>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Rounded Button Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Rounded Button</h2>
        <p className="text-medium text-foreground py-4">Use the <CodeInline>rounded-full</CodeInline> class to make the button rounded.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={button_code_preview.rounded}
          language="typescript"
          filename="Button-Rounded.tsx"
          highlightLines={[7]}
        >
          <div className="flex flex-col gap-8">
            <Button variant="outline" size="icon" className="rounded-full">
              <ArrowUpIcon />
            </Button>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Spinner Button Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Spinner Button</h2>
        <p className="text-medium text-foreground py-4">Render a <CodeInline>{`<Spinner />`}</CodeInline> component inside the button to show a loading state. Remember to add the <CodeInline>data-icon="inline-start"</CodeInline> or <CodeInline>data-icon="inline-end"</CodeInline> attribute to the spinner for the correct spacing.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={button_code_preview.spinner}
          language="typescript"
          filename="Button-Spinner.tsx"
          highlightLines={[8, 13]}
        >
          <div className="flex gap-2">
            <Button variant="outline" disabled>
              <Spinner data-icon="inline-start" />
              Generating
            </Button>
            <Button variant="secondary" disabled>
              Downloading
              <Spinner data-icon="inline-start" />
            </Button>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Link Button Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Link Button</h2>
        <p className="text-medium text-foreground py-4">You can use the <CodeInline>asChild</CodeInline> prop on <CodeInline>{`<Button />`}</CodeInline> to make another component look like a button. Here's an example of a link that looks like a button.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={button_code_preview.link}
          language="typescript"
          filename="Button-Link.tsx"
          highlightLines={[7]}
        >
          <div className="">
            <Button asChild>
              <Link href="#">Login</Link>
            </Button>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

    </div>
  )
}

export default page