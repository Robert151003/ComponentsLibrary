'use client'

import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '@/components/ui/code-block'
import { TabbedPreview } from '@/components/TabbedPreview'
import { checkbox_code_preview } from '@/constants/components_showcase/checkbox_code_preview'
import { CodeInline } from '@/components/ui/code-inline'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Checkbox } from "@/components/ui/checkbox"

const page = () => {
  

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-foreground">Checkbox</h1>
      <p className="text-sm text-muted-foreground mb-6">Displays a Checkbox.</p>

      <Separator />

      <h2 className="text-2xl font-bold text-foreground py-4">Installation</h2>
      {checkbox_code_preview.code_snippet && (
        <CodeBlock
          language="bash"
          filename='Calendar Import'
          code={checkbox_code_preview.code_snippet}
        />
      )}

      <Separator className="my-8" />

      {/* Basic Checkbox Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Basic Checkbox</h2>
        <p>Pair the checkbox with <CodeInline>Field</CodeInline> and <CodeInline>FieldLabel</CodeInline> for proper layout and labeling.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={checkbox_code_preview.basic}
          language="typescript"
          filename="Calendar-Basic.tsx"
          highlightLines={[]}
        >
          <div>
            <FieldGroup className="mx-auto w-56">
              <Field orientation="horizontal">
                <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
                <FieldLabel htmlFor="terms-checkbox-basic">
                  Accept terms and conditions
                </FieldLabel>
              </Field>
            </FieldGroup>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />
      
      {/* Description Checkbox Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Description Checkbox</h2>
        <p>Use <CodeInline>FieldContent</CodeInline> and <CodeInline>FieldDescription</CodeInline> for helper text.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={checkbox_code_preview.description}
          language="typescript"
          filename="Calendar-Description.tsx"
          highlightLines={[19, 22, 23, 26]}
        >
          <div>
            <FieldGroup className="mx-auto w-72">
              <Field orientation="horizontal">
                <Checkbox
                  id="terms-checkbox-desc"
                  name="terms-checkbox-desc"
                  defaultChecked
                />
                <FieldContent>
                  <FieldLabel htmlFor="terms-checkbox-desc">
                    Accept terms and conditions
                  </FieldLabel>
                  <FieldDescription>
                    By clicking this checkbox, you agree to the terms and conditions.
                  </FieldDescription>
                </FieldContent>
              </Field>
            </FieldGroup>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />
      
      {/* Disabled Checkbox Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Disabled Checkbox</h2>
        <p>Use the <CodeInline>disabled</CodeInline> prop to prevent interaction and add the <CodeInline>data-disabled</CodeInline> attribute to the <CodeInline>{`<Field>`}</CodeInline> component for disabled styles.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={checkbox_code_preview.disabled}
          language="typescript"
          filename="Calendar-Disabled.tsx"
          highlightLines={[11]}
        >
          <div>
            <FieldGroup className="mx-auto w-56">
              <Field orientation="horizontal" data-disabled>
                <Checkbox
                  id="toggle-checkbox-disabled"
                  name="toggle-checkbox-disabled"
                  disabled
                />
                <FieldLabel htmlFor="toggle-checkbox-disabled">
                  Enable notifications
                </FieldLabel>
              </Field>
            </FieldGroup>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />
      
      {/* Group Checkbox Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Group Checkbox</h2>
        <p>Use multiple fields to create a checkbox list.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={checkbox_code_preview.group}
          language="typescript"
          filename="Calendar-Group.tsx"
          highlightLines={[]}
        >
          <div>
            <FieldSet>
              <FieldLegend variant="label">
                Show these items on the desktop:
              </FieldLegend>
              <FieldDescription>
                Select the items you want to show on the desktop.
              </FieldDescription>
              <FieldGroup className="gap-3">
                <Field orientation="horizontal">
                  <Checkbox
                    id="finder-pref-9k2-hard-disks-ljj-checkbox"
                    name="finder-pref-9k2-hard-disks-ljj-checkbox"
                    defaultChecked
                  />
                  <FieldLabel
                    htmlFor="finder-pref-9k2-hard-disks-ljj-checkbox"
                    className="font-normal"
                  >
                    Hard disks
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox
                    id="finder-pref-9k2-external-disks-1yg-checkbox"
                    name="finder-pref-9k2-external-disks-1yg-checkbox"
                    defaultChecked
                  />
                  <FieldLabel
                    htmlFor="finder-pref-9k2-external-disks-1yg-checkbox"
                    className="font-normal"
                  >
                    External disks
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox
                    id="finder-pref-9k2-cds-dvds-fzt-checkbox"
                    name="finder-pref-9k2-cds-dvds-fzt-checkbox"
                  />
                  <FieldLabel
                    htmlFor="finder-pref-9k2-cds-dvds-fzt-checkbox"
                    className="font-normal"
                  >
                    CDs, DVDs, and iPods
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox
                    id="finder-pref-9k2-connected-servers-6l2-checkbox"
                    name="finder-pref-9k2-connected-servers-6l2-checkbox"
                  />
                  <FieldLabel
                    htmlFor="finder-pref-9k2-connected-servers-6l2-checkbox"
                    className="font-normal"
                  >
                    Connected servers
                  </FieldLabel>
                </Field>
              </FieldGroup>
            </FieldSet>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />
      
    </div>
  )
}

export default page