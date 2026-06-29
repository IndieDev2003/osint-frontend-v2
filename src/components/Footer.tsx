import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

function Footer() {
  return (
    <Card className="py-2">
      <CardContent className="px-2 flex flex-row justify-between">
        <Button variant={"outline"}>OSINT Database</Button>
        <div>
          <Button>Github</Button>
          <Button>Repository </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Footer