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
import { Badge } from "@/components/ui/badge"

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
                <Badge variant="outline">
                  <TrendingUpIcon className="size-4" />
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardFooter className="gap-1 text-sm">
            <p className="text-muted-foreground">
              Current Active Authorization
            </p>
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
                <Badge variant="outline">
                  <ShieldAlert className="size-4" />
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardFooter className="gap-1 text-sm">
            <p className="text-muted-foreground">Expiring in next 60 days</p>
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
                <Badge variant="outline">
                  <Send className="size-4" />
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardFooter className="gap-1 text-sm">
            <p className="text-muted-foreground">
              Recently submitted for approval
            </p>
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
                <Badge variant="outline">
                  <CircleDotDashed className=" size-4" />
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardFooter className="gap-1 text-sm">
            <p className="text-muted-foreground">Awaiting review or action</p>
            <p>test</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default CardSection
