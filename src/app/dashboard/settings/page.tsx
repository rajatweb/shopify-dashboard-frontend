"use client";

// pages/settings.tsx

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Updated import
import { AppBreadcrumb } from "@/components/atoms/breadcrumb";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <div className="mx-auto p-4">
      <AppBreadcrumb />
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="config">Config</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <AccountSettings />
        </TabsContent>
        <TabsContent value="profile">
          <ProfileSettings />
        </TabsContent>
        <TabsContent value="config">
          <ConfigSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const AccountSettings = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
    <form>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          className="w-full p-2 border rounded"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Password</label>
        <input
          type="password"
          className="w-full p-2 border rounded"
          placeholder="Enter your password"
        />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
    </form>
  </div>
);

const ProfileSettings = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
    {/* Add profile settings form or items here */}
  </div>
);

const ConfigSettings = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Configuration Settings</h2>
    {/* Add config settings form or items here */}
  </div>
);

export default SettingsPage;
