"use client"
 
import React, {useState} from "react"
import { Check, ChevronsUpDown } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { nombres } from "./nombres/benavidez"
 
const frameworks = nombres

 
export function ComboboxNombres({value, setValue}) {
  const [open, setOpen] = useState(false)
 
  return (
    <Popover open={open} onOpenChange={setOpen} className='w-full'>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full rounded-none h-14 pl-5 justify-between"
        >
          {value
            ? frameworks.find((framework) => framework === value)
            : "Busca tu nombre..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command className="w-full">
          <CommandInput placeholder="Busca tu nombre..." />
          <CommandList>
            <CommandEmpty >Ups! no te encontramos</CommandEmpty>
            <CommandGroup className="w-full">
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework}
                  value={framework}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                  className="min-w-[320px] w-full"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}