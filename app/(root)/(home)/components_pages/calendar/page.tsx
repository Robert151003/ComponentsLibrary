'use client'

import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '@/components/ui/code-block'
import { TabbedPreview } from '@/components/TabbedPreview'
import { calendar_code_preview } from '@/constants/components_showcase/calendar_code_preview'
import { CodeInline } from '@/components/ui/code-inline'

import { Button } from '@/components/ui/button'
import { Clock2Icon } from 'lucide-react'
import { Calendar, CalendarDayButton } from "@/components/ui/calendar"
import React from 'react'
import { DateRange } from 'react-day-picker'
import { addDays } from 'date-fns'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'

const page = () => {
  
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 12),
    to: addDays(new Date(new Date().getFullYear(), 0, 12), 30),
  })
  const [currentMonth, setCurrentMonth] = React.useState<Date>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  )
  const bookedDates = Array.from(
    { length: 15 },
    (_, i) => new Date(new Date().getFullYear(), 1, 12 + i)
  )
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 11, 8),
    to: addDays(new Date(new Date().getFullYear(), 11, 8), 10),
  })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-foreground">Calendar</h1>
      <p className="text-sm text-muted-foreground mb-6">Displays a calendar.</p>

      <Separator />

      <h2 className="text-2xl font-bold text-foreground py-4">Installation</h2>
      {calendar_code_preview.code_snippet && (
        <CodeBlock
          language="bash"
          filename='Calendar Import'
          code={calendar_code_preview.code_snippet}
        />
      )}

      <Separator className="my-8" />

      {/* Basic Calendar Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Basic Calendar</h2>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={calendar_code_preview.basic}
          language="typescript"
          filename="Calendar-Basic.tsx"
          highlightLines={[5]}
        >
          <div>
            <Calendar mode="single" className="rounded-lg border" />
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Range Calendar Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Range Calendar</h2>
        <p className="text-medium text-foreground py-4">Use the <CodeInline>mode="range"</CodeInline> prop to enable range selection.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={calendar_code_preview.Range}
          language="typescript"
          filename="Calendar-Range.tsx"
          highlightLines={[19]}
        >
          <div>
            <Card className="mx-auto w-fit p-0">
              <CardContent className="p-0">
                <Calendar
                  mode="range"
                  defaultMonth={dateRange?.from}
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                />
              </CardContent>
            </Card>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />
      
      
      {/* Month & Year Calendar Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Month & Year Calendar</h2>
        <p className="text-medium text-foreground py-4">Use the <CodeInline>captionLayout="dropdown"</CodeInline> prop to enable month and year selection.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={calendar_code_preview.MonthYear}
          language="typescript"
          filename="Calendar-Month-Year.tsx"
          highlightLines={[9]}
        >
          <div>
            <Calendar
              mode="single"
              captionLayout="dropdown"
              className="rounded-lg border"
            />
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />


      {/* Presets Calendar Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Presets Calendar</h2>
        <p className="text-medium text-foreground py-4">Use preset buttons to quickly select a date.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={calendar_code_preview.Presets}
          language="typescript"
          filename="Calendar-Presets.tsx"
          highlightLines={[]}
        >
          <div>
            <Card className="mx-auto w-fit max-w-[300px] size-sm">
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  month={currentMonth}
                  onMonthChange={setCurrentMonth}
                  fixedWeeks
                  className="p-0 [--cell-size:--spacing(9.5)]"
                />
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 border-t">
                {[
                  { label: "Today", value: 0 },
                  { label: "Tomorrow", value: 1 },
                  { label: "In 3 days", value: 3 },
                  { label: "In a week", value: 7 },
                  { label: "In 2 weeks", value: 14 },
                ].map((preset) => (
                  <Button
                    key={preset.value}
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => {
                      const newDate = addDays(new Date(), preset.value)
                      setDate(newDate)
                      setCurrentMonth(
                        new Date(newDate.getFullYear(), newDate.getMonth(), 1)
                      )
                    }}
                  >
                    {preset.label}
                  </Button>
                ))}
              </CardFooter>
            </Card>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      {/* Date And Time Calendar Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Date And Time Calendar</h2>
        <p className="text-medium text-foreground py-4">Use the calendar with time inputs.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={calendar_code_preview.DateTime}
          language="typescript"
          filename="Calendar-Date-Time.tsx"
          highlightLines={[]}
        >
          <div>
            <Card className="size-sm mx-auto w-fit">
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="p-0"
                />
              </CardContent>
              <CardFooter className="bg-card border-t">
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="time-from">Start Time</FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        id="time-from"
                        type="time"
                        step="1"
                        defaultValue="10:30:00"
                        className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                      />
                      <InputGroupAddon>
                        <Clock2Icon className="text-muted-foreground" />
                      </InputGroupAddon>
                    </InputGroup>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="time-to">End Time</FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        id="time-to"
                        type="time"
                        step="1"
                        defaultValue="12:30:00"
                        className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                      />
                      <InputGroupAddon>
                        <Clock2Icon className="text-muted-foreground" />
                      </InputGroupAddon>
                    </InputGroup>
                  </Field>
                </FieldGroup>
              </CardFooter>
            </Card>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />
      
      {/* Custom Cell Size Calendar Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Custom Cell Size Calendar</h2>
        <p className="text-medium text-foreground py-4">Use the calendar with custom cell sizes.</p>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={calendar_code_preview.CustomCellSize}
          language="typescript"
          filename="Calendar-Custom-Cell-Size.tsx"
          highlightLines={[25]}
        >
          <div>
            <Card className="mx-auto w-fit p-0">
              <CardContent className="p-0">
                <Calendar
                  mode="range"
                  defaultMonth={range?.from}
                  selected={range}
                  onSelect={setRange}
                  numberOfMonths={1}
                  captionLayout="dropdown"
                  className="[--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]"
                  formatters={{
                    formatMonthDropdown: (date) => {
                      return date.toLocaleString("default", { month: "long" })
                    },
                  }}
                  components={{
                    DayButton: ({ children, modifiers, day, ...props }) => {
                      const isWeekend =
                        day.date.getDay() === 0 || day.date.getDay() === 6
                      return (
                        <CalendarDayButton day={day} modifiers={modifiers} {...props}>
                          {children}
                          {!modifiers.outside && (
                            <span>{isWeekend ? "$120" : "$100"}</span>
                          )}
                        </CalendarDayButton>
                      )
                    },
                  }}
                />
              </CardContent>
            </Card>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      
    </div>
  )
}

export default page