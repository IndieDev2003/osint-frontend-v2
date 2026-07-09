import { Trash } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

function PersonTable() {
  return (
    <Card>
      <CardContent>
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead>Person Id</TableHead>
              <TableHead> Name</TableHead>
              <TableHead> Cases</TableHead>
              <TableHead> Relatives</TableHead>
              <TableHead> Evidences</TableHead>
              <TableHead className="text-right"> Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Person-001</TableCell>
              <TableCell>Gagan Suman</TableCell>
              <TableCell>5 Cases</TableCell>
              <TableCell>5 Relatives</TableCell>
              <TableCell>5 Evidences</TableCell>
              <TableCell className="flex space-x-1 justify-end items-center">
                <Button variant={"outline"}>View</Button>
                <Button variant={"destructive"}>
                  <Trash />
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default PersonTable;
