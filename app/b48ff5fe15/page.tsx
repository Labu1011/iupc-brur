import React from "react"
import { columns, DataTable } from "./team-table"
import { Label } from "@/components/ui/label"

export type TeamData = {
  teamName: string
  paymentMethod: string
  trxId: string
  paymentStatus: boolean
}

const teamData: TeamData[] = [
  {
    teamName: "BRUR_absc",
    paymentMethod: "Bkash",
    trxId: "3k2j3lh5k32k5",
    paymentStatus: false,
  },
  {
    teamName: "BRUR_sdge",
    paymentMethod: "Nagad",
    trxId: "3k4h4346gk3",
    paymentStatus: true,
  },
  {
    teamName: "BRUR_NObody",
    paymentMethod: "Rocket",
    trxId: "98df9g8s9gg",
    paymentStatus: true,
  },
  {
    teamName: "BRUR_abcd",
    paymentMethod: "Rocket",
    trxId: "2353k23j5k23jl",
    paymentStatus: false,
  },
]
// b48ff5fe15
const AdminPanel = () => {
  return (
    <div className="flex flex-col space-y-5 items-center bg-black text-white container h-screen">
      <Label className="text-center text-6xl">Teams</Label>
      <DataTable data={teamData} columns={columns} />
    </div>
  )
}

export default AdminPanel
