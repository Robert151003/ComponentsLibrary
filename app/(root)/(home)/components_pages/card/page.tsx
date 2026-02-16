import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '@/components/ui/code-block'
import { TabbedPreview } from '@/components/TabbedPreview'
import { card_code_preview } from '@/constants/components_showcase/card_code_preview'
import { CodeInline } from '@/components/ui/code-inline'

import { Button } from '@/components/ui/button'
import { Card, CardAction, CardDescription, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

const page = () => {
  

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-foreground">Calendar</h1>
      <p className="text-sm text-muted-foreground mb-6">Displays a calendar.</p>

      <Separator />

      <h2 className="text-2xl font-bold text-foreground py-4">Installation</h2>
      {card_code_preview.code_snippet && (
        <CodeBlock
          language="bash"
          filename='Card Import'
          code={card_code_preview.code_snippet}
        />
      )}

      <Separator className="my-8" />

      {/* Basic Card Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Basic Card</h2>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={card_code_preview.basic}
          language="typescript"
          filename="Card-Basic.tsx"
          highlightLines={[]}
        >
          <div>
            <Card className="size-sm mx-auto w-full max-w-sm">
              <CardHeader>
                <CardTitle>Small Card</CardTitle>
                <CardDescription>
                  This card uses the small size variant.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  The card component supports a size prop that can be set to
                  &quot;sm&quot; for a more compact appearance.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Action
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />
      
      
      {/* Image Card Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Imge Card</h2>
        <p className="text-medium text-foreground py-4">Add an image before the card header to create a card with an image.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={card_code_preview.image}
          language="typescript"
          filename="Card-Image.tsx"
          highlightLines={[15, 16, 17, 18, 19, 20, 21]}
        >
          <div>
            <Card className="relative mx-auto w-full max-w-sm pt-0">
              <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
              <Image
                src="https://avatar.vercel.sh/shadcn1"
                alt="Event cover"
                width={400}
                height={225}
                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40 rounded-t-lg"
              />
              <CardHeader>
                <CardAction>
                  <Badge variant="secondary">Featured</Badge>
                </CardAction>
                <CardTitle>Design systems meetup</CardTitle>
                <CardDescription>
                  A practical talk on component APIs, accessibility, and shipping
                  faster.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full">View Event</Button>
              </CardFooter>
            </Card>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />


      
    </div>
  )
}

export default page