import { useEffect, useState } from "react";
import { Logs } from "lucide-react";
import type { IUserChats } from "../../../../../common/interface/Admin.interface";
import { AdminService } from "../../../../../services/adminService";

interface UserChatsProps {
  id: number;
}

export default function UserChats({ id }: UserChatsProps) {
  const [userChats, setUserChats] = useState<IUserChats[]>();

  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    await AdminService.userChats(id).then((response) => {
      setUserChats(response);
    });
  };

  return (
    <section className="flex flex-col items-start w-full h-screen mt-20 px-4">
      <header className="flex flex-row items-center w-full gap-x-2 py-1 mb-8 border-b-2 border-b-highlight text-highlight">
        <Logs size={32} />
        <h2 className="text-xl font-extrabold">{id}</h2>
      </header>

      <article className="flex flex-col w-full">
        {userChats?.length ? (
          userChats.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-row items-center w-full gap-x-2 py-4  border-b-2 border-highlight/50 text-highlight"
            >
              <div className="p-2 bg-highlight/50 rounded-sm">
                <p className="text-xs font-bold">{item.role}</p>
              </div>
              <h3 className="text-base font-extrabold">{item.session_id}</h3>
              <p className="text-xs font-semibold text-highlight/50 max-w-[75%]">
                {item.conteudo}
              </p>
              <p className="absolute right-0 text-xs">{item.timestamp}</p>
            </div>
          ))
        ) : (
          <h3 className="text-highlight text-base font-extrabold">
            Parece que esse usuário ainda não tem nenhum chat
          </h3>
        )}
      </article>
    </section>
  );
}
