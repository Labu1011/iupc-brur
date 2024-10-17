import {cn} from "@/app/lib/cn"
import {fregeist, geist} from "@/app/lib/font"
import React from "react"
import SectionHeader from "./header"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "../ui/table"

interface Schedule {
	event_: string
	location: string
	dateTime: string
}

const schedule: Schedule[] = [
	{
		event_: "Final Register Start",
		location: "Online",
		dateTime: "8 Oct, 2024",
	},
	{
		event_: "Final Register End",
		location: "Online",
		dateTime: "12 Oct, 2024",
	},
	{
		event_: "Mock Contest",
		location: "BRUR",
		dateTime: "18 Oct, 2024, 3:00 PM",
	},
	{
		event_: "Main Contest",
		location: "BRUR",
		dateTime: "19 Oct, 2024, 12:30 PM",
	},
]

const EventSchedule = () => {
	return (
		<div
			id="events"
			className={cn(
				fregeist.className,
				"relative container space-y-3 bg-black text-white w-full"
			)}
		>
			<div className="w-full h-44"></div>
			<SectionHeader
				title={
					<>
						Event<span className="text-gray-400/50">.</span>Schedule
						<span className="text-gray-400/50">()</span>
					</>
				}
				subtitle={<>Check out important dates and times of the RDCPC event.</>}
			/>
			
			<div className={cn(geist.className, "max-w-[1024px] px-4 mx-auto")}>
				<Table className="mt-16">
					<TableHeader className="bg-zinc-900 rounded-xl">
						<TableRow>
							<TableHead className="">Event</TableHead>
							<TableHead>Location</TableHead>
							<TableHead className="text-right">
								Date & Time
							</TableHead>
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
