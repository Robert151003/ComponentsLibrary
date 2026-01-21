export const alert_code_previews = {
code_snippet: 'npx shadcn@latest add alert',

import:`import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"`,

basic: `import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"'
import { CheckCircle2Icon } from 'lucide-react'

export default function AlertDemo() {
  return (
    <Alert>
      <InfoIcon />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}`,

destructive: `import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"'
import { InfoIcon } from 'lucide-react'

export default function AlertDemo() {
  return (
    <Alert variant={'destructive'}>
      <InfoIcon />
      <AlertTitle>HPayment failed</AlertTitle>
      <AlertDescription>
        Your payment could not be processed. Please check your payment method and try again.
      </AlertDescription>
    </Alert>
  )
}`,

colour: `import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"'
import { AlertTriangleIcon } from 'lucide-react'

export default function AlertDemo() {
  return (
    <Alert className='bg-amber-50 dark:bg-amber-950'>
      <AlertTriangleIcon />
      <AlertTitle>Your subscription will expire in 3 days.</AlertTitle>
      <AlertDescription>
        Renew now to avoid service interruption or upgrade to a paid plan to continue using the service.
      </AlertDescription>
    </Alert>
  )
}`,
}