"use client"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
              <CardTitle className=" font-semibold tabular-nums">
                Active Authorisations
              </CardTitle>
              <div>
                <Badge
                  variant="outline"
                  className="flex gap-1 rounded-lg text-xs"
                >
                  <TrendingUpIcon className="size-4" />
                  +5.5%
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm">
            <div>350 people</div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle className=" font-semibold tabular-nums">
                Expiring Authorisations
              </CardTitle>
              <div>
                <Badge
                  variant="outline"
                  className="flex gap-1 rounded-lg text-xs"
                >
                  <ShieldAlert className="size-4" />
                  +5.5%
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm">
            <div>67 people</div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle className=" font-semibold tabular-nums">
                Submitted Authorisations
              </CardTitle>
              <div>
                <Badge
                  variant="outline"
                  className="flex gap-1 rounded-lg text-xs"
                >
                  <Send className="size-4" />
                  +5.5%
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm">
            <div>30 people</div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle className=" font-semibold tabular-nums">
                Pending Authorization
              </CardTitle>
              <div>
                <Badge
                  variant="outline"
                  className="flex  gap-1 rounded-lg text-xs"
                >
                  <CircleDotDashed className=" size-4" />
                  5pending
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm">
            <div>10 people</div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default CardSection
