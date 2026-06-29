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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import EditEvidence from "../EditEvidence";

function ViewPerson() {
  // 1. Manage edit/view toggle inside modal
  const [isEditing, setIsEditing] = useState(false);

  // 2. Mutable personal records state
  const [personData, setPersonData] = useState({
    name: "Gagan Suman",
    id: "PERS-123",
    location: "Punjab",
    phone: "+91 1234567890",
    email: "email@email.com",
    caseNo: "213",
  });

  const handleSaveProfile = () => {
    setIsEditing(false);
    console.log("Committed Profile State updates:", personData);
    // Execute API patch handler or dispatch action context here
  };

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) setIsEditing(false);
      }}
    >
      <DialogTrigger asChild>
        <Button variant="outline">View </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl md:max-w-3xl">
        <DialogHeader>
          <div className="flex flex-row items-center justify-between pr-6">
            <DialogTitle className="text-xl font-bold tracking-tight">
              Person Profile & Evidence Ledger
            </DialogTitle>
            <span className="text-xs bg-muted px-2 py-1 rounded font-mono text-muted-foreground">
              Case No: {personData.caseNo}
            </span>
          </div>
          <DialogDescription>
            Review and modify target identification records alongside linked
            investigative intelligence.
          </DialogDescription>
        </DialogHeader>

        {/* Dynamic Card Segment: Edit Mode vs View Mode */}
        <Card className="bg-muted/30 relative overflow-hidden transition-all duration-200">
          <div className="absolute top-4 right-4 z-10">
            {isEditing ? (
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
                <Button size="sm" onClick={handleSaveProfile}>
                  Save Profile
                </Button>
              </div>
            ) : (
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </Button>
            )}
          </div>

          <CardContent className="pt-6">
            {isEditing ? (
              /* ================= EDIT MODE FIELD ARRAYS ================= */
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pr-24">
                <div className="space-y-1.5">
                  <Label htmlFor="person-name-input">Target Identity</Label>
                  <Input
                    id="person-name-input"
                    size={32}
                    className="h-8 text-sm"
                    value={personData.name}
                    onChange={(e) =>
                      setPersonData({ ...personData, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="person-loc-input">Primary Jurisdiction</Label>
                  <Input
                    id="person-loc-input"
                    className="h-8 text-sm"
                    value={personData.location}
                    onChange={(e) =>
                      setPersonData({ ...personData, location: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-1.5 col-span-1 md:col-span-1">
                  <Label>Contact Strings</Label>
                  <div className="space-y-1">
                    <Input
                      placeholder="Phone"
                      className="h-7 text-xs"
                      value={personData.phone}
                      onChange={(e) =>
                        setPersonData({ ...personData, phone: e.target.value })
                      }
                    />
                    <Input
                      placeholder="Email"
                      className="h-7 text-xs"
                      value={personData.email}
                      onChange={(e) =>
                        setPersonData({ ...personData, email: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* ================= VIEW MODE LAYOUT ================= */
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pr-24">
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-0.5">
                    Target Identity
                  </span>
                  <p className="text-sm font-medium text-foreground">
                    {personData.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    ID: {personData.id}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-0.5">
                    Primary Jurisdiction
                  </span>
                  <p className="text-sm font-medium text-foreground">
                    {personData.location}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-0.5">
                    Contact Parameters
                  </span>
                  <div className="text-sm font-medium text-foreground space-y-0.5">
                    <p>{personData.phone}</p>
                    <p className="text-xs text-blue-600 font-mono">
                      {personData.email}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Evidence Ledger Subtable remains independent */}
        <div className="border rounded-md overflow-hidden">
          <Table>
            <TableCaption className="pb-3">
              All compiled digital evidence items belonging to Case File #
              {personData.caseNo}
            </TableCaption>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-[120px]">Evidence ID</TableHead>
                <TableHead>Evidence Type</TableHead>
                <TableHead>Evidence Source</TableHead>
                <TableHead>Evidence Status</TableHead>
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
                    Good
                  </span>
                </TableCell>
                <TableCell className="text-right pr-4">
                  <div className="inline-flex items-center gap-2">
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

        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close Profile
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ViewPerson;
