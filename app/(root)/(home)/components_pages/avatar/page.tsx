'use client'

import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '@/components/ui/code-block'
import { TabbedPreview } from '@/components/TabbedPreview'
import { avatar_code_preview } from '@/constants/components_showcase/avatar_code_preview'
import { CodeInline } from '@/components/ui/code-inline'
import { Avatar, AvatarImage, AvatarFallback, AvatarBadge, AvatarGroup, AvatarGroupCount } from '@/components/ui/avatar'
import { PlusIcon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'


const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-foreground">Avatar</h1>
      <p className="text-sm text-muted-foreground mb-6">A component that displays a user profile image or fallback content.</p>

      <Separator />

      <h2 className="text-2xl font-bold text-foreground py-4">Installation</h2>
      {avatar_code_preview.code_snippet && (
        <CodeBlock
          language="bash"
          filename='Avatar Import'
          code={avatar_code_preview.code_snippet}
        />
      )}

      <Separator className="my-8" />

      {/* Basic Avatar Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Basic Avatar</h2>
        <p className="text-medium text-foreground py-4">A basic avatar with an image and fallback content.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={avatar_code_preview.basic}
          language="typescript"
          filename="Avatar-Basic.tsx"
          highlightLines={[]}
        >
          <div>
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="grayscale"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Badge Avatar Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Avatar with Badge</h2>
        <p className="text-medium text-foreground py-4">Use the <CodeInline>AvatarBadge</CodeInline> component to add a badge to the avatar. The badge is positioned at the bottom right of the avatar.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={avatar_code_preview.badge}
          language="typescript"
          filename="Avatar-Badge.tsx"
          highlightLines={[13]}
        >
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
              <AvatarBadge className="bg-green-600 dark:bg-green-800" />
            </Avatar>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />
      
      {/* Badge with Icon Avatar Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Badge with Icon</h2>
        <p className="text-medium text-foreground py-4">You can also use an icon inside <CodeInline>{`<AvatarBadge>`}</CodeInline>.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={avatar_code_preview.icon_badge}
          language="typescript"
          filename="Avatar-Icon-Badge.tsx"
          highlightLines={[14, 15, 16]}
        >
          <div>
            <Avatar className="grayscale">
              <AvatarImage src="https://github.com/pranathip.png" alt="@pranathip" />
              <AvatarFallback>PP</AvatarFallback>
              <AvatarBadge>
                <PlusIcon />
              </AvatarBadge>
            </Avatar>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />
      
      {/* Group Avatar Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Group Avatar</h2>
        <p className="text-medium text-foreground py-4">Use the <CodeInline>AvatarGroup</CodeInline> component to add a group of avatars.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={avatar_code_preview.group}
          language="typescript"
          filename="Avatar-Group.tsx"
          highlightLines={[10, 26]}
        >
          <div>
            <AvatarGroup className="grayscale">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </AvatarGroup>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />
      
      {/* Group Count Avatar Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Avatar Group Count</h2>
        <p className="text-medium text-foreground py-4">Use <CodeInline>{`<AvatarGroupCount>`}</CodeInline> to add a count to the group.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={avatar_code_preview.group_count}
          language="typescript"
          filename="Avatar-Group-Count.tsx"
          highlightLines={[27]}
        >
          <div>
            <AvatarGroup className="grayscale">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              <AvatarGroupCount>+3</AvatarGroupCount>
            </AvatarGroup>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />
      
      {/* Group Icon Avatar Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Avatar Group Icon</h2>
        <p className="text-medium text-foreground py-4">You can also use an icon inside <CodeInline>{`<AvatarGroupCount>`}</CodeInline>.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={avatar_code_preview.group_icon}
          language="typescript"
          filename="Avatar-Group-Icon.tsx"
          highlightLines={[28, 29, 30]}
        >
          <div>
            <AvatarGroup className="grayscale">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              <AvatarGroupCount>
                <PlusIcon />
              </AvatarGroupCount>
            </AvatarGroup>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />
      
      {/* Sizes Avatar Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Sizes Avatar</h2>
        <p className="text-medium text-foreground py-4">Use the <CodeInline>size</CodeInline> prop to change the size of the avatar.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={avatar_code_preview.sizes}
          language="typescript"
          filename="Avatar-Sizes.tsx"
          highlightLines={[6, 14]}
        >
          <div className='flex flex-wrap items-center gap-2 grayscale'>
            <Avatar size="sm">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />
      
      {/* Dropdown Avatar Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Dropdown Avatar</h2>
        <p className="text-medium text-foreground py-4">You can use the <CodeInline>Avatar</CodeInline> component as a trigger for a dropdown menu.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={avatar_code_preview.dropdown}
          language="typescript"
          filename="Avatar-Dropdown.tsx"
          highlightLines={[]}
        >
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-32">
                <DropdownMenuGroup>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      


    </div>
  )
}

export default page