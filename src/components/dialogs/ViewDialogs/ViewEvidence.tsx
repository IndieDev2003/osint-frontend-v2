"use client";

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
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EditEvidence from "../EditEvidence";

function ViewEvidence() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl md:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">
            Evidence Ledger
          </DialogTitle>
          <DialogDescription>
            A comprehensive list of collected intelligence and files associated
            with this record.
          </DialogDescription>
        </DialogHeader>

        {/* Evidence Ledger Table */}
        <div className="border rounded-md overflow-hidden mt-2">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-[100px]">Evidence ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Source Network</TableHead>
                <TableHead>Integrity Status</TableHead>
                <TableHead className="text-right pr-4">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono font-medium">#12</TableCell>
                <TableCell>Social</TableCell>
                <TableCell>Instagram</TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                    Verified
                  </span>
                </TableCell>
                <TableCell className="text-right pr-4">
                  <div className="inline-flex items-center gap-2 justify-end">
                    <EditEvidence />
                    <Button variant="destructive" size="sm">
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <DialogFooter className="sm:justify-end pt-2">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close Records
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ViewEvidence;
