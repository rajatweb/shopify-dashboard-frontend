'use client';

import React from "react";
import Dashboardlayout from "@/components/layout/dashboard-layout";
import KanbanBoard from "@/components/kanban-board";
import { useSession, signIn } from 'next-auth/react';

const Dashboard = () => {
  // const { data: session, status } = useSession();

  // if (status === 'loading') {
  //   return <div>Loading...</div>;
  // }

  return (
    <Dashboardlayout>
      {/* <h1>Welcome {session.user?.name}!</h1>
      <p>Email: {session.user?.email}</p>  */}
      <KanbanBoard />
    </Dashboardlayout>
  );
};

export default Dashboard;
