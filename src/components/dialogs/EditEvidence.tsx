import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function EditEvidence() {
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Evidence</DialogTitle>
          <DialogDescription>
            Modify the details of the evidence for Case number: 123
          </DialogDescription>
        </DialogHeader>

        {/* Form Fields Container */}
        <div className="grid gap-5 py-4">
          {/* 1. Evidence Name */}
          <div className="grid gap-2">
            <Label htmlFor="evidence-name">Evidence Name</Label>
            <Input id="evidence-name" placeholder="e.g., Threat Actor Tweet" />
          </div>

          {/* 2. Evidence Type */}
          <div className="grid gap-2">
            <Label htmlFor="evidence-type">Evidence Type</Label>
            <Select defaultValue="google-dorks">
              <SelectTrigger id="evidence-type" className="w-full">
                <SelectValue placeholder="Select Evidence Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="google-dorks">Google Dorks</SelectItem>
                <SelectItem value="social-media">Social Media</SelectItem>
                <SelectItem value="network-log">Network Log</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* 3. Associated Person (NEW FIELD) */}
          <div className="grid gap-2">
            <Label htmlFor="associated-person">
              Associated Person / Target
            </Label>
            <Select defaultValue="unassigned">
              <SelectTrigger id="associated-person" className="w-full">
                <SelectValue placeholder="Link to a person..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="unassigned">
                  General Case Evidence (No Person)
                </SelectItem>
                <SelectItem value="john-doe">
                  John Doe (Primary Suspect)
                </SelectItem>
                <SelectItem value="jane-smith">
                  Jane Smith (Person of Interest)
                </SelectItem>
                <SelectItem value="victim-alpha">Victim Alpha</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* 4. Source URL */}
          <div className="grid gap-2">
            <Label htmlFor="evidence-url">Source URL / Link</Label>
            <Input
              id="evidence-url"
              type="url"
              placeholder="https://example.com/evidence-source"
            />
          </div>

          {/* 5. File / Image Upload */}
          <div className="grid gap-2">
            <Label htmlFor="evidence-file">
              Upload File / Image Screenshot
            </Label>
            <div className="flex items-center gap-3">
              <label
                htmlFor="evidence-file"
                className="flex h-10 px-4 py-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md text-sm font-medium cursor-pointer border border-input items-center justify-center transition-colors"
              >
                Choose File
              </label>
              <input
                id="evidence-file"
                type="file"
                accept="image/*,.pdf,.txt,.json"
                className="hidden"
                onChange={handleFileChange}
              />
              <span className="text-sm text-muted-foreground truncate max-w-[250px]">
                {fileName || "No file chosen"}
              </span>
            </div>
          </div>

          {/* 6. Notes / Description */}
          <div className="grid gap-2">
            <Label htmlFor="evidence-notes">Notes & Analysis</Label>
            <Textarea
              id="evidence-notes"
              placeholder="Add context, findings, or details about this evidence..."
              className="resize-none min-h-[80px]"
            />
          </div>
        </div>

        {/* Dialog Action Buttons */}
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="ghost" type="button">
            Cancel
          </Button>
          <Button type="submit">Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditEvidence;
