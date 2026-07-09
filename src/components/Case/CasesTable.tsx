import { cases } from "@/lib/cases";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trash } from "lucide-react";

function CasesTable() {
  return (
    <Card className="w-full shadow-sm">
      {/* Added clear operational context in the card header */}
      <CardHeader className="border-b bg-muted/10 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <CardTitle className="text-xl font-bold tracking-tight text-foreground">
              Active Intelligence Folders
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground mt-1">
              Live index of active, pending, and completed OSINT investigations
              compiled under operational clearance.
            </CardDescription>
          </div>
          <div className="text-xs font-mono text-muted-foreground bg-muted/60 border rounded px-2.5 py-1 self-start sm:self-center">
            Total Records: {cases?.length || 0}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-6">
        <Table>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead>Case Id</TableHead>
              <TableHead>Target Person</TableHead>
              <TableHead>Case Lead</TableHead>
              <TableHead>Case Type</TableHead>
              <TableHead>Case Priority</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Case-112</TableCell>
              <TableCell>Gagan</TableCell>
              <TableCell>Social Media</TableCell>
              <TableCell>Social Engineering</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell className="flex justify-end items-center space-x-1">
                <Button variant={"outline"}>View</Button>
                <Button variant={"destructive"}><Trash/>Delete</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default CasesTable;
