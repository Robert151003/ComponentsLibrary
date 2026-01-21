'use client'

import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '@/components/ui/code-block'
import { TabbedPreview } from '@/components/TabbedPreview'
import { aspect_ratio_code_preview } from '@/constants/components_showcase/aspect-ratio_code_preview'
import { CodeInline } from '@/components/ui/code-inline'
import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'

const page = () => {


  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-foreground">Aspect Ratio</h1>
      <p className="text-sm text-muted-foreground mb-6">Displays content within a desired ratio.</p>

      <Separator />

      <h2 className="text-2xl font-bold text-foreground py-4">Installation</h2>
      {aspect_ratio_code_preview.code_snippet && (
        <CodeBlock
          language="bash"
          filename='Alert Import'
          code={aspect_ratio_code_preview.code_snippet}
        />
      )}

      <Separator className="my-8" />

      {/* Landscape Aspect Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Landscape</h2>
        <p className="text-medium text-foreground py-4">A landscape aspect ratio component using the <CodeInline>{`ratio={16 / 9}`}</CodeInline> prop. This is useful for displaying images in a landscape format.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-2xs"
          code={aspect_ratio_code_preview.landscape}
          language="typescript"
          filename="AspectRatio-Landscape.tsx"
          highlightLines={[]}
        >
          <div>
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/images/grey.jpg"
                alt='Image'
                fill
                className='rounded-md object-cover'
              />
            </AspectRatio>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Portrait Aspect Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Portrait</h2>
        <p className="text-medium text-foreground py-4">A portrait aspect ratio component using the <CodeInline>{`ratio={9 / 16}`}</CodeInline> prop. This is useful for displaying images in a portrait format.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-2xs"
          code={aspect_ratio_code_preview.portrait}
          language="typescript"
          filename="AspectRatio-Portrait.tsx"
          highlightLines={[]}
        >
          <div>
            <AspectRatio ratio={9 / 16}>
              <Image
                src="/images/grey.jpg"
                alt='Image'
                fill
                className='rounded-md object-cover'
              />
            </AspectRatio>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Sqaure Aspect Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Square</h2>
        <p className="text-medium text-foreground py-4">A square aspect ratio component using the <CodeInline>{`ratio={1 / 1}`}</CodeInline> prop. This is useful for displaying images in a square format.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-2xs"
          code={aspect_ratio_code_preview.square}
          language="typescript"
          filename="AspectRatio-Portrait.tsx"
          highlightLines={[]}
        >
          <div>
            <AspectRatio ratio={1 / 1}>
              <Image
                src="/images/grey.jpg"
                alt='Image'
                fill
                className='rounded-md object-cover'
              />
            </AspectRatio>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      

    </div>
  )
}

export default page