import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

function AddNewPerson() {
  const [open, setOpen] = useState(false);
  // const [formData, setFormData] = useState({
  //   personName: "",
  //   connectedCase: "",
  //   connectedRelatives: 0,
  //   connectedEvidences: 0,
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value, type } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: type === "number" ? parseInt(value) || 0 : value,
  //   }));
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle your form submission logic here (e.g., API call)
  //   console.log("Submitted Person Data:", formData);

  //   // Reset form and close dialog
  //   setOpen(false);
  // };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add New Person</Button>
      </DialogTrigger>

      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Add New Person</DialogTitle>
          <DialogDescription>
            Add new Person with/without assigning any case.
          </DialogDescription>
        </DialogHeader>
        <div>
          <form className="space-y-2">
            <div className="space-y-1">
              <Label>Name</Label>
              <Input placeholder="Jane Doe" type="text" />
            </div>
            <div className="flex  space-x-1">
              <div className="space-y-1">
                <Label>Phone</Label>
                <Input placeholder="1234567890" type="number" />
              </div>
              <div className="space-y-1">
                <Label>Email</Label>
                <Input placeholder="mail@example.com" type="text" />
              </div>
            </div>
            <div className="space-y-1">
              <Label>Address - Residential</Label>
              <Textarea className="max-h-12"/>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AddNewPerson;
