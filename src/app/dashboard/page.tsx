"use client";
import React from "react";

import KanbanBoard from "@/components/kanban-board";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Dashboard = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    redirect("/");
  }

  return (
    <>
      <h1>Welcome {session?.user?.name}!</h1>
      <p>Email: {session?.user?.email}</p>
      <KanbanBoard />
    </>
  );
};

export default Dashboard;
