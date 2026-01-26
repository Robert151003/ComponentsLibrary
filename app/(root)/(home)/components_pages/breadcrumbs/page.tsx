'use client'

import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '@/components/ui/code-block'
import { TabbedPreview } from '@/components/TabbedPreview'
import { breadcrumbs_code_preview } from '@/constants/components_showcase/breadcrumbs_code_preview'
import { CodeInline } from '@/components/ui/code-inline'
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronDownIcon, DotIcon } from "lucide-react"
import Link from 'next/link'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-foreground">Breadcrumbs</h1>
      <p className="text-sm text-muted-foreground mb-6">Displays the path to the current resource using a hierarchy of links.</p>

      <Separator />

      <h2 className="text-2xl font-bold text-foreground py-4">Installation</h2>
      {breadcrumbs_code_preview.code_snippet && (
        <CodeBlock
          language="bash"
          filename='Breadcrumb Import'
            code={breadcrumbs_code_preview.code_snippet}
        />
      )}

      <Separator className="my-8" />

      {/* Basic Breadcrumbs Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Basic Breadcrumbs</h2>
        <p className="text-medium text-foreground py-4">A basic breadcrumb navigation showing the path to the current resource.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={breadcrumbs_code_preview.basic}
          language="typescript"
          filename="Breadcrumb-Basic.tsx"
          highlightLines={[]}
        >
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Custom Separator Breadcrumbs Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Custom Separator Breadcrumbs</h2>
        <p className="text-medium text-foreground py-4">Use a custom component as <CodeInline>children</CodeInline> for <CodeInline>{`<BreadcrumbSeparator />`}</CodeInline> to create a custom separator.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={breadcrumbs_code_preview.custom_separator}
          language="typescript"
          filename="Breadcrumb-Separator.tsx"
          highlightLines={[21, 22, 23, 29, 30, 31]}
        >
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <DotIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/components">Components</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <DotIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Dropdown Breadcrumbs Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Dropdown Breadcrumbs</h2>
        <p className="text-medium text-foreground py-4">You can compose <CodeInline>{`<BreadcrumbItem />`}</CodeInline> with a <CodeInline>{`<DropdownMenu />`}</CodeInline> to create a dropdown in the breadcrumb.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={breadcrumbs_code_preview.dropdown}
          language="typescript"
          filename="Breadcrumb-Dropdown.tsx"
          highlightLines={[32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]}
        >
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <DotIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center gap-1">
                        Components
                        <ChevronDownIcon className="size-3.5" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuGroup>
                        <DropdownMenuItem>Documentation</DropdownMenuItem>
                        <DropdownMenuItem>Themes</DropdownMenuItem>
                        <DropdownMenuItem>GitHub</DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <DotIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Collapsed Breadcrumbs Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Collapsed Breadcrumbs</h2>
        <p className="text-medium text-foreground py-4">We provide a <CodeInline>{`<BreadcrumbEllipsis />`}</CodeInline> component to show a collapsed state when the breadcrumb is too long.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={breadcrumbs_code_preview.collapsed}
          language="typescript"
          filename="Breadcrumb-Collapsed.tsx"
          highlightLines={[23]}
        >
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbEllipsis />
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/docs/components">Components</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

    </div>
  )
}

export default page