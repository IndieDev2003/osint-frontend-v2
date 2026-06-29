import EditEvidence from "../dialogs/EditEvidence";
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

function CaseDetails() {
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
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Gagan Suman</TableCell>
              <TableCell>Himself</TableCell>
              
              <TableCell>Punjab</TableCell>
              <TableCell>Active</TableCell>
              <TableCell className="flex flex-row items-end justify-end">
                <Button variant={'outline'}>Edit</Button>
                <Button variant={'destructive'}>Delete</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table>
          <TableCaption>All the evidences belonging to Case number: { '123'}</TableCaption>
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
              <TableCell className="flex items-end justify-end flex-row">
               <EditEvidence/>
                <Button variant={'destructive'}>Delete</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default CaseDetails;
