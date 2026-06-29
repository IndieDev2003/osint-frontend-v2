import CasesTable from "@/components/Case/CasesTable";
import { Card, CardContent } from "@/components/ui/card";

function Cases() {
  return (
    <Card>
      <CardContent>
        <CasesTable />
      </CardContent>
    </Card>
  );
}

export default Cases;
