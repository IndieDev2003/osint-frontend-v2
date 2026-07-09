// import CaseDetails from "@/components/Case/CaseDetails";
import AddEvidence from "@/components/dialogs/AddEvidence";
import AddPerson from "@/components/dialogs/AddPerson";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Case() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Case Details - CASE2324</CardTitle>
        <CardDescription>
          All details regrading the Case Number -{" "}
          <span className="text-black">CASE2324</span>.
        </CardDescription>
        <CardAction className="flex flex-col md:flex-row space-y-1 space-x-0 md:space-y-0 md:space-x-1">
          <Button>Back</Button>
          <Button className="bg-blue-600">Home</Button>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex flex-row space-x-1">
          <AddPerson/>

          <AddEvidence/>
        </div>
        {/* <CaseDetails /> */}
      </CardContent>
    </Card>
  );
}

export default Case;
