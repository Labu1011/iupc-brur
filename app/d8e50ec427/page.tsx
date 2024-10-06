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
} from "@/components/ui/form"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

// Zod Schema for Login Form
const formSchema = z.object({
  username: z
    .string()
    .min(4, { message: "Username must be at least 4 characters long." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
})

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const { toast } = useToast()

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    // Show loading toast with spinner
    const toastId = toast({
      title: "Logging in...",
      description: "Please wait...",
    })

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
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
          description: `Welcome back, ${result.username}!`,
        })
        console.log("User logged in: ", result)

        // Reset form fields
        form.reset()
      } else {
        const error = await response.json()
        toast({
          title: "Error",
          description: error.message || "Failed to log in. Please try again.",
          variant: "destructive",
        })
        console.error("Error logging in: ", error)
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
    <div
      id="login"
      className={cn(
        geist.className,
        "flex items-center justify-center bg-black space-y-3 h-screen w-full"
      )}
    >
      <Card className="relative text-white border-none">
        <CardContent className="relative z-10">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="w-[400px] bg-black mx-auto space-y-6 border border-gray-600/30 rounded-3xl shadow-3xl p-7"
            >
              <CardTitle className="text-4xl">Admin Login</CardTitle>

              {/* Username Field */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter your username"
                        {...field}
                        className=""
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                        className=""
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button type="submit" className="max-w-36">
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginForm
