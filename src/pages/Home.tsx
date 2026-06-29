import CaseTables from "@/components/Home/CaseTables";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Home() {
  return (
    <Card className="">
      <CardHeader className="w-full">
        <CardTitle>OSINT Project</CardTitle>
        <CardDescription>
          A OSINT Investigation Database devloped for storing Information
        </CardDescription>
        <CardAction className="flex flex-col space-x-0 space-y-1 md:space-y-0 md:space-x-1 md:flex-row">
          <Button>Add New Case</Button>
          <Button variant={"secondary"}>See All Cases</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <CaseTables />
      </CardContent>
    </Card>
  );
}

export default Home;
