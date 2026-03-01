'use client'

import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '@/components/ui/code-block'
import { TabbedPreview } from '@/components/TabbedPreview'
import { carousel_code_preview } from '@/constants/components_showcase/carousel_code_preview'
import { CodeInline } from '@/components/ui/code-inline'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import React from 'react'

const page = () => {
  
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  React.useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-foreground">Carousel</h1>
      <p className="text-sm text-muted-foreground mb-6">Displays a Carousel.</p>

      <Separator />

      <h2 className="text-2xl font-bold text-foreground py-4">Installation</h2>
      {carousel_code_preview.code_snippet && (
        <CodeBlock
          language="bash"
          filename='Calendar Import'
          code={carousel_code_preview.code_snippet}
        />
      )}

      <Separator className="my-8" />

      {/* Basic Carousel Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Basic Carousel</h2>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={carousel_code_preview.basic}
          language="typescript"
          filename="Calendar-Basic.tsx"
          highlightLines={[5]}
        >
          <div>
            <Carousel className="w-full max-w-[12rem] sm:max-w-xs">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Sizes Carousel Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Sizes Carousel</h2>
        <p>To set the size of the items, you can use the <CodeInline>basis</CodeInline> utility class on the <CodeInline>{`<CarouselItem />`}</CodeInline>.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={carousel_code_preview.sizes}
          language="typescript"
          filename="Calendar-Sizes.tsx"
          highlightLines={[21]}
        >
          <div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-[12rem] sm:max-w-xs md:max-w-sm"
            >
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-3xl font-semibold">{index + 1}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Spacing Carousel Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Spacing Carousel</h2>
        <p>To set the spacing between the items, we use a <CodeInline>pl-[VALUE]</CodeInline> utility on the <CodeInline>{`<CarouselItem />`}</CodeInline> and a negative <CodeInline>-ml-[VALUE]</CodeInline> on the <CodeInline>{`<CarouselContent />`}</CodeInline>.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={carousel_code_preview.spacing}
          language="typescript"
          filename="Calendar-Spacing.tsx"
          highlightLines={[14, 16]}
        >
          <div>
            <Carousel className="w-full max-w-[12rem] sm:max-w-xs md:max-w-sm">
              <CarouselContent className="-ml-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="basis-1/2 pl-1 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-2xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* API Carousel Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">API</h2>
        <p>Use a state and the <CodeInline>setApi</CodeInline> props to get an instance of the carousel API.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={carousel_code_preview.api}
          language="typescript"
          filename="Calendar-api.tsx"
          highlightLines={[19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 34, 36, 37, 49, 50, 51]}
        >
          <div>
            <div className="mx-auto max-w-[10rem] sm:max-w-xs">
              <Carousel setApi={setApi} className="w-full max-w-xs">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <Card className="m-px">
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="text-muted-foreground py-2 text-center text-sm">
                Slide {current} of {count}
              </div>
            </div>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />


      
    </div>
  )
}

export default page