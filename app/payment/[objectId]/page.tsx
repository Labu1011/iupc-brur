"use client"

import SectionHeader from "@/components/sections/header"

import { useForm } from "react-hook-form"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form" // Adjust the path to your shadcn components
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { CardTitle } from "@/components/ui/card"
import { CheckboxIcon, InfoCircledIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

type PaymentFormValues = {
  paymentMethod: string
  trxId: string
}

const TeamPaymentPage = ({ params }: { params: { objectId: string } }) => {
  // Use useState to manage paymentStatus and loading state
  const [paymentStatus, setPaymentStatus] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true) // New loading state

  const form = useForm<PaymentFormValues>({
    defaultValues: {
      paymentMethod: "",
      trxId: "",
    },
  })

  // Fetch team data using useEffect
  useEffect(() => {
    const fetchTeam = async () => {
      setIsLoading(true) // Start loading
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/team-registration/${params.objectId}`,
          {
            method: "GET",
          }
        )
        const data = await response.json()
        setPaymentStatus(data.paymentStatus) // Set paymentStatus state
        console.log(data.paymentStatus)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false) // Stop loading after fetching
      }
    }

    if (params.objectId) {
      fetchTeam()
    }
  }, [params.objectId])

  const onSubmit = (values: PaymentFormValues) => {
    console.log("Payment Form Submitted", values)
  }

  return (
    <div className="relative w-full py-24 overflow-hidden min-h-screen bg-black text-white items-center justify-between">
      <Link
        href="/"
        className="absolute text-zinc-500 hover:text-zinc-400 transition-all duration-200 -translate-y-12 translate-x-12"
      >
        &larr; Go Back
      </Link>
      <div className="mt-12" />

      {/* Show loading message while fetching */}
      {isLoading ? (
        <p className="text-center text-lg text-zinc-400">
          Retrieving payment info, please wait...
        </p>
      ) : (
        <>
          {/* Conditionally render based on paymentStatus */}
          {paymentStatus === true ? (
            <>
              <CheckboxIcon className="text-green-500 w-12 h-12 mx-auto" />
              <h1 className="text-5xl text-center mt-8 font-bold text-zinc-100">
                Payment Verification Complete!
              </h1>
              <p className="text-zinc-400 text-center mt-2">
                Thanks for making the payment. Your team has successfully been
                registered.
              </p>
            </>
          ) : paymentStatus === false || paymentStatus === null ? (
            <>
              <SectionHeader title="Payment Verification" subtitle={<></>} />
              <div className="max-w-md mx-auto p-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    {/* Payment Method Selector */}
                    <FormField
                      control={form.control}
                      name="paymentMethod"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Payment Method</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select payment method" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Bkash">Bkash</SelectItem>
                                <SelectItem value="Nagad">Nagad</SelectItem>
                                <SelectItem value="Rocket">Rocket</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Transaction ID Input */}
                    <FormField
                      control={form.control}
                      name="trxId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Transaction ID</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Enter transaction ID"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <Button type="submit">Submit</Button>
                  </form>
                </Form>

                <p className="mt-4 text-zinc-500">or</p>
                <Link href="/" className="text-zinc-300 underline mt-2">
                  Pay Later
                </Link>
              </div>
            </>
          ) : (
            <p className="text-red-500 text-center">
              Failed to retrieve payment status
            </p>
          )}
        </>
      )}
    </div>
  )
}

export default TeamPaymentPage
