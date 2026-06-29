import { useState } from "react";
import {
  Dialog,
  DialogClose,
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

function AddEvidence() {
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* Styled button to represent creating a new item */}
        <Button className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          Add Evidence
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Evidence</DialogTitle>
          <DialogDescription>
            Log a new piece of evidence for Case number: 123
          </DialogDescription>
        </DialogHeader>

        {/* Form Fields Container */}
        <div className="grid gap-5 py-4">
          {/* 1. Evidence Name */}
          <div className="grid gap-2">
            <Label htmlFor="new-evidence-name">Evidence Name</Label>
            <Input
              id="new-evidence-name"
              placeholder="e.g., Threat Actor Tweet"
            />
          </div>

          {/* 2. Evidence Type */}
          <div className="grid gap-2">
            <Label htmlFor="new-evidence-type">Evidence Type</Label>
            <Select>
              <SelectTrigger id="new-evidence-type" className="w-full">
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

          {/* 3. Associated Person */}
          <div className="grid gap-2">
            <Label htmlFor="new-associated-person">
              Associated Person / Target
            </Label>
            <Select>
              <SelectTrigger id="new-associated-person" className="w-full">
                <SelectValue placeholder="Link to a person (Optional)" />
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
            <Label htmlFor="new-evidence-url">Source URL / Link</Label>
            <Input
              id="new-evidence-url"
              type="url"
              placeholder="https://example.com/evidence-source"
            />
          </div>

          {/* 5. File / Image Upload */}
          <div className="grid gap-2">
            <Label htmlFor="new-evidence-file">
              Upload File / Image Screenshot
            </Label>
            <div className="flex items-center gap-3">
              <label
                htmlFor="new-evidence-file"
                className="flex h-10 px-4 py-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md text-sm font-medium cursor-pointer border border-input items-center justify-center transition-colors"
              >
                Choose File
              </label>
              <input
                id="new-evidence-file"
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
            <Label htmlFor="new-evidence-notes">Notes & Analysis</Label>
            <Textarea
              id="new-evidence-notes"
              placeholder="Add context, findings, or details about this evidence..."
              className="resize-none min-h-[80px]"
            />
          </div>
        </div>

        {/* Dialog Action Buttons */}
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="ghost" type="button">
            <DialogClose>Cancel</DialogClose>
          </Button>
          <Button type="submit">Create Evidence</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddEvidence;
