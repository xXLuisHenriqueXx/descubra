import { useEffect, useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";

import { AdminService } from "../../../services/adminService";
import type {
  IHealth,
  ILogsWindow,
  IUsersLogs,
} from "../../../common/interface/Admin.interface";
import GeneralLogs from "./_components/GeneralLogs";
import UsersLogs from "./_components/UserLogs";
import Health from "./_components/Health";
import DashSidebar from "./_components/Sidebar";

export default function AdminDashboard() {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [health, setHealth] = useState<IHealth>();
  const [logsWindow, setLogsWindow] = useState<ILogsWindow[]>();
  const [usersLogs, setUsersLogs] = useState<IUsersLogs[]>();
  const [userSelected, setUserSelected] = useState<boolean>(false);

  useEffect(() => {
    try {
      setIsLoading(true);

      handleGetData();
    } catch (err: any) {
      throw new Error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleGetData = async () => {
    await AdminService.health().then((response) => {
      setHealth(response);
    });

    await AdminService.logsWindow().then((response) => {
      setLogsWindow(response);
    });

    await AdminService.userLogs().then((response) => {
      setUsersLogs(response);
    });
  };

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

      {!isLoading && activeIndex === 1 && <GeneralLogs data={logsWindow} />}
      {!isLoading && activeIndex === 2 && (
        <UsersLogs
          data={usersLogs}
          userSelected={userSelected}
          setUserSelected={setUserSelected}
        />
      )}
      {!isLoading && activeIndex === 3 && <Health data={health} />}

      {isLoading && (
        <section className="flex flex-col items-center justify-center w-full max-h-screen">
          <MagnifyingGlass
            visible={true}
            height="120"
            width="120"
            ariaLabel="magnifying-glass-loading"
            glassColor="#c0efff"
            color="#ebeef1"
          />
        </section>
      )}
    </main>
  );
}
