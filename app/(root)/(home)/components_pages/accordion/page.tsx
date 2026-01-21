'use client'

import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '@/components/ui/code-block'
import { TabbedPreview } from '@/components/TabbedPreview'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { accordion_code_previews } from '@/constants/components_showcase/accordion_code_preview'
import { CodeInline } from '@/components/ui/code-inline'

const page = () => {

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-foreground">Accordion</h1>
      <p className="text-sm text-muted-foreground">Accordion display a list of high-level options that can expand/collapse to reveal more information.</p>

      <Separator className='my-8'/>

      <h2 className="text-2xl font-bold text-foreground py-4">Installation</h2>
      {accordion_code_previews.code_snippet && (
        <CodeBlock
          language="bash"
          filename="Accordion Import"
          code={accordion_code_previews.code_snippet}
        />
      )}

      <Separator className="my-8" />
      
      {/* Basic Accordion Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Basic Accordion</h2>
        <p className="text-medium text-foreground py-4">A basic accordion that shows one item at a time. The first item is open by default.</p>
        <TabbedPreview 
          width="100%"
          height="auto"
          className="p-4 max-w-xl"
          code={accordion_code_previews.basic}
          language="typescript"
          filename="accordion-demo.tsx"
          highlightLines={[]}
        >

          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="max-w-lg"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>🚀 What makes this component special?</AccordionTrigger>
              <AccordionContent>
                Our accordion component combines performance with beautiful animations,
                smooth transitions, and full keyboard accessibility. It's built on Radix UI
                primitives for rock-solid reliability.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>🎨 How can I customize the styling?</AccordionTrigger>
              <AccordionContent>
                Use Tailwind CSS classes to style your accordion. All components accept
                className props. You can customize colors, spacing, animations, and more
                to match your brand.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>⚡ Is it performant?</AccordionTrigger>
              <AccordionContent>
                Absolutely! The component uses lazy rendering for content, minimal DOM
                manipulation, and is optimized for large datasets. Perfect for building
                fast, responsive interfaces.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="browser">
              <AccordionTrigger>🌐 What browsers are supported?</AccordionTrigger>
              <AccordionContent>
                We support all modern browsers including Chrome, Firefox, Safari, and Edge.
                The component gracefully degrades on older browsers while maintaining
                full functionality on newer ones.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabbedPreview>
      </div>
      
      <Separator className="my-8" />

      {/* Multiple Accordion Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Multiple Accordion</h2>
        <p className="text-medium text-foreground py-4">Use <CodeInline>type="multiple"</CodeInline> to allow multiple items to be open at the same time.</p>
        <TabbedPreview 
          width="100%"
          height="auto"
          className="p-4 max-w-xl"
          code={accordion_code_previews.multiple}
          language="typescript"
          filename="accordion-demo.tsx"
          highlightLines={[11, 13]}
        >

          <Accordion
            type="multiple"
            className="max-w-lg"
            defaultValue={["notifications"]}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>🚀 What makes this component special?</AccordionTrigger>
              <AccordionContent>
                Our accordion component combines performance with beautiful animations,
                smooth transitions, and full keyboard accessibility. It's built on Radix UI
                primitives for rock-solid reliability.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>🎨 How can I customize the styling?</AccordionTrigger>
              <AccordionContent>
                Use Tailwind CSS classes to style your accordion. All components accept
                className props. You can customize colors, spacing, animations, and more
                to match your brand.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>⚡ Is it performant?</AccordionTrigger>
              <AccordionContent>
                Absolutely! The component uses lazy rendering for content, minimal DOM
                manipulation, and is optimized for large datasets. Perfect for building
                fast, responsive interfaces.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="browser">
              <AccordionTrigger>🌐 What browsers are supported?</AccordionTrigger>
              <AccordionContent>
                We support all modern browsers including Chrome, Firefox, Safari, and Edge.
                The component gracefully degrades on older browsers while maintaining
                full functionality on newer ones.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Disabled Accordion Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Disabled Accordion</h2>
        <p className="text-medium text-foreground py-4">Use the <CodeInline>disabled</CodeInline> prop on <CodeInline>AccordionItem</CodeInline> to disable individual items.</p>
        <TabbedPreview 
          width="100%"
          height="auto"
          className="p-4 max-w-xl"
          code={accordion_code_previews.disabled}
          language="typescript"
          filename="accordion-demo.tsx"
          highlightLines={[24]}
        >

          <Accordion
            type="single"
            collapsible
            className="max-w-lg"
            defaultValue='item-1'
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>🚀 What makes this component special?</AccordionTrigger>
              <AccordionContent>
                Our accordion component combines performance with beautiful animations,
                smooth transitions, and full keyboard accessibility. It's built on Radix UI
                primitives for rock-solid reliability.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" disabled>
              <AccordionTrigger>🎨 How can I customize the styling?</AccordionTrigger>
              <AccordionContent>
                Use Tailwind CSS classes to style your accordion. All components accept
                className props. You can customize colors, spacing, animations, and more
                to match your brand.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>⚡ Is it performant?</AccordionTrigger>
              <AccordionContent>
                Absolutely! The component uses lazy rendering for content, minimal DOM
                manipulation, and is optimized for large datasets. Perfect for building
                fast, responsive interfaces.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="browser">
              <AccordionTrigger>🌐 What browsers are supported?</AccordionTrigger>
              <AccordionContent>
                We support all modern browsers including Chrome, Firefox, Safari, and Edge.
                The component gracefully degrades on older browsers while maintaining
                full functionality on newer ones.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Border Accordion Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Bordered Accordion</h2>
        <p className="text-medium text-foreground py-4">Add <CodeInline>border</CodeInline> to the <CodeInline>Accordion</CodeInline> and <CodeInline>border-b last:border-b-0</CodeInline> to the <CodeInline>AccordionItem</CodeInline> to add borders to the items.</p>
        <TabbedPreview 
          width="100%"
          height="auto"
          className="p-4 max-w-xl"
          code={accordion_code_previews.bordered}
          language="typescript"
          filename="accordion-demo.tsx"
          highlightLines={[13, 16, 24, 32, 40]}
        >

          <Accordion
            type="single"
            collapsible
            className="max-w-lg border rounded-lg"
            defaultValue='item-1'
          >
            <AccordionItem value="item-1" className="border-b px-4 last:border-b-0">
              <AccordionTrigger>🚀 What makes this component special?</AccordionTrigger>
              <AccordionContent>
                Our accordion component combines performance with beautiful animations,
                smooth transitions, and full keyboard accessibility. It's built on Radix UI
                primitives for rock-solid reliability.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b px-4 last:border-b-0">
              <AccordionTrigger>🎨 How can I customize the styling?</AccordionTrigger>
              <AccordionContent>
                Use Tailwind CSS classes to style your accordion. All components accept
                className props. You can customize colors, spacing, animations, and more
                to match your brand.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b px-4 last:border-b-0">
              <AccordionTrigger>⚡ Is it performant?</AccordionTrigger>
              <AccordionContent>
                Absolutely! The component uses lazy rendering for content, minimal DOM
                manipulation, and is optimized for large datasets. Perfect for building
                fast, responsive interfaces.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="browser" className="border-b px-4 last:border-b-0">
              <AccordionTrigger>🌐 What browsers are supported?</AccordionTrigger>
              <AccordionContent>
                We support all modern browsers including Chrome, Firefox, Safari, and Edge.
                The component gracefully degrades on older browsers while maintaining
                full functionality on newer ones.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />
    </div>
  )
}

export default page