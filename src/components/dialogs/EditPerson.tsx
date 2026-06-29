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

function EditPerson() {
  // Simulating an already uploaded photo name for an existing record
  const [avatarName, setAvatarName] = useState<string>(
    "john_doe_mugshot_v2.png",
  );

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setAvatarName(e.target.files[0].name);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* Row-level action link or inline utility button */}
        <Button
          variant="ghost"
          size="sm"
          className="text-sm font-medium hover:underline"
        >
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Person Profile</DialogTitle>
          <DialogDescription>
            Update intelligence records for this individual on Case number: 123
          </DialogDescription>
        </DialogHeader>

        {/* Form Fields Container */}
        <div className="grid gap-5 py-4">
          {/* 1. Full Name */}
          <div className="grid gap-2">
            <Label htmlFor="edit-person-name">Full Name / Legal Identity</Label>
            <Input
              id="edit-person-name"
              defaultValue="Johnathan Doe"
              placeholder="e.g., Johnathan Doe"
            />
          </div>

          {/* 2. Role in Case */}
          <div className="grid gap-2">
            <Label htmlFor="edit-person-role">Case Role</Label>
            <Select defaultValue="suspect">
              <SelectTrigger id="edit-person-role" className="w-full">
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
            <Label htmlFor="edit-person-aliases">
              Known Aliases / Online Handles
            </Label>
            <Input
              id="edit-person-aliases"
              defaultValue="@dark_knight, Alex Mercer, xX_root_Xx"
              placeholder="e.g., @dark_knight, Alex Mercer"
            />
          </div>

          {/* 4. Contact Information */}
          <div className="grid gap-2">
            <Label htmlFor="edit-person-contact">
              Contact Info (Email / Phone / Matrix)
            </Label>
            <Input
              id="edit-person-contact"
              defaultValue="jdoe@proton.me"
              placeholder="e.g., jdoe@proton.me"
            />
          </div>

          {/* 5. Identification / Photo Upload */}
          <div className="grid gap-2">
            <Label htmlFor="edit-person-avatar">
              Profile Photo / Mugshot / Avatar
            </Label>
            <div className="flex items-center gap-3">
              <label
                htmlFor="edit-person-avatar"
                className="flex h-10 px-4 py-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md text-sm font-medium cursor-pointer border border-input items-center justify-center transition-colors"
              >
                Replace Photo
              </label>
              <input
                id="edit-person-avatar"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
              <span className="text-sm text-muted-foreground truncate max-w-[250px]">
                {avatarName}
              </span>
            </div>
          </div>

          {/* 6. Background Profile / Notes */}
          <div className="grid gap-2">
            <Label htmlFor="edit-person-bio">
              Investigative Notes & Background
            </Label>
            <Textarea
              id="edit-person-bio"
              defaultValue="Subject frequently operates on secure forums during late hours. Linked via matching cryptographic keys found in evidence items 04 and 09. Known associate of Jane Smith."
              placeholder="Add physical descriptions, known associations..."
              className="resize-none min-h-[90px]"
            />
          </div>
        </div>

        {/* Dialog Action Buttons */}
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="ghost" type="button">
            <DialogClose>Cancel</DialogClose>
          </Button>
          <Button type="submit">Save Updates</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditPerson;
