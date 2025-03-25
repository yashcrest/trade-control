"use client"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import React from "react"
import { TrendingUpIcon, Send, Users, Settings2, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

const CardSection = () => {
  const router = useRouter()

  return (
    <div className="space-y-5">
      <div className="flex">
        <h2 className="flex-1 text-center">Authorization</h2>
        <div>
          <Button
            onClick={() => router.push("authorization/new-authorization")}
          >
            + New Authorisation
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 px-4 cursor-pointer">
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <div className="space-y-4">
                <CardDescription className="font-semibold tabular-nums">
                  Active Authorisations
                </CardDescription>
                <CardTitle className="flex items-center gap-3">
                  <Users />
                  350
                </CardTitle>
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
                <CardTitle className="flex items-center gap-3">
                  <Users />
                  67
                </CardTitle>
              </div>
              <div>
                <Badge variant="outline">
                  <Clock className="size-4" />
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
                <CardTitle className="flex items-center gap-3">
                  <Users />
                  30
                </CardTitle>
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
                <CardTitle className="flex items-center gap-3">
                  <Users />
                  10
                </CardTitle>
              </div>
              <div>
                <Badge variant="outline">
                  <Settings2 className=" size-4" />
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardFooter className="gap-1 text-sm">
            <p className="text-muted-foreground">Awaiting review or action</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default CardSection
