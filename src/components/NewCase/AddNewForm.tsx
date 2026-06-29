"use client";

import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function AddNewCase() {
  // State to handle programmatic modal closing on submit
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Read form values cleanly using standard FormData API
    const formData = new FormData(e.currentTarget);
    const payload = {
      caseId: formData.get("caseId"),
      personName: formData.get("personName"),
      caseType: formData.get("caseType"),
      status: formData.get("status"),
    };

    console.log("Submitted Data:", payload);
    // Process payload here (e.g., dispatching API calls or state mutations)

    // Close the dialog modal programmatically
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add New Case</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold tracking-tight">
            Create New Case File
          </DialogTitle>
          <DialogDescription>
            Initialize a secure intelligence envelope. Ensure target entities
            and tracking parameters match file requirements.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 py-2">
          {/* Case ID */}
          <div className="space-y-2">
            <Label htmlFor="caseId">Case ID / Reference No.</Label>
            <Input
              id="caseId"
              name="caseId"
              placeholder="e.g., CASE-006"
              required
            />
          </div>

          {/* Target Name */}
          <div className="space-y-2">
            <Label htmlFor="personName">Target / Person Name</Label>
            <Input
              id="personName"
              name="personName"
              placeholder="Full name or digital alias"
              required
            />
          </div>

          {/* Case Type Dropdown */}
          <div className="space-y-2">
            <Label htmlFor="caseType">Investigation Type</Label>
            <Select
              name="caseType"
              defaultValue="Social Engineering / Phishing Trace"
            >
              <SelectTrigger id="caseType">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Social Engineering / Phishing Trace">
                  Social Engineering / Phishing Trace
                </SelectItem>
                <SelectItem value="Crypto Asset Tracking">
                  Crypto Asset Tracking
                </SelectItem>
                <SelectItem value="Corporate Espionage / Leak Leakage">
                  Corporate Espionage / Leak Leakage
                </SelectItem>
                <SelectItem value="Geolocation & Timeline Analysis">
                  Geolocation & Timeline Analysis
                </SelectItem>
                <SelectItem value="Background Check / Due Diligence">
                  Background Check / Due Diligence
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Status Dropdown */}
          <div className="space-y-2">
            <Label htmlFor="status">Initial Status</Label>
            <Select name="status" defaultValue="In Progress">
              <SelectTrigger id="status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Under Review">Under Review</SelectItem>
                <SelectItem value="Pending Input">Pending Input</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Dialog Actions Footer */}
          <DialogFooter className="pt-4 border-t gap-2 sm:gap-0">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Add Case</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddNewCase;
