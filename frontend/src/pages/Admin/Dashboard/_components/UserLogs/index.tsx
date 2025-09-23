import { useEffect, useState } from "react";
import { Check, Info, X } from "lucide-react";

import UserChats from "../UserChats";

import type { IUsersLogs } from "../../../../../common/interface/Admin.interface";
import { Separator } from "../../../../../components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../../components/ui/table";
import { formatDate } from "../../../../../utils/FormatDate";
import { Button } from "../../../../../components/ui/button";
import { AdminService } from "../../../../../services/adminService";
import Loader from "../Loader";

interface UsersLogsProps {
  userSelected: boolean;
  setUserSelected: (value: boolean) => void;
}

export default function UsersLogs({
  userSelected,
  setUserSelected,
}: UsersLogsProps) {
  const [userId, setUserId] = useState<number>(0);
  const [users, setUsers] = useState<IUsersLogs[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFetchUsers = async () => {
    setIsLoading(true);

    try {
      await AdminService.userLogs().then((response) => {
        setUsers(response);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetchUsers();

    return () => {};
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const handleOpenUserChats = (id: number) => {
    setUserId(id);
    setUserSelected(true);
  };

  const handleActiveSession = async (id: number) => {
    await AdminService.activeSession(id);
  };

  const handleDeactiveSession = async (id: number) => {
    await AdminService.deactiveSession(id);
  };

  return userSelected ? (
    <UserChats id={userId} />
  ) : (
    <section className="flex flex-col items-start gap-y-4 w-full h-screen mt-16">
      <header className="flex flex-col px-4 text-foreground">
        <h1 className="text-base font-semibold">Logs de Usuários</h1>
        <p className="text-xs text-foreground/50">
          Informações sobre os usuários e suas interações ...
        </p>
      </header>

      <Separator />

      <article
        className="flex flex-col w-full px-4 overflow-y-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {users && users.length > 0 ? (
          <Table>
            <TableHeader className="bg-card">
              <TableRow>
                <TableHead>Status</TableHead>
                <TableHead>Identificador</TableHead>
                <TableHead>Total de mensagens</TableHead>
                <TableHead>Total de tokens</TableHead>
                <TableHead>Data de Criação</TableHead>
                <TableHead className="text-center w-28">Visualizar</TableHead>
                <TableHead className="text-center w-28">Desativado?</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {users.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="uppercase">{item.status}</TableCell>
                  <TableCell>{item.name ? item.name : item.id}</TableCell>
                  <TableCell>{item.total_messages}</TableCell>
                  <TableCell>{item.total_tokens}</TableCell>
                  <TableCell>{formatDate(new Date(item.created_at))}</TableCell>
                  <TableCell className="text-center">
                    <Button
                      variant={"outline"}
                      size="icon"
                      onClick={() => handleOpenUserChats(item.id)}
                    >
                      <Info />
                    </Button>
                  </TableCell>
                  <TableCell className="text-center">
                    {item.active ? (
                      <Button
                        variant={"outline"}
                        size="icon"
                        onClick={() => handleDeactiveSession(item.id)}
                      >
                        <X />
                      </Button>
                    ) : (
                      <Button
                        variant={"outline"}
                        size="icon"
                        onClick={() => handleActiveSession(item.id)}
                      >
                        <Check />
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <h2 className="text-foreground text-sm">
            Ainda não há dados para serem mostrados ...
          </h2>
        )}
      </article>
    </section>
  );
}
