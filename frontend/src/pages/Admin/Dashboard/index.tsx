import { useState } from "react";

import GeneralLogs from "./_components/GeneralLogs";
import UsersLogs from "./_components/UserLogs";
import Health from "./_components/Health";
import DashSidebar from "./_components/Sidebar";

export default function AdminDashboard() {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [userSelected, setUserSelected] = useState<boolean>(false);

  return (
    <main
      className="relative overflow-y-auto flex flex-row min-w-full min-h-full bg-background font-montserrat"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <DashSidebar
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        setUserSelected={setUserSelected}
      />

      {activeIndex === 1 && <GeneralLogs />}
      {activeIndex === 2 && (
        <UsersLogs
          userSelected={userSelected}
          setUserSelected={setUserSelected}
        />
      )}
      {activeIndex === 3 && <Health />}
    </main>
  );
}
