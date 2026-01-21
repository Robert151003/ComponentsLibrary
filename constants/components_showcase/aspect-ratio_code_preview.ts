export const aspect_ratio_code_preview = {
code_snippet: 'npx shadcn@latest add aspect-ratio',

import:`import { AspectRatio } from '@/components/ui/aspect-ratio'`,

landscape: `import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function AlertDemo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <Image src='' alt='Image' className='rounded-mb object-cover' />
    </AspectRatio>
  )
}`,

portrait: `import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function AlertDemo() {
  return (
    <AspectRatio ratio={9 / 16}>
      <Image src='' alt='Image' className='rounded-mb object-cover' />
    </AspectRatio>
  )
}`,

square: `import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function AlertDemo() {
  return (
    <AspectRatio ratio={1 / 1}>
      <Image src='' alt='Image' className='rounded-mb object-cover' />
    </AspectRatio>
  )
}`,
}