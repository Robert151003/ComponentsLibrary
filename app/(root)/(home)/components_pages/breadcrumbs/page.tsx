'use client'

import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '@/components/ui/code-block'
import { TabbedPreview } from '@/components/TabbedPreview'
import { alert_dialog_code_preview } from '@/constants/components_showcase/alert_dialog_code_preview'
import { CodeInline } from '@/components/ui/code-inline'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { CircleFadingPlusIcon, Trash2Icon } from "lucide-react"

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-foreground">Alert Dialog</h1>
      <p className="text-sm text-muted-foreground mb-6">A modal dialog that interrupts the user with important content and expects a response.</p>

      <Separator />

      <h2 className="text-2xl font-bold text-foreground py-4">Installation</h2>
      {alert_dialog_code_preview.code_snippet && (
        <CodeBlock
          language="bash"
          filename='Alert Import'
          code={alert_dialog_code_preview.code_snippet}
        />
      )}

      <Separator className="my-8" />

      {/* Basic Alert Dialog Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Basic Alert Dialog</h2>
        <p className="text-medium text-foreground py-4">A basic alert dialog with a title, description, and cancel and continue buttons.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={alert_dialog_code_preview.basic}
          language="typescript"
          filename="Alert-Basic.tsx"
          highlightLines={[]}
        >
          <div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your
                    account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Small Alert Dialog Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Small Alert Dialog</h2>
        <p className="text-medium text-foreground py-4">Use the <CodeInline>size="sm"</CodeInline> prop to make the alert dialog smaller.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={alert_dialog_code_preview.small}
          language="typescript"
          filename="Alert-Basic.tsx"
          highlightLines={[20]}
        >
          <div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent size="sm">
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your
                    account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Media Alert Dialog Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Media Alert Dialog</h2>
        <p className="text-medium text-foreground py-4">Use the <CodeInline>AlertDialogMedia</CodeInline> component to add a media element such as an icon or image to the alert dialog.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={alert_dialog_code_preview.media}
          language="typescript"
          filename="Alert-Basic.tsx"
          highlightLines={[24, 25, 26]}
        >
          <div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Share Project</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogMedia>
                    <CircleFadingPlusIcon />
                  </AlertDialogMedia>
                  <AlertDialogTitle>Share this project?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Anyone with the link will be able to view and edit this project.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Share</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />


      {/* Destructive Alert Dialog Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Destructive Alert Dialog</h2>
        <p className="text-medium text-foreground py-4">Use the <CodeInline>alertDialogAction</CodeInline> component to add a destructive action button to the alert dialog.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={alert_dialog_code_preview.destructive}
          language="typescript"
          filename="Alert-Basic.tsx"
          highlightLines={[20]}
        >
          <div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete Chat</Button>
              </AlertDialogTrigger>
              <AlertDialogContent size="sm">
                <AlertDialogHeader>
                  <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                    <Trash2Icon />
                  </AlertDialogMedia>
                  <AlertDialogTitle>Delete chat?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete this chat conversation. View{" "}
                    <a href="#">Settings</a> delete any memories saved during this chat.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
                  <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

  


    </div>
  )
}

export default page