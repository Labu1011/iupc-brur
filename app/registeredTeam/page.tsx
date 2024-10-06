import SectionHeader from "@/components/sections/header"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import React from "react"

interface TeamMember {
  name: string
  email: string
  phoneNumber: string
  tShirtSize: string
}

interface Team {
  _id: string
  teamName: string
  institutionName: string
  coach: any
  members: TeamMember[]
  paymentStatus: boolean
}

async function RegisteredTeamPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/team-registration`,
    {
      cache: "no-cache",
    }
  )

  const data = await res.json()
  console.log(data)

  return (
    <div className="relative w-full py-24 overflow-hidden min-h-screen bg-black text-white items-center justify-between">
      <Link
        href="/"
        className="absolute text-zinc-500 hover:text-zinc-400 transition-all duration-200 -translate-y-12 translate-x-12"
      >
        &larr; Go Back
      </Link>
      <div className="mt-12" />
      <SectionHeader title="Registered Teams" subtitle={<></>} />

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

export default RegisteredTeamPage
