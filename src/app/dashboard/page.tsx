
import React from "react";
import Dashboardlayout from "@/components/layout/dashboard-layout";
import KanbanBoard from "@/components/kanban-board";
import { GetServerSideProps } from "next";
import { getCookie } from "cookies-next";
interface DashboardProps {
  accessToken: string | null;
}

const page: React.FC<DashboardProps> = ({ accessToken }) => {

  return (
    <Dashboardlayout>
      <div>
        <h1>Welcome to your Shopify Dashboard</h1>
        <p>Your access token: {accessToken}</p>
      </div>
      <KanbanBoard />
    </Dashboardlayout>
  );
};


export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const accessToken = getCookie('shopifyAccessToken', { req, res });

  return {
    props: {
      accessToken: accessToken || null,
    },
  };
};
export default page;
