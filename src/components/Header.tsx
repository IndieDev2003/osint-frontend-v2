import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

function Header() {
  return (
    <Card className="py-2 ">
      <CardContent className="flex h-fit justify-between px-2 py-0">
        <NavLink to={"/"} className="">
          <Button variant={"outline"}>OSINT Database</Button>
        </NavLink>

        <div className="hidden md:block">
          <NavLink to={"/"}>
            <Button>Home</Button>
          </NavLink>
          <NavLink to={"/evidences"}>
            <Button>Evidences</Button>
          </NavLink>
          <NavLink to={"/persons"}>
            <Button>Persons</Button>
          </NavLink>
          <NavLink to={"/cases"}>
            <Button>Cases</Button>
          </NavLink>
        </div>
      </CardContent>
    </Card>
  );
}

export default Header;
