export const seperator_code_previews = {
code_snippet: 'npx shadcn@latest add separator',
import:`import { Separator } from '@/components/ui/separator'`,
basic: `import { Separator } from '@/components/ui/separator'

export default function SeparatorDemo() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-foreground">Separator</h1>
      <Separator />
      <p className="text-sm text-muted-foreground m-6">This is an example separator</p>
      <Separator className='my-4' />
      <div className="flex h-5 items-center space-x-4 text-sm items-center">
        <div className='text-muted-foreground'>One</div>
        <Separator orientation="vertical" />
        <div className='text-muted-foreground'>Two</div>
        <Separator orientation="vertical" />
        <div className='text-muted-foreground'>Three</div>
      </div>
    </div>
  )
}`
}