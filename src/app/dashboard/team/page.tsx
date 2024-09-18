"use client";
import AppBreadcrumb from "@/components/atoms/breadcrumb/AppBreadcrumb";
import React from "react";
import { useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { TeamData } from "@/components/atoms/team-board/teamdata";

const Team = () => {
  const [activeTab, setActiveTab] = useState("team");

  return (
    <div className="px-8">
      <AppBreadcrumb pathname="/dashboard/team" />
      <div className="mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Teams</h1>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsContent value="team">
            <TeamData />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Team;
