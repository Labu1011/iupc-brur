"use client"

import { cn } from "@/app/lib/cn"
import { geist } from "@/app/lib/font"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import SectionHeader from "./header"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { Card, CardContent, CardTitle } from "../ui/card"
import { InfoCircledIcon } from "@radix-ui/react-icons"
import { useToast } from "@/hooks/use-toast"
import { Separator } from "../ui/separator"
import { useState } from "react"
import { useRouter } from "next/navigation"

// Zod Schema for TShirtSize Enum
const TShirtSize = z.enum(["S", "M", "L", "XL", "XXL"])
const paymentMethods = z.enum(["Bkash", "Nagad", "Rocket"])

const phoneNumberValidation = z
  .string()
  .length(11, { message: "Phone number must be 11 digits long." })
  .regex(/^[0-9]+$/, { message: "Phone number must contain only numbers." })
  .nonempty("Phone number is required")

// Full form schema including coach and fixed 3 members
const formSchema = z.object({
  teamName: z
    .string()
    .min(4, { message: "Team Name must be at least 4 characters long." }),
  institutionName: z.string().nonempty("Institution name is required."),

  members: z.tuple([
    z.object({
      name: z.string().nonempty("Member name is required"),
      email: z.string().email("Invalid email"),
      phoneNumber: phoneNumberValidation,
      tShirtSize: TShirtSize,
    }),
    z.object({
      name: z.string().nonempty("Member name is required"),
      email: z.string().email("Invalid email"),
      phoneNumber: phoneNumberValidation,
      tShirtSize: TShirtSize,
    }),
    z.object({
      name: z.string().nonempty("Member name is required"),
      email: z.string().email("Invalid email"),
      phoneNumber: phoneNumberValidation,
      tShirtSize: TShirtSize,
    }),
  ]),
})

// ----

