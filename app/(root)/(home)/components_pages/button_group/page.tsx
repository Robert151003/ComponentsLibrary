'use client'

import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '@/components/ui/code-block'
import { TabbedPreview } from '@/components/TabbedPreview'
import { button_group_code_preview, CURRENCIES } from '@/constants/components_showcase/button_group_code_preview'
import { CodeInline } from '@/components/ui/code-inline'

import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import { Button } from '@/components/ui/button'
import { AlertTriangleIcon, ArrowRightIcon, AudioLinesIcon, BotIcon, CheckIcon, ChevronDownIcon, CopyIcon, MinusIcon, PlusIcon, SearchIcon, ShareIcon, TrashIcon, UserRoundXIcon, VolumeOffIcon } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Input } from '@/components/ui/input'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '@/components/ui/select'
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from '@/components/ui/popover'
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field'
import { Textarea } from '@/components/ui/textarea'


const page = () => {
  const [currency, setCurrency] = React.useState("$")
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-foreground">Button Group</h1>
      <p className="text-sm text-muted-foreground mb-6">Displays a group of buttons.</p>

      <Separator />
      

      <h2 className="text-2xl font-bold text-foreground py-4">Installation</h2>
      {button_group_code_preview.code_snippet && (
        <CodeBlock
          language="bash"
          filename='Button Group  Import'
          code={button_group_code_preview.code_snippet}
        />
      )}

      <Separator className="my-8" />

      {/* Basic Button Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Basic Button</h2>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={button_group_code_preview.basic}
          language="typescript"
          filename="Button-Basic.tsx"
          highlightLines={[8, 9, 10, 11]}
        >
          <div>
            <ButtonGroup>
              <Button>Button 1</Button>
              <Button>Button 2</Button>
            </ButtonGroup>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />


      {/* Orientation Button Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Orientation Button</h2>
        <p className="text-medium text-foreground py-4">Set the <CodeInline>orientation</CodeInline> prop to change the button group layout.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={button_group_code_preview.Orientation}
          language="typescript"
          filename="Button-Orientation.tsx"
          highlightLines={[8]}
        >
          <div>
            <ButtonGroup
              orientation="vertical"
              aria-label="Media controls"
              className="h-fit"
            >
              <Button variant="outline" size="icon">
                <PlusIcon />
              </Button>
              <Button variant="outline" size="icon">
                <MinusIcon />
              </Button>
            </ButtonGroup>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />


      {/* Nested Button Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Nested Button</h2>
        <p className="text-medium text-foreground py-4">Nest <CodeInline>{`<ButtonGroup>`}</CodeInline> components to create button groups with spacing.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={button_group_code_preview.Nested}
          language="typescript"
          filename="Button-Nested.tsx"
          highlightLines={[]}
        >
          <div>
            <ButtonGroup>
              <ButtonGroup>
                <Button variant="outline" size="icon">
                  <PlusIcon />
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <InputGroup>
                  <InputGroupInput placeholder="Send a message..." />
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <InputGroupAddon align="inline-end">
                        <AudioLinesIcon />
                      </InputGroupAddon>
                    </TooltipTrigger>
                    <TooltipContent>Voice Mode</TooltipContent>
                  </Tooltip>
                </InputGroup>
              </ButtonGroup>
            </ButtonGroup>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />
      
      
      {/* Separator Button Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Separator Button</h2>
        <p className="text-medium text-foreground py-4">The <CodeInline>ButtonGroupSeparator</CodeInline> component visually divides buttons within a group.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={button_group_code_preview.Separator}
          language="typescript"
          filename="Button-Separator.tsx"
          highlightLines={[13]}
        >
          <div>
            <ButtonGroup>
              <Button variant="secondary" size="sm">
                Copy
              </Button>
              <ButtonGroupSeparator />
              <Button variant="secondary" size="sm">
                Paste
              </Button>
            </ButtonGroup>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />
      
      
      {/* Input Button Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Input</h2>
        <p className="text-medium text-foreground py-4">Wrap an <CodeInline>Input</CodeInline> component with buttons.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={button_group_code_preview.Input}
          language="typescript"
          filename="Button-Input.tsx"
          highlightLines={[]}
        >
          <div>
            <ButtonGroup>
              <Input placeholder="Search..." />
              <Button variant="outline" aria-label="Search">
                <SearchIcon />
              </Button>
            </ButtonGroup>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />
      
      
      {/* Dropdown Button Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Dropdown</h2>
        <p className="text-medium text-foreground py-4">Create a split button group with a <CodeInline>DropdownMenu</CodeInline> component.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={button_group_code_preview.Dropdown}
          language="typescript"
          filename="Button-Dropdown.tsx"
          highlightLines={[]}
        >
          <div>
            <ButtonGroup>
              <Button variant="outline">Follow</Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="!pl-2">
                    <ChevronDownIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-44">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <VolumeOffIcon />
                      Mute Conversation
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CheckIcon />
                      Mark as Read
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <AlertTriangleIcon />
                      Report Conversation
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <UserRoundXIcon />
                      Block User
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <ShareIcon />
                      Share Conversation
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CopyIcon />
                      Copy Conversation
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem variant="destructive">
                      <TrashIcon />
                      Delete Conversation
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </ButtonGroup>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />
      
      
      {/* Select Button Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Select</h2>
        <p className="text-medium text-foreground py-4">Pair with a <CodeInline>Select</CodeInline> component.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={button_group_code_preview.Select}
          language="typescript"
          filename="Button-Select.tsx"
          highlightLines={[]}
        >
          <div>
            <ButtonGroup>
              <ButtonGroup>
                <Select value={currency} onValueChange={setCurrency}>
                  <SelectTrigger className="font-mono">{currency}</SelectTrigger>
                  <SelectContent className="min-w-24">
                    <SelectGroup>
                      {CURRENCIES.map((currency) => (
                        <SelectItem key={currency.value} value={currency.value}>
                          {currency.value}{" "}
                          <span className="text-muted-foreground">
                            {currency.label}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Input placeholder="10.00" pattern="[0-9]*" />
              </ButtonGroup>
              <ButtonGroup>
                <Button aria-label="Send" size="icon" variant="outline">
                  <ArrowRightIcon />
                </Button>
              </ButtonGroup>
            </ButtonGroup>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />
      
      
      {/* Popover Button Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Popover</h2>
        <p className="text-medium text-foreground py-4">Use with a <CodeInline>Popover</CodeInline> component.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={button_group_code_preview.Popover}
          language="typescript"
          filename="Button-Popover.tsx"
          highlightLines={[]}
        >
          <div>
            <ButtonGroup>
              <Button variant="outline">
                <BotIcon /> Copilot
              </Button>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Open Popover">
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="rounded-xl text-sm">
                  <PopoverHeader>
                    <PopoverTitle>Start a new task with Copilot</PopoverTitle>
                    <PopoverDescription>
                      Describe your task in natural language.
                    </PopoverDescription>
                  </PopoverHeader>
                  <Field>
                    <FieldLabel htmlFor="task" className="sr-only">
                      Task Description
                    </FieldLabel>
                    <Textarea
                      id="task"
                      placeholder="I need to..."
                      className="resize-none"
                    />
                    <FieldDescription>
                      Copilot will open a pull request for review.
                    </FieldDescription>
                  </Field>
                </PopoverContent>
              </Popover>
            </ButtonGroup>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

     

    </div>
  )
}

export default page