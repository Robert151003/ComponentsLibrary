'use client'

import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '@/components/ui/code-block'
import { TabbedPreview } from '@/components/TabbedPreview'
import { badge_code_preview } from '@/constants/components_showcase/badge_code_preview'
import { CodeInline } from '@/components/ui/code-inline'
import { Badge } from "@/components/ui/badge"
import { ArrowUpRightIcon, BadgeCheck, BookmarkIcon } from 'lucide-react'
import { Spinner } from "@/components/ui/spinner"
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-foreground">Badge</h1>
      <p className="text-sm text-muted-foreground mb-6">Displays a badge or a component that looks like a badge.</p>

      <Separator />

      <h2 className="text-2xl font-bold text-foreground py-4">Installation</h2>
      {badge_code_preview.code_snippet && (
        <CodeBlock
          language="bash"
          filename='Badge Import'
          code={badge_code_preview.code_snippet}
        />
      )}

      <Separator className="my-8" />

      {/* Variant Badge Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Variant Badge</h2>
        <p className="text-medium text-foreground py-4">Use the <CodeInline>variant</CodeInline> prop to change the variant of the badge.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={badge_code_preview.variants}
          language="typescript"
          filename="Badge-Basic.tsx"
          highlightLines={[7, 8, 9, 10]}
        >
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="ghost">Ghost</Badge>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Icon Badge Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Icon Badge</h2>
        <p className="text-medium text-foreground py-4">You can render an icon inside the badge. Use <CodeInline>data-icon="inline-start"</CodeInline> to render the icon on the left and <CodeInline>data-icon="inline-end"</CodeInline> to render the icon on the right.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={badge_code_preview.icon}
          language="typescript"
          filename="Badge-Icon.tsx"
          highlightLines={[8, 13]}
        >
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">
              <BadgeCheck data-icon="inline-start" />
              Verified
            </Badge>
            <Badge variant="outline">
              Bookmark
              <BookmarkIcon data-icon="inline-end" />
            </Badge>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Spinner Badge Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Spinner Badge</h2>
        <p className="text-medium text-foreground py-4">You can render a spinner inside the badge. Remember to add the <CodeInline>data-icon="inline-start"</CodeInline> or <CodeInline>data-icon="inline-end"</CodeInline> prop to the spinner.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={badge_code_preview.spinner}
          language="typescript"
          filename="Badge-Spinner.tsx"
          highlightLines={[8, 13]}
        >
          <div className="flex flex-wrap gap-2">
            <Badge variant="destructive">
              <Spinner data-icon="inline-start" />
              Deleting
            </Badge>
            <Badge variant="secondary">
              Generating
              <Spinner data-icon="inline-end" />
            </Badge>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Link Badge Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Link Badge</h2>
        <p className="text-medium text-foreground py-4">Use the <CodeInline>asChild</CodeInline> prop to render a link as a badge.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={badge_code_preview.link}
          language="typescript"
          filename="Badge-Link.tsx"
          highlightLines={[8]}
        >
          <div className="">
            <Badge asChild>
              <Link href="#">
                Open Link <ArrowUpRightIcon data-icon="inline-end" />
              </Link>
            </Badge>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Colours Badge Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Colours Badge</h2>
        <p className="text-medium text-foreground py-4">You can customize the colors of a badge by adding custom classes such as <CodeInline>bg-green-50 dark:bg-green-800</CodeInline> to the <CodeInline>Badge</CodeInline> component.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={badge_code_preview.colours}
          language="typescript"
          filename="Badge-Colours.tsx"
          highlightLines={[8]}
        >
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              Blue
            </Badge>
            <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
              Green
            </Badge>
            <Badge className="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
              Sky
            </Badge>
            <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
              Purple
            </Badge>
            <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
              Red
            </Badge>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />


    </div>
  )
}

export default page