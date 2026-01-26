export const badge_code_preview = {
code_snippet: 'npx shadcn@latest add badge',

import:`import { Badge } from "@/components/ui/badge"`,

variants: `import { Badge } from "@/components/ui/badge"

export function BadgeVariants() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
    </div>
  )
}`,

icon: `import { Badge } from "@/components/ui/badge"
import { BadgeCheck, BookmarkIcon } from "lucide-react"

export function BadgeWithIconLeft() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="secondary">
        <BadgeCheck data-icon="inline-start" />
        Verified
      </Badge>
      <Badge variant="outline">
        Bookmark
        <BookmarkIcon data-icon="inline-end" />
      </Badge>
    </div>
  )
}`,

spinner: `import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"

export function BadgeWithSpinner() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="destructive">
        <Spinner data-icon="inline-start" />
        Deleting
      </Badge>
      <Badge variant="secondary">
        Generating
        <Spinner data-icon="inline-end" />
      </Badge>
    </div>
  )
}`,

link: `import { Badge } from "@/components/ui/badge"
import { ArrowUpRightIcon } from "lucide-react"
import Link from 'next/link'

export function BadgeAsLink() {
  return (
    <Badge asChild>
      <Link href="#">
        Open Link <ArrowUpRightIcon data-icon="inline-end" />
      </Link>
    </Badge>
  )
}`,

colours: `import { Badge } from "@/components/ui/badge"

export function BadgeCustomColors() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
        Blue
      </Badge>
      <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
        Green
      </Badge>
      <Badge className="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
        Sky
      </Badge>
      <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
        Purple
      </Badge>
      <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
        Red
      </Badge>
    </div>
  )
}`

}