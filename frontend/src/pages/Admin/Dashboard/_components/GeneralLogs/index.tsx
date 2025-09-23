import { Separator } from "../../../../../components/ui/separator";

import type { ILogsWindow } from "../../../../../common/interface/Admin.interface";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../../components/ui/table";

interface GeneralLogsProps {
  data?: ILogsWindow[];
}

export default function GeneralLogs({ data }: GeneralLogsProps) {
  return (
    <section className="flex flex-col items-start gap-y-4 w-full h-screen mt-16">
      <header className="flex flex-col px-4 text-foreground">
        <h1 className="text-base font-semibold">Logs Gerais</h1>
        <p className="text-xs text-foreground/50">
          Informações gerais sobre o sistema e seus recursos de interação ...
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
        {data && data.length > 0 ? (
          <Table>
            <TableHeader className="bg-card">
              <TableRow>
                <TableHead>Tipo</TableHead>
                <TableHead className="max-w-lg overflow-hidden">
                  Descrição
                </TableHead>
                <TableHead>Data de Criação</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.log_type}</TableCell>
                  <TableCell
                    className="max-w-lg overflow-auto text-wrap"
                    style={{ whiteSpace: "normal" }}
                  >
                    {item.message}
                  </TableCell>
                  <TableCell>{item.timestamp}</TableCell>
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
