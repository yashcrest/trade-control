"use client"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import React from "react"
import {
  TrendingUpIcon,
  CircleDotDashed,
  Send,
  ShieldAlert,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const CardSection = () => {
  const handleClick = () => {
    toast.success("Test Click")
  }

  return (
    <div className="space-y-5">
      <div className="flex">
        <h2 className="flex-1 text-center">Authorization</h2>
        <div>
          <Button onClick={handleClick}>+ New Authorisation</Button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 px-4">
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <div className="space-y-4">
                <CardDescription className="font-semibold tabular-nums">
                  Active Authorisations
                </CardDescription>
                <CardTitle>350 People</CardTitle>
              </div>
              <div>
                <TrendingUpIcon className="size-4" />
              </div>
            </div>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm">
            <p>Current Active Authorization</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <div className="space-y-4">
                <CardDescription className=" font-semibold tabular-nums">
                  Expiring Authorisations
                </CardDescription>
                <CardTitle>67 People</CardTitle>
              </div>
              <div>
                <ShieldAlert className="size-4" />
              </div>
            </div>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm">
            <p>Expiring in next 60 days</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <div className="space-y-4">
                <CardDescription className=" font-semibold tabular-nums">
                  Submitted Authorisations
                </CardDescription>
                <CardTitle>30 People</CardTitle>
              </div>
              <div>
                <Send className="size-4" />
              </div>
            </div>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm">
            <p>Recently submitted for approval</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <div className="space-y-4">
                <CardDescription className=" font-semibold tabular-nums">
                  Pending Authorization
                </CardDescription>
                <CardTitle>10 People</CardTitle>
              </div>
              <div>
                <CircleDotDashed className=" size-4" />
              </div>
            </div>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm">
            <p>Awaiting review or action</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default CardSection
