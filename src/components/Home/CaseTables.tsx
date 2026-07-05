import { cases } from "@/lib/cases";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";


function CaseTables() {
  return (
    
        <Table className="border-2 rounded">
          <TableCaption>
            A List of all OSINT Investigation by {"Gagan"}
          </TableCaption>
          <TableHeader className="bg-muted/50 ">
            <TableRow>
              <TableHead className="text-xs font-semibold uppercase tracking-wider">
                Case No.
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider">
                Person Name
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider">
                Case Type
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider">
                Priority
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider">
                Status
              </TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cases.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.initialLead}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.priority}</TableCell>
                <TableCell>
                  <span
                    className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
                      item.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : item.status === "In Progress"
                          ? "bg-blue-100 text-blue-800"
                          : item.status === "Under Review"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button>View Case</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      
  );
}

export default CaseTables;
