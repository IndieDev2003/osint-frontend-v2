"use client";

import { Card, CardContent} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
   SelectContent,
   SelectItem,
  SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
// import { div } from "../ui/field";

function AddNewForm() {
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
    // Process payload here
  };

  return (
    <Card className="max-w-xl relative w-full">
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
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
            {/* Note: shadcn Select requires a root 'name' attribute to append properly to native FormData */}
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

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Add Case</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default AddNewForm;
