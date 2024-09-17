'use client';

import React from "react";

import KanbanBoard from "@/components/kanban-board";
import { useSession, signIn } from 'next-auth/react';

const Dashboard = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    signIn(); // Redirect to sign in
    return <div>Redirecting...</div>;
  }

  return (
    <>
      <h1>Welcome {session.user?.name}!</h1>
      <p>Email: {session.user?.email}</p>
      <KanbanBoard />
    </>
  );
};

export default Dashboard;
