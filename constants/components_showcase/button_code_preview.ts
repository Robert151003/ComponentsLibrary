export const button_code_preview = {
code_snippet: 'npx shadcn@latest add button',

import:`import { Button } from "@/components/ui/button"`,

basic: `import { Button } from "@/components/ui/button"

export function ButtonDefault() {
  return <Button>Button</Button>
}`,

outline: `import { Button } from "@/components/ui/button"

export function ButtonOutline() {
  return <Button variant="outline">Outline</Button>
}`,

secondary: `import { Button } from "@/components/ui/button"

export function ButtonSecondary() {
  return <Button variant="secondary">Secondary</Button>
}`,

ghost: `import { Button } from "@/components/ui/button"

export function ButtonGhost() {
  return <Button variant="ghost">Ghost</Button>
}`,

destructive: `import { Button } from "@/components/ui/button"

export function ButtonDestructive() {
  return <Button variant="destructive">Destructive</Button>
}`,

link_variant: `import { Button } from "@/components/ui/button"

export function ButtonLink() {
  return <Button variant="link">Link</Button>
}`,

icon: `import { Button } from "@/components/ui/button"
import { CircleFadingArrowUpIcon } from "lucide-react"

export function ButtonIcon() {
  return (
    <Button variant="outline" size="icon">
      <CircleFadingArrowUpIcon />
    </Button>
  )
}`,

with_icon: `import { Button } from "@/components/ui/button"
import { IconGitBranch } from "@tabler/icons-react"

export function ButtonWithIcon() {
  return (
    <Button variant="outline" size="sm">
      <IconGitBranch /> New Branch
    </Button>
  )
}`,

rounded: `import { Button } from "@/components/ui/button"
import { ArrowUpIcon } from "lucide-react"

export function ButtonRounded() {
  return (
    <div className="flex flex-col gap-8">
      <Button variant="outline" size="icon" className="rounded-full">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}`,

spinner: `import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export function ButtonSpinner() {
  return (
    <div className="flex gap-2">
      <Button variant="outline" disabled>
        <Spinner data-icon="inline-start" />
        Generating
      </Button>
      <Button variant="secondary" disabled>
        Downloading
        <Spinner data-icon="inline-start" />
      </Button>
    </div>
  )
}`,

link: `import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  )
}`,

}