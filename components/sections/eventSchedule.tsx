import { cn } from "@/app/lib/cn"
import { fregeist } from "@/app/lib/font"
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

const EventSchedule = () => {
  return (
    <div
      id="services"
      className={cn(
        fregeist.className,
        "relative container space-y-3 w-full text-black"
      )}
    >
      <div className="w-full h-44"></div>
      <SectionHeader
        title={<>Event Schedule</>}
        subtitle={<>Check out important dates and times of the RDCPC event.</>}
      />

      <div className="max-w-[1024px] px-4 mx-auto">
        <Table className="mt-16">
          <TableCaption>
            A list of teams who are registered in this event.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">Team Name</TableHead>
              <TableHead>Institution</TableHead>
              <TableHead className="text-right">Payment Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((team: Team) => (
              <TableRow key={team._id}>
                <TableCell className="font-medium">{team.teamName}</TableCell>
                <TableCell>{team.institutionName}</TableCell>
                <TableCell className="text-right">
                  {team.paymentStatus ? (
                    <p className="text-sm font-medium text-green-500">Paid</p>
                  ) : (
                    <p className="text-sm font-medium text-amber-500">
                      Pending
                    </p>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default EventSchedule
