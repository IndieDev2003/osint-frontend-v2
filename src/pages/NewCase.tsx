import AddNewForm from "@/components/NewCase/AddNewForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function NewCase() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Add New OSINT Investigation</CardTitle>
        <CardAction className="flex flex-col md:flex-row space-y-1 space-x-0 md:space-y-0 md:space-x-1">
          <Button>Save</Button>
          <Button variant={"destructive"}>Cancel</Button>
        </CardAction>
      </CardHeader>
      <CardContent className="">
        <AddNewForm />
      </CardContent>
    </Card>
  );
}

export default NewCase;
