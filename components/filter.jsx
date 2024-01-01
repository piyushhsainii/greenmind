import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
const filter = () => {
  return (
  
   
      <ScrollArea  className="h-auto rounded-md  p-4 border border-solid border-[rgba(0, 0, 0, 0.5)]">
      {/* First Category   */}
      <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <h2 className='font-bold' > Filters </h2>
            <AccordionTrigger>Categories</AccordionTrigger>
            <AccordionContent >
              <div className='p-2' >
              <Link href={'#'} >Natural</Link>
              </div>
              <div className='p-2' >
              <Link href={'#'} >Artifical</Link>
              </div>
            </AccordionContent>
          </AccordionItem>
      </Accordion>

      {/* Second Category   */}

      <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Price</AccordionTrigger>
            <AccordionContent >
            <RadioGroup defaultValue="">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">below 999</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">999 - 1499</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-three" id="option-three" />
                <Label htmlFor="option-three">999 or above</Label>
              </div>
            </RadioGroup>
            </AccordionContent>
          </AccordionItem>
      </Accordion>

      </ScrollArea>

   

  )
}

export default filter