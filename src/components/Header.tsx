import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

function Header() {
  return (
    <Card className="py-2 ">
      <CardContent className="flex h-fit justify-between px-2 py-0">
        <Button className="" variant={"outline"}>
          OSINT Database
        </Button>

        <div className="hidden md:block">
          <Button>Home</Button>
          <Button>Evidences</Button>
          <Button>Persons</Button>
          <Button>Cases</Button>
          <Button>Add New Case</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Header;
