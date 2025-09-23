import { useEffect, useState } from "react";

import type { IUserChats } from "../../../../../common/interface/Admin.interface";
import { AdminService } from "../../../../../services/adminService";
import { Separator } from "../../../../../components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../../components/ui/table";
import Loader from "../Loader";

interface UserChatsProps {
  id: number;
}

export default function UserChats({ id }: UserChatsProps) {
  const [userChats, setUserChats] = useState<IUserChats[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGetData = async () => {
    setIsLoading(true);

    try {
      await AdminService.userChats(id).then((response) => {
        console.log(response);

        setUserChats(response);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetData();

    return () => {};
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="flex flex-col items-start gap-y-4 w-full h-screen mt-16">
      <header className="flex flex-col px-4 text-foreground">
        <h1 className="text-base font-semibold">{id}</h1>
        <p className="text-xs text-foreground/50">Mensagens do usuário ...</p>
      </header>

      <Separator />

      <article
        className="flex flex-col w-full px-4 overflow-y-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {userChats && userChats.length > 0 ? (
          <Table>
            <TableHeader className="bg-card">
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>Mensagem</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Processado?</TableHead>
                <TableHead>Id da Sessão</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {userChats.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.timestamp}</TableCell>
                  <TableCell
                    className="max-w-lg overflow-auto text-wrap"
                    style={{ whiteSpace: "normal" }}
                  >
                    {item.conteudo}
                  </TableCell>
                  <TableCell>{item.role}</TableCell>
                  <TableCell>{item.processado ? "Sim" : "Nao"}</TableCell>
                  <TableCell>{item.session_id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <h2 className="text-foreground text-sm">
            Esse usuário não possui mensagens para serem mostradas ...
          </h2>
        )}
      </article>
    </section>
  );
}
