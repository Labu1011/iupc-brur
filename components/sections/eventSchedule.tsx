import { cn } from "@/app/lib/cn"
import { fregeist, geist } from "@/app/lib/font"
import React from "react"
import SectionHeader from "./header"
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table"

interface Schedule {
  event_: string
  location: string
  dateTime: string
}

const schedule: Schedule[] = [
  {
    event_: "Final register start",
    location: "online",
    dateTime: "8 Oct, 2024",
  },
  {
    event_: "Final register end",
    location: "online",
    dateTime: "12 Oct, 2024",
  },
  { event_: "Mock Contest", location: "BRUR", dateTime: "18 Oct, 2024" },
  { event_: "Main Contest", location: "BRUR", dateTime: "19 Oct, 2024" },
]

const EventSchedule = () => {
  return (
    <div
      className={cn(
        fregeist.className,
        "relative container space-y-3 bg-black text-white w-full"
      )}
    >
      <div className="w-full h-44"></div>
      <SectionHeader
        title={<>Event Schedule</>}
        subtitle={<>Check out important dates and times of the RDCPC event.</>}
      />

      <div className={cn(geist.className, "max-w-[1024px] px-4 mx-auto")}>
        <Table className="mt-16">
          <TableHeader className="bg-zinc-900 rounded-xl">
            <TableRow>
              <TableHead className="">Event</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="text-right">Date & Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schedule.map((item: Schedule) => (
              <TableRow key={item.event_}>
                <TableCell className="font-medium">{item.event_}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell className="text-right">{item.dateTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default EventSchedule
