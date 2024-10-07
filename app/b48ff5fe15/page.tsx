"use client"

import React, { useState, useEffect } from "react"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { toast } from "@/hooks/use-toast"

// Sample team data types
type Member = {
  name: string
  email: string
  phoneNumber: string
  tShirtSize: string
}

type Team = {
  _id: string
  teamName: string
  institutionName: string
  members: Member[]
  paymentStatus: boolean
  teamId: number
  createdAt: string
  updatedAt: string
  paymentMethod: string
  trxId: string
}

const AdminPanel = () => {
  const [teams, setTeams] = useState<Team[]>([])
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Fetch teams from the API
  useEffect(() => {
    const fetchTeams = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/team-registration`,
          {
            method: "GET",
          }
        )
        const data = await response.json()
        setTeams(data)
      } catch (error) {
        console.error("Failed to fetch teams:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTeams()
  }, [])

  // Update payment status via API
  const handlePaymentConfirmation = async (team: Team) => {
    try {
      const response = await fetch(
        `/api/team-registration/update/${team._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            paymentStatus: true, // Updating paymentStatus to true
          }),
        }
      )

      if (response.ok) {
        // Update the local team list with the updated payment status
        setTeams((prevTeams) =>
          prevTeams.map((t) =>
            t._id === team._id ? { ...t, paymentStatus: true } : t
          )
        )

        toast({
          title: "Payment status updated!",
          description: `The payment for team ${team.teamName} has been marked as paid.`,
        })

        setSelectedTeam(null)
      } else {
        console.error("Failed to update payment status")
        toast({
          title: "Error",
          description: "There was an error while updating the payment status.",
        })
      }
    } catch (error) {
      console.error("Error updating payment status:", error)
      toast({
        title: "Error",
        description: "There was an error while updating the payment status.",
      })
    }
  }

  return (
    <div className="flex flex-col space-y-5 items-center bg-black text-white container h-screen py-10">
      <Label className="text-center text-6xl mb-6">Teams</Label>

      {/* Display loading spinner or message */}
      {isLoading ? (
        <p>Loading teams...</p>
      ) : (
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Team Name</TableHead>
              <TableHead>Institution</TableHead>
              <TableHead>Registration Date</TableHead>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Payment Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teams.map((team) => (
              <TableRow key={team._id}>
                <TableCell>{team.teamName}</TableCell>
                <TableCell>{team.institutionName}</TableCell>
                <TableCell>
                  {new Date(team.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>{team.trxId}</TableCell>
                <TableCell>
                  {team.paymentStatus ? (
                    <span className="text-green-500">Paid</span>
                  ) : (
                    <>
                      <Dialog
                        open={selectedTeam?._id === team._id}
                        onOpenChange={() => setSelectedTeam(team)}
                      >
                        <DialogTrigger asChild>
                          <Button variant="default">Authorize Payment</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <h2 className="text-lg font-semibold">
                              Confirm Payment
                            </h2>
                          </DialogHeader>
                          <p>
                            Are you sure you want to mark the payment for team{" "}
                            <strong>{team.teamName}</strong> as paid?
                          </p>
                          <DialogFooter>
                            <Button
                              onClick={() => setSelectedTeam(null)}
                              variant="outline"
                            >
                              Cancel
                            </Button>
                            <Button
                              onClick={() => handlePaymentConfirmation(team)}
                              className="bg-green-600 hover:bg-green-500"
                            >
                              Confirm Payment
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}

export default AdminPanel
