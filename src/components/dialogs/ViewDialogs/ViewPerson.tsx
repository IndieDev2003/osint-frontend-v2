import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import EditEvidence from "../EditEvidence";
import { Card, CardContent } from "@/components/ui/card";

function ViewPerson() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>View</Button>
      </DialogTrigger>
      <DialogContent className="min-w-200">
        <DialogHeader>
          <DialogTitle>Person Id:</DialogTitle>
          <DialogTitle>Case Number : 213</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div>
          <Card>
            <CardContent>
              <h2>Person Name: {"Gagan Suman"}</h2>
              <h2>Address: {"Punjab"}</h2>
              <h3>
                Contact Details: {1234567890},{"email@email.com"}
              </h3>
            </CardContent>
          </Card>
        </div>
        {/* Evidence by Person Table */}
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
                <EditEvidence />
                <Button variant={"destructive"}>Delete</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <DialogFooter>
          <Button>
            <DialogClose>Close</DialogClose>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ViewPerson;
