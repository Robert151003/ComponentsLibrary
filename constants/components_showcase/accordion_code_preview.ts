export const accordion_code_previews = {
  code_snippet: 'npx shadcn@latest add accordion',

  basic: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function App() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="features"
      className="max-w-lg"
    >
      <AccordionItem value="features">
        <AccordionTrigger>🚀 What makes this component special?</AccordionTrigger>
        <AccordionContent>
          Our accordion component combines performance with beautiful animations,
          smooth transitions, and full keyboard accessibility. It's built on Radix UI
          primitives for rock-solid reliability.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="customize">
        <AccordionTrigger>🎨 How can I customize the styling?</AccordionTrigger>
        <AccordionContent>
          Use Tailwind CSS classes to style your accordion. All components accept
          className props. You can customize colors, spacing, animations, and more
          to match your brand.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="performance">
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
  )
}`,

  multiple: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function App() {
  return (
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
  )
}`,

  disabled: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function App() {
  return (
    <Accordion
      type="single"
      collapsible
      className="max-w-lg"
      defaultValue="item-1"
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
  )
}`,

  bordered: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function App() {
  return (
    <Accordion
      type="single"
      collapsible
      className="max-w-lg border rounded-lg"
      defaultValue="item-1"
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
  )
}`,
}