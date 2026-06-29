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

function AddPerson() {
  const [avatarName, setAvatarName] = useState<string>("");

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setAvatarName(e.target.files[0].name);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" x2="19" y1="8" y2="14" />
            <line x1="22" x2="16" y1="11" y2="11" />
          </svg>
          Add Person
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add Person of Interest</DialogTitle>
          <DialogDescription>
            Link a new target, victim, or witness to Case number: 123
          </DialogDescription>
        </DialogHeader>

        {/* Form Fields Container */}
        <div className="grid gap-5 py-4">
          {/* 1. Full Name */}
          <div className="grid gap-2">
            <Label htmlFor="person-name">Full Name / Legal Identity</Label>
            <Input id="person-name" placeholder="e.g., Johnathan Doe" />
          </div>

          {/* 2. Role in Case */}
          <div className="grid gap-2">
            <Label htmlFor="person-role">Case Role</Label>
            <Select>
              <SelectTrigger id="person-role" className="w-full">
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="suspect">Primary Suspect</SelectItem>
                <SelectItem value="poi">Person of Interest (POI)</SelectItem>
                <SelectItem value="witness">Witness</SelectItem>
                <SelectItem value="victim">Victim</SelectItem>
                <SelectItem value="informant">
                  Confidential Informant
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* 3. Aliases / Cyber Handles */}
          <div className="grid gap-2">
            <Label htmlFor="person-aliases">
              Known Aliases / Online Handles
            </Label>
            <Input
              id="person-aliases"
              placeholder="e.g., @dark_knight, Alex Mercer, xX_root_Xx"
            />
          </div>

          {/* 4. Contact Information */}
          <div className="grid gap-2">
            <Label htmlFor="person-contact">
              Contact Info (Email / Phone / Matrix)
            </Label>
            <Input
              id="person-contact"
              placeholder="e.g., jdoe@proton.me, +1 (555) 019-2834"
            />
          </div>

          {/* 5. Identification / Photo Upload */}
          <div className="grid gap-2">
            <Label htmlFor="person-avatar">
              Profile Photo / Mugshot / Avatar
            </Label>
            <div className="flex items-center gap-3">
              <label
                htmlFor="person-avatar"
                className="flex h-10 px-4 py-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md text-sm font-medium cursor-pointer border border-input items-center justify-center transition-colors"
              >
                Upload Image
              </label>
              <input
                id="person-avatar"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
              <span className="text-sm text-muted-foreground truncate max-w-[250px]">
                {avatarName || "No file chosen"}
              </span>
            </div>
          </div>

          {/* 6. Background Profile / Notes */}
          <div className="grid gap-2">
            <Label htmlFor="person-bio">Investigative Notes & Background</Label>
            <Textarea
              id="person-bio"
              placeholder="Add physical descriptions, known associations, structural hierarchy position, or tactical notes..."
              className="resize-none min-h-[90px]"
            />
          </div>
        </div>

        {/* Dialog Action Buttons */}
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="ghost" type="button">
            <DialogClose>Cancel</DialogClose>
          </Button>
          <Button type="submit">Add to Case</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddPerson;
