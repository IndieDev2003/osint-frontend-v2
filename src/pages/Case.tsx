import CaseDetails from "@/components/Case/CaseDetails";
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
    <Card>
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
              <div>
                  <Button>Add Evidence</Button>
                  <Button>Add Contact</Button>
                  <Button>Add Email</Button>
                  <Button>Add Socials</Button>
                  <Button>Add Relatives</Button>
              </div>
              <CaseDetails/>
          </CardContent>
    </Card>
  );
}

export default Case;
