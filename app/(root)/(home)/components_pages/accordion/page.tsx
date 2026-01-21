'use client'

import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '@/components/ui/code-block'
import { TabbedPreview } from '@/components/TabbedPreview'
import { import_functions} from '@/constants/import_functions'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const page = () => {
  const importData = import_functions.find(item => item.title === 'accordion_import')
  const defaultContent =
    "This is a test Accordion component. Click the triggers to expand and collapse the content."

  const previewCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function App() {
  const defaultContent =
    "This is a test Accordion component. Click the triggers to expand and collapse the content."

  return (
    <Accordion
            type="single"
            collapsible
            defaultValue="shipping"
            className="max-w-lg"
          >
            <AccordionItem value="shipping">
              <AccordionTrigger>What are your shipping options?</AccordionTrigger>
              <AccordionContent>
                We offer standard (5-7 days), express (2-3 days), and overnight
                shipping. Free shipping on international orders.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="returns">
              <AccordionTrigger>What is your return policy?</AccordionTrigger>
              <AccordionContent>
                Returns accepted within 30 days. Items must be unused and in original
                packaging. Refunds processed within 5-7 business days.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="support">
              <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
              <AccordionContent>
                Reach us via email, live chat, or phone. We respond within 24 hours
                during business days.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
  )
}`

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-foreground">Accordion</h1>
      <p className="text-sm text-muted-foreground mb-6">Accordion display a list of high-level options that can expand/collapse to reveal more information.</p>

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
        width="auto" 
        height="auto" 
        className="p-4"
        code={previewCode}
        language="typescript"
        filename="accordion-demo.tsx"
        highlightLines={[]}
      >
          <Accordion
            type="single"
            collapsible
            defaultValue="shipping"
            className="max-w-lg"
          >
            <AccordionItem value="shipping">
              <AccordionTrigger>What are your shipping options?</AccordionTrigger>
              <AccordionContent>
                We offer standard (5-7 days), express (2-3 days), and overnight
                shipping. Free shipping on international orders.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="returns">
              <AccordionTrigger>What is your return policy?</AccordionTrigger>
              <AccordionContent>
                Returns accepted within 30 days. Items must be unused and in original
                packaging. Refunds processed within 5-7 business days.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="support">
              <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
              <AccordionContent>
                Reach us via email, live chat, or phone. We respond within 24 hours
                during business days.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
      </TabbedPreview>

      <Separator className="mt-8" />
    </div>
  )
}

export default page