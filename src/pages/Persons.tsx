import AddNewPerson from "@/components/Person/AddNewPerson";
import PersonTable from "@/components/Person/PersonTable";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
function Persons() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Person List</CardTitle>
        <CardAction>
          <AddNewPerson/>
        </CardAction>
      </CardHeader>
      <CardContent>
        <PersonTable/>
      </CardContent>
      
    </Card>
  );
}

export default Persons;
