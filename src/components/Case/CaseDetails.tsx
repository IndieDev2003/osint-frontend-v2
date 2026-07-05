import type { Evidence, Person } from "@/lib/cases";
import EditEvidence from "../dialogs/EditEvidence";
import EditPerson from "../dialogs/EditPerson";
import ViewEvidence from "../dialogs/ViewDialogs/ViewEvidence";
import ViewPerson from "../dialogs/ViewDialogs/ViewPerson";
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

function CaseDetails({Persons ,Evidences}:{Persons :Person[],Evidences:Evidence[]}) {
  return (
    <Card>
      <CardContent>
        <Table>
          <TableCaption>
            List of all the Persons in Case Number: {"213"}
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Person Id</TableHead>
              <TableHead>Person Name</TableHead>
              <TableHead>Person Relation</TableHead>
              <TableHead>Person Location</TableHead>
              <TableHead>Person Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Persons.map((person) => (
              <TableRow>
                <TableCell>{person.id }</TableCell>
                <TableCell>{person.name}</TableCell>
                <TableCell>Himself</TableCell>

                <TableCell>{person.email}</TableCell>
                <TableCell>{ person.email}</TableCell>
                <TableCell className="flex flex-row items-end space-x-1 justify-end">
                  <ViewPerson />
                  <EditPerson />
                  <Button variant={"destructive"}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table>
          <TableCaption>
            All the evidences belonging to Case number: {"123"}
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Evidence Id</TableHead>
              <TableHead>Evidence Type</TableHead>
              <TableHead>Evidence Source</TableHead>
              <TableHead>Evidence Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>12</TableCell>
              <TableCell>Social</TableCell>
              <TableCell>Instagram</TableCell>
              <TableCell>Good</TableCell>
              <TableCell className="flex items-end justify-end flex-row space-x-1">
                <ViewEvidence />
                <EditEvidence />
                <Button variant={"destructive"}>Delete</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default CaseDetails;
