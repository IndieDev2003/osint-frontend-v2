import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  PenBox,
  Briefcase,
  Calendar,
  Clock,
  ShieldAlert,
  UserCheck,
  Plus,
  Eye,
  FileText,
  Trash,
} from "lucide-react";

// Dummy linked targets/persons for this case
const dummyTargets = [
  {
    id: "TRG-882",
    name: "Gagan Suman",
    role: "Primary Suspect",
    addedAt: "2026-07-01",
  },
  { id: "TRG-104", name: "Jane Doe", role: "Witness", addedAt: "2026-07-05" },
];

function Case() {
  const caseId = "CASE-2026-0089";
  const caseTitle = "Operation Midnight Shadow";

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Case File - {caseId}</CardTitle>
        <CardDescription>
          Overview and core parameters for ongoing operational intelligence
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full space-y-4">
        <div className="w-full flex flex-col md:flex-row gap-4">
          {/* Main Case Parameters */}
          <Card className="w-full md:w-2/3">
            <CardHeader className="relative flex flex-row items-start justify-between space-y-0 pb-4">
              <div>
                <CardTitle>{caseTitle}</CardTitle>
                <CardDescription>
                  Core situational breakdown and classifications
                </CardDescription>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <PenBox className="h-4 w-4" /> Edit Details
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card text-card-foreground shadow-sm">
                  <Briefcase className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Classification Type
                    </p>
                    <p className="font-semibold">Corporate Espionage</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card text-card-foreground shadow-sm">
                  <UserCheck className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Lead Investigator
                    </p>
                    <p className="font-semibold">Det. Alex Mercer</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card text-card-foreground shadow-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Date Initiated
                    </p>
                    <p className="font-semibold">June 18, 2026</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card text-card-foreground shadow-sm">
                  <Clock className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Last Updated
                    </p>
                    <p className="font-semibold">July 09, 2026</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card text-card-foreground shadow-sm sm:col-span-2">
                  <FileText className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Primary Objective
                    </p>
                    <p className="font-semibold">
                      Trace unauthorized ledger data exports stemming from
                      internal sandbox clusters.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card text-card-foreground shadow-sm sm:col-span-2 bg-amber-500/5 border-amber-500/20">
                  <ShieldAlert className="h-4 w-4 text-amber-600 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-amber-600 uppercase tracking-wider">
                      Priority Assessment
                    </p>
                    <p className="font-semibold text-amber-600">
                      Tier 2 - High Priority
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sidebar Elements */}
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            {/* Context/Summary Notes */}
            <Card className="w-full h-fit border-indigo-500/50">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
                <div>
                  <CardTitle>Executive Summary</CardTitle>
                  <CardDescription>Contextual overview notes</CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0 shrink-0"
                >
                  <PenBox className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Investigation started following security cross-logs flag.
                  Digital footprints point to multiple secure file access
                  anomalies occurring outside core working parameters.
                </p>
              </CardContent>
            </Card>

            {/* Sub-agencies or cross-references */}
            <Card className="w-full">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
                <div>
                  <CardTitle>Linked Agencies</CardTitle>
                  <CardDescription>Collaborating units</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="gap-1 shrink-0">
                  <Plus className="h-4 w-4" /> Add
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic">
                  No external units attached.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Dynamic Targets/Persons Grid Table */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Persons of Interest Connected to Case</CardTitle>
              <CardDescription>
                Individuals matching tracking configurations or direct
                investigative paths
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableCaption>
                  Current linked targets matching security parameters
                </TableCaption>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead>Target Id</TableHead>
                    <TableHead>Full Name</TableHead>
                    <TableHead>Investigative Role</TableHead>
                    <TableHead>Linked Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dummyTargets.length > 0 ? (
                    dummyTargets.map((person, index) => (
                      <TableRow key={person.id || index}>
                        <TableCell className="font-mono font-medium">
                          {person.id}
                        </TableCell>
                        <TableCell className="font-semibold">
                          {person.name}
                        </TableCell>
                        <TableCell>{person.role}</TableCell>
                        <TableCell>{person.addedAt}</TableCell>
                        <TableCell className="text-right space-x-1">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 gap-1"
                          >
                            <Eye className="h-3.5 w-3.5" /> View
                          </Button>
                          <Button variant={'destructive'}><Trash/>Delete</Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={5}
                        className="h-24 text-center text-muted-foreground"
                      >
                        No targets mapped to this operation folder.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}

export default Case;
