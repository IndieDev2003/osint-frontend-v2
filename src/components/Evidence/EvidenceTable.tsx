import { Trash } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

function EvidenceTable() {
  return (
    <Card>
      <CardContent>
        <Table className="">
          <TableCaption>
            List of all the evidences collected while doing Investigations.
          </TableCaption>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead>Evidence ID </TableHead>
              <TableHead> Type </TableHead>
              <TableHead> Person </TableHead>
              <TableHead> Case Id </TableHead>
              <TableHead> Evidence Url </TableHead>
              <TableHead className="text-right"> Actions </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Ev-120</TableCell>
              <TableCell>Social</TableCell>
              <TableCell>Gagan</TableCell>
              <TableCell>99/25</TableCell>
              <TableCell>
                <Badge variant={"outline"}>URl</Badge>
              </TableCell>
              <TableCell className="space-x-1 flex justify-end">
                <Button variant={"outline"}>View</Button>
                <Button variant={"destructive"}> <Trash/>Delete</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default EvidenceTable;