const RegisterForm = () => {
  // Initialize router from Next.js
  const router = useRouter()

  // useForm() hook usage
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: "",
      institutionName: "",
      members: [
        { name: "", email: "", phoneNumber: "", tShirtSize: "M" },
        { name: "", email: "", phoneNumber: "", tShirtSize: "M" },
        { name: "", email: "", phoneNumber: "", tShirtSize: "M" },
      ],
    },
  })

  // Access the toast hook
  const { toast } = useToast()

  // handling submit
  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    // console.log("submitted!", data)

    // Show loading toast with spinner
    const toastId = toast({
      title: "Submitting...",
      description: (
        <div className="flex items-center space-x-2">
          <div className="animate-spin">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>{" "}
          <span className="sr-only">Loading...</span>
          {/* Loading spinner */}
          <span>Creating team, please wait...</span>
        </div>
      ),
    })

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/team-registration`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      )

      if (response.ok) {
        const result = await response.json()

        // Show success toast
        toast({
          title: "✅ Success!",
          description: `Team "${result.teamName}" created successfully.`,
        })
        console.log("Team created: ", result)

        // Reset form fields
        form.reset()

        router.push(`/payment/${result?._id}`)
      } else {
        // If response is not OK, extract the error message from the response
        const error = await response.json()

        // Show error toast with the backend error message
        toast({
          title: "Error",
          description:
            error.message || "Failed to create the team. Please try again.",
          variant: "destructive", // Optional: to give it a red/error style
        })

        console.error("Error creating team: ", error)
      }
    } catch (error) {
      toast({
        title: "❌ Error",
        variant: "destructive",
        description: "Something went wrong. Please try again later.",
      })
      console.error("Catch error: ", error)
    }
  }

  return (
    <div id="register" className={cn(geist.className, "space-y-3 w-full")}>
      <div className="w-full h-44"></div>
      <div className="w-full h-12"></div>
      <SectionHeader
        title={
          <>
            <span className="text-white opacity-30">{"Final"}</span>{" "}
            <span>Registration</span>
            {/* <span className="text-white opacity-30">{""}</span> */}
          </>
        }
        subtitle={
          <>
            This is mandatory for all teams, even if you pre-registered. <br />
            Don&apos;t miss the chance to compete and claim your slot!
          </>
        }
      />
      <div className="h-10"></div>
      <Card className="relative text-white border-none">
        <CardContent className="relative z-10 p-0">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="max-w-[768px] bg-black mx-auto space-y-14  border border-gray-600/30 rounded-3xl shadow-3xl p-7 lg:p-14"
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-400 text-zinc-800">
                      1
                    </div>
                    <span className="ml-2 text-muted">Final Registration</span>
                  </div>

                  <div className="w-8 border-t border-zinc-400"></div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center border border-zinc-600 rounded-full text-white">
                      2
                    </div>
                    <span className="ml-2 text-muted">Payment</span>
                  </div>
                </div>

                <CardTitle className="text-lg">Basic Information</CardTitle>
                <CardTitle className="flex-col items-start gap-2 text-sm">
                  <div className="flex items-center gap-x-2 leading-none text-muted-foreground">
                    <InfoCircledIcon className="w-4 h-4" />{" "}
                    {`Provide your team's
                    basic information`}
                  </div>
                </CardTitle>
                <div className="h-1" />
                {/* Team Name */}
                <FormField
                  control={form.control}
                  name="teamName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Team Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter team name"
                          {...field}
                          className=""
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Institution Name */}
                <FormField
                  control={form.control}
                  name="institutionName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="">Institution Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter institution name"
                          {...field}
                          className=""
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Members Information */}
              <div className="space-y-2">
                <CardTitle className="text-lg">Members Information</CardTitle>
                <CardTitle className="flex-col items-start gap-2 text-sm">
                  <div className="flex items-center gap-x-2 leading-none text-muted-foreground">
                    <InfoCircledIcon className="w-4 h-4" /> Provide your members
                    information
                  </div>
                </CardTitle>
                <div className="h-1"></div>
                <div className="space-y-10">
                  {form.watch("members").map((_, index) => (
                    <>
                      <div key={index} className="space-y-1">
                        <CardTitle className="text-md">
                          Member {index + 1}
                        </CardTitle>
                        <CardTitle
                          className={cn(
                            index === 0
                              ? "flex-col items-start gap-2 text-sm"
                              : "hidden"
                          )}
                        >
                          <div className="flex flex-col gap-2 leading-none text-muted-foreground">
                            <InfoCircledIcon className="w-4 h-4" /> Member 1
                            will be considered as team leader <br />
                            <p>
                              We will send all mail to this member&apos;s email
                            </p>
                          </div>
                        </CardTitle>
                        <div className="h-1"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name={`members.${index}.name` as any}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="">Name</FormLabel>
                                <FormControl>
                                  <Input
                                    type="text"
                                    placeholder={`Enter name`}
                                    {...field}
                                    className=""
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`members.${index}.email` as any}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="">Email</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="Enter email"
                                    {...field}
                                    className=""
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`members.${index}.phoneNumber` as any}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="">Phone Number</FormLabel>
                                <FormControl>
                                  <Input
                                    type="text"
                                    placeholder="Enter phone number"
                                    {...field}
                                    className=""
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`members.${index}.tShirtSize` as any}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="">T-Shirt Size</FormLabel>
                                <FormControl>
                                  <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                  >
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select size" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="S">S</SelectItem>
                                      <SelectItem value="M">M</SelectItem>
                                      <SelectItem value="L">L</SelectItem>
                                      <SelectItem value="XL">XL</SelectItem>
                                      <SelectItem value="XXL">XXL</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </>
                  ))}
                </div>
                <div className="pt-8 flex gap-2 leading-snug items-baseline text-sm text-amber-300/90">
                  <InfoCircledIcon className="w-4 h-4" /> After submitting this
                  form, you will be redirected to the payment page. But you can
                  pay later with that link {"(Each team has a specific link)"}.
                </div>
              </div>

              {/* Payment Verification */}

              {/* Submit Button */}
              <Button type="submit" size="lg" className="max-w-36 text-sm">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
        <div className="absolute z-0 top-0 left-1/2 -translate-x-1/2 bg-gray-100 blur-[300px] rounded-full h-96 w-96"></div>
      </Card>
    </div>
  )
}

export default RegisterForm
