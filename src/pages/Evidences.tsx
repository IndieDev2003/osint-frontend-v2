import EvidenceTable from "@/components/Evidence/EvidenceTable";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusCircle } from "lucide-react";

function Evidences() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Evidences Associated with Cases</CardTitle>
        <CardDescription>
          All the evidence collected during investigation of all cases.
        </CardDescription>
        <CardAction>
          <Button className=" gap-2 md:flex hidden">
            <PlusCircle />
            Add New Evidence
          </Button>
          <Button className="flex gap-2 md:hidden">
            <PlusCircle />
            Add
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <EvidenceTable />
      </CardContent>
    </Card>
  );
}

export default Evidences;
