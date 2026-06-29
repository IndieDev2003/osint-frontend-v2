"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"; // Imported Textarea
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function AddNewCase() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    suspectName: "",
    investigationType: "Social Engineering / Phishing Trace",
    priority: "Medium",
    initialLead: "",
    specialNotes: "", // New state field
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating New OSINT Case File:", formData);

    // Reset form & close dialog modal
    setFormData({
      suspectName: "",
      investigationType: "Social Engineering / Phishing Trace",
      priority: "Medium",
      initialLead: "",
      specialNotes: "",
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add New Case</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle>Add New Case</DialogTitle>
          <DialogDescription>
            Initialize a new intelligence file. Ensure target parameters match
            field requirements.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          {/* Main Suspect Name */}
          <div className="space-y-2">
            <Label htmlFor="suspectName">Main Suspect / Target Name</Label>
            <Input
              id="suspectName"
              placeholder="Legal name, online alias, or handle"
              required
              value={formData.suspectName}
              onChange={(e) =>
                setFormData({ ...formData, suspectName: e.target.value })
              }
            />
          </div>

          {/* Investigation Type Select */}
          <div className="space-y-2">
            <Label htmlFor="investigationType">Investigation Type</Label>
            <Select
              value={formData.investigationType}
              onValueChange={(val) =>
                setFormData({ ...formData, investigationType: val })
              }
            >
              <SelectTrigger id="investigationType">
                <SelectValue />
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

          {/* Priority Tier */}
          <div className="space-y-2">
            <Label htmlFor="priority">Operational Priority</Label>
            <Select
              value={formData.priority}
              onValueChange={(val) =>
                setFormData({ ...formData, priority: val })
              }
            >
              <SelectTrigger id="priority">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Low">Low (Routine Check)</SelectItem>
                <SelectItem value="Medium">Medium (Active Threat)</SelectItem>
                <SelectItem value="High">High (Immediate Response)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Initial Lead Context */}
          <div className="space-y-2">
            <Label htmlFor="initialLead">Initial Lead / Intel Source</Label>
            <Input
              id="initialLead"
              placeholder="e.g., BreachForum leak, Telegram chat hash"
              value={formData.initialLead}
              onChange={(e) =>
                setFormData({ ...formData, initialLead: e.target.value })
              }
            />
          </div>

          {/* New Field: Special Notes */}
          <div className="space-y-2">
            <Label htmlFor="specialNotes">
              Special Notes / Initial Intelligence
            </Label>
            <Textarea
              id="specialNotes"
              placeholder="Paste relevant IOCs, initial IP logs, target infrastructure details, or operational constraints..."
              rows={3}
              value={formData.specialNotes}
              onChange={(e) =>
                setFormData({ ...formData, specialNotes: e.target.value })
              }
              className="resize-none"
            />
          </div>

          {/* Action Footer Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Initialize Case</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddNewCase;
