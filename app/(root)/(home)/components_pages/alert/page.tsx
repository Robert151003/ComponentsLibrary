'use client'

import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '@/components/ui/code-block'
import { TabbedPreview } from '@/components/TabbedPreview'
import { alert_code_previews } from '@/constants/components_showcase/alert_code_preview'
import { CodeInline } from '@/components/ui/code-inline'
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { InfoIcon, AlertTriangleIcon, AlertCircleIcon, CheckCircle2Icon } from 'lucide-react'

const page = () => {


  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-foreground">Alert</h1>
      <p className="text-sm text-muted-foreground mb-6">Displays a callout for user attention.</p>

      <Separator />

      <h2 className="text-2xl font-bold text-foreground py-4">Installation</h2>
      {alert_code_previews.code_snippet && (
        <CodeBlock
          language="bash"
          filename='Alert Import'
          code={alert_code_previews.code_snippet}
        />
      )}

      <Separator className="my-8" />

      {/* Basic Alert Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Basic Alert</h2>
        <p className="text-medium text-foreground py-4">A basic alert with an icon, title and description.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={alert_code_previews.basic}
          language="typescript"
          filename="Alert-Basic.tsx"
          highlightLines={[]}
        >
          <div>
            <Alert>
              <CheckCircle2Icon />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components and dependencies to your app using the cli.
              </AlertDescription>
            </Alert>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Destructive Alert Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Destructive Alert</h2>
        <p className="text-medium text-foreground py-4">Use <CodeInline>variant="destructive"</CodeInline> to create a destructive alert.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={alert_code_previews.destructive}
          language="typescript"
          filename="Alert-Destructive.tsx"
          highlightLines={[10]}
        >
          <div>
            <Alert variant={'destructive'}>
              <InfoIcon />
              <AlertTitle>Payment failed</AlertTitle>
              <AlertDescription>
                Your payment could not be processed. Please check your payment method and try again.
              </AlertDescription>
            </Alert>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Action Alert Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Action Alert</h2>
        <p className="text-medium text-foreground py-4">Use <CodeInline>AlertAction</CodeInline> to add a button or other action element to the alert.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={alert_code_previews.action}
          language="typescript"
          filename="Alert-demo.tsx"
          highlightLines={[]}
        >
          <div>
            <Alert>
              <AlertTitle>Dark mode is now available</AlertTitle>
              <AlertDescription>
                Enable it under your profile settings to get started.
              </AlertDescription>
            </Alert>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Custom Colours Alert Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Custom Colours Alert</h2>
        <p className="text-medium text-foreground py-4">You can customize the alert colors by adding custom classes such as <CodeInline>bg-amber-50 dark:bg-amber-950</CodeInline> to the <CodeInline>Alert</CodeInline> component.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={alert_code_previews.colour}
          language="typescript"
          filename="Alert-Colours.tsx"
          highlightLines={[10]}
        >
          <div>
            <Alert className='bg-amber-50 dark:bg-amber-950'>
              <AlertTriangleIcon />
              <AlertTitle>Your subscription will expire in 3 days.</AlertTitle>
              <AlertDescription>
                Renew now to avoid service interruption or upgrade to a paid plan to continue using the service.
              </AlertDescription>
            </Alert>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />


    </div>
  )
}

export default page