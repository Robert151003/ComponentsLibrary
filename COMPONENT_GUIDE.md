# Component Page Guide

## How to Add a New Component Page

### Step 1: Add Import/Usage Code
Add your component's import and usage code to `constants/import_functions.ts`:

```typescript
export const import_functions = [
  // ... existing
  {
    title: 'button_import',
    code_snippet: 'npx shadcn@latest add button'
  },
]

export const usage_Code = [
  // ... existing
  {
    title: 'button_usage',
    code_snippet: `import { Button } from "@/components/ui/button"
<Button>Click me</Button>`
  },
]
```

### Step 2: Create Showcase Component (if needed)
If your component needs special setup, create it in `components/components_showcase/`:

```typescript
// components/components_showcase/ButtonExample.tsx
export function ButtonExample() {
  return <Button>Example Button</Button>
}
```

### Step 3: Add to Component Config
Add your component configuration to `constants/component_config.tsx`:

```typescript
export const componentConfigs: Record<string, ComponentConfig> = {
  // ... existing
  button: {
    name: 'button',
    title: 'Button',
    description: 'Displays a button or a component that looks like a button.',
    importKey: 'button_import',
    usageKey: 'button_usage', // optional
    preview: (
      <div className="p-4">
        <Button>Click me</Button>
        <Button variant="outline">Outline</Button>
      </div>
    ),
    previewProps: {
      width: '100%',
      height: '30vh',
    },
  },
}
```

### Step 4: Create Page File
Create `app/(root)/(home)/components_pages/button/page.tsx`:

```typescript
'use client'

import { ComponentPage } from '@/components/ComponentPage'
import { componentConfigs } from '@/constants/component_config'

const page = () => {
  return <ComponentPage config={componentConfigs.button} />
}

export default page
```

That's it! Your component page is ready.

## Benefits

- **Consistent structure** across all component pages
- **Easy to maintain** - update the template once, affects all pages
- **Quick to add** - just 3 steps (config, import code, page file)
- **Type-safe** - TypeScript ensures you don't miss required fields
