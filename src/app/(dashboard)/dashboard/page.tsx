"use client";
import React from "react";
import Card from "@/components/Card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <>
      <div>
        <h2 className="font-bold mb-4 text-center">Dashboard Overview</h2>

        {/* Card Container */}
        <div className="grid grid-cols-3 gap-6">
          <Card title="Test data" description="Total Users: 1,250" />
          <Card title="Test Data" description="Total Users: 1,250" />
          <Card title="Test Data" description="Total Users: 1,250" />
          <Card title="Test Data" description="Total Users: 1,250" />
        </div>

        {/* add license button */}
        <div className="py-6">
          <Button onClick={() => router.push("dashboard/licenses/new")}>
            Add New License
          </Button>
        </div>
      </div>
    </>
  );
};

export default Page;
