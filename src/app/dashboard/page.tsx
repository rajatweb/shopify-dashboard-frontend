
import React from "react";
import Dashboardlayout from "@/components/layout/dashboard-layout";
import KanbanBoard from "@/components/kanban-board";


const page = () => {

  return (
    <Dashboardlayout>
      <KanbanBoard />
    </Dashboardlayout>
  );
};

export default page;
