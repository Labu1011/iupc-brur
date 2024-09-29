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
import { Separator } from "../ui/separator"

// Zod Schema for TShirtSize Enum
const TShirtSize = z.enum(["S", "M", "L", "XL", "XXL"])

// Full form schema including coach and fixed 3 members
const formSchema = z.object({
  teamName: z
    .string()
    .min(4, { message: "Team Name must be at least 4 characters long." }),
  institutionName: z.string().nonempty("Institution name is required."),
  coach: z.object({
    name: z.string().nonempty("Coach name is required"),
    email: z.string().email("Invalid email"),
    phoneNumber: z.string().nonempty("Phone number is required"),
    tShirtSize: TShirtSize,
  }),
  members: z.tuple([
    z.object({
      name: z.string().nonempty("Member name is required"),
      email: z.string().email("Invalid email"),
      phoneNumber: z.string().nonempty("Phone number is required"),
      tShirtSize: TShirtSize,
    }),
    z.object({
      name: z.string().nonempty("Member name is required"),
      email: z.string().email("Invalid email"),
      phoneNumber: z.string().nonempty("Phone number is required"),
      tShirtSize: TShirtSize,
    }),
    z.object({
      name: z.string().nonempty("Member name is required"),
      email: z.string().email("Invalid email"),
      phoneNumber: z.string().nonempty("Phone number is required"),
      tShirtSize: TShirtSize,
    }),
  ]),
})

// ----

const RegisterForm = () => {
  // useForm() hook usage
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: "",
      institutionName: "",
      coach: {
        name: "",
        email: "",
        phoneNumber: "",
        tShirtSize: "M",
      },
      members: [
        { name: "", email: "", phoneNumber: "", tShirtSize: "M" },
        { name: "", email: "", phoneNumber: "", tShirtSize: "M" },
        { name: "", email: "", phoneNumber: "", tShirtSize: "M" },
      ],
    },
  })

  // handling submit
  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log("submitted!", data)

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/team-registration`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      )

      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div
      id="aboutus"
      className={cn(geist.className, "container space-y-3 w-full")}
    >
      <div className="w-full h-44"></div>
      <div className="w-full h-12"></div>
      <SectionHeader
        title={
          <>
            <span className="text-white opacity-30">{"new"}</span>{" "}
            <span>Registration</span>
            <span className="text-white opacity-30">{".create()"}</span>
          </>
        }
        subtitle={
          <>
            Ready to compete? <br /> Register now and prepare for an
            unforgettable experience!
          </>
        }
      />
      <div className="h-10"></div>
      <Card className="relative text-white border-none">
        <CardContent className="relative z-10">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="max-w-[768px] bg-black mx-auto space-y-14  border border-gray-600/30 rounded-3xl shadow-3xl p-14"
            >
              <div className="space-y-2">
                <CardTitle className="text-lg">Basic Information</CardTitle>
                <CardTitle className="flex-col items-start gap-2 text-sm">
                  <div className="flex items-center gap-x-2 leading-none text-muted-foreground">
                    <InfoCircledIcon className="w-4 h-4" /> Provide your team's
                    basic information
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

              {/* Coach Information */}
              <div className="space-y-2">
                <CardTitle className="text-lg">Coach Information</CardTitle>
                <CardTitle className="flex-col items-start gap-2 text-sm">
                  <div className="flex items-center gap-x-2 leading-none text-muted-foreground">
                    <InfoCircledIcon className="w-4 h-4" /> Provide your coach
                    information
                  </div>
                </CardTitle>
                <div className="h-1" />
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="coach.name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="">Coach Name</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter coach name"
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
                    name="coach.email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="">Coach Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter coach email"
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
                    name="coach.phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="">Coach Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter coach phone number"
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
                    name="coach.tShirtSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="">Coach T-Shirt Size</FormLabel>
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
                          <div className="flex items-center gap-x-2 leading-none text-muted-foreground">
                            <InfoCircledIcon className="w-4 h-4" /> Member 1
                            will be considered team leader
                          </div>
                        </CardTitle>
                        <div className="h-1"></div>
                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name={`members.${index}.name`}
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
                            name={`members.${index}.email`}
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
                            name={`members.${index}.phoneNumber`}
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
                            name={`members.${index}.tShirtSize`}
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
              </div>

              {/* Submit Button */}
              <Button type="submit" className="max-w-36">
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
