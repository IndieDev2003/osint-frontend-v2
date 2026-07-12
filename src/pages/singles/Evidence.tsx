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
  FileText,
  Calendar,
  User,
  HardDrive,
  Lock,
  Plus,
  Eye,
  Fingerprint,
  Trash,
} from "lucide-react";

// Dummy log tracking the chain of custody for this specific piece of evidence
const dummyCustodyLog = [
  {
    id: "LOG-01",
    action: "Evidence Secured",
    handler: "Det. Alex Mercer",
    date: "2026-07-01 09:30 AM",
  },
  {
    id: "LOG-02",
    action: "Transferred to Lab",
    handler: "Analyst Sarah Jenkins",
    date: "2026-07-02 02:15 PM",
  },
];

function Evidence() {
  const evidenceId = "EVID-2026-0042";
  const evidenceTitle = "Encrypted Local Database Dump";

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Evidence File - {evidenceId}</CardTitle>
        <CardDescription>
          Chain of custody, source file telemetry, and forensic analysis state
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full space-y-4">
        <div className="w-full flex flex-col md:flex-row gap-4">
          {/* Main Evidence Metadata */}
          <Card className="w-full md:w-2/3">
            <CardHeader className="relative flex flex-row items-start justify-between space-y-0 pb-4">
              <div>
                <CardTitle>{evidenceTitle}</CardTitle>
                <CardDescription>
                  Forensic classifications and baseline source properties
                </CardDescription>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <PenBox className="h-4 w-4" /> Edit Metadata
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card text-card-foreground shadow-sm">
                  <FileText className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Evidence Type
                    </p>
                    <p className="font-semibold">
                      Digital (.SQLITE / Physical Image)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card text-card-foreground shadow-sm">
                  <Fingerprint className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      SHA-256 Hash Verification
                    </p>
                    <p className="font-mono font-semibold text-xs truncate max-w-[180px] sm:max-w-none">
                      8f3c3a92b10f...4e21
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card text-card-foreground shadow-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Date Acquired
                    </p>
                    <p className="font-semibold">July 01, 2026</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card text-card-foreground shadow-sm">
                  <User className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Acquired By
                    </p>
                    <p className="font-semibold">Det. Alex Mercer</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card text-card-foreground shadow-sm sm:col-span-2">
                  <HardDrive className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Current Storage Location
                    </p>
                    <p className="font-semibold">
                      Secure Evidence Locker B, Drive Slot #04 (Air-gapped)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card text-card-foreground shadow-sm sm:col-span-2 bg-emerald-500/10 border-emerald-500/20">
                  <Lock className="h-4 w-4 text-emerald-600 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-emerald-600 uppercase tracking-wider">
                      Integrity Status
                    </p>
                    <p className="font-semibold text-emerald-600">
                      Sealed & Verified (Untampered)
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card text-card-foreground shadow-sm sm:col-span-2 !bg-amber-500/5 border-amber-500">
                  <Lock className="h-4 w-4 text-amber-600 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-amber-600 uppercase tracking-wider">
                      Online Storage
                    </p>
                    <p className="font-semibold text-gray-600">
                      Secured and Stored in S3 Bucket
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sidebar Elements */}
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            {/* Acquisition Notes */}
            <Card className="w-full h-fit border-emerald-500/50">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
                <div>
                  <CardTitle>Acquisition Notes</CardTitle>
                  <CardDescription>Contextual recovery details</CardDescription>
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
                  Extracted during a local host directory analysis connected to
                  Gagan Suman's assigned development container environment. File
                  was hidden deep inside an unindexed hidden config subtree.
                </p>
              </CardContent>
            </Card>

            {/* Linked Entity Cross references */}
            <Card className="w-full">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
                <div>
                  <CardTitle>Cross References</CardTitle>
                  <CardDescription>Connected system profiles</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="gap-1 shrink-0">
                  <Plus className="h-4 w-4" /> Link
                </Button>
              </CardHeader>
              <CardContent className="text-sm space-y-1">
                <p className="font-medium text-muted-foreground">
                  Linked Case:
                </p>
                <p className="text-foreground font-semibold mb-2">
                  CASE-2026-0089
                </p>
                <p className="font-medium text-muted-foreground">
                  Linked Target:
                </p>
                <p className="text-foreground font-semibold">Gagan Suman</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Chain of Custody Table View */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Chain of Custody / Activity Ledger</CardTitle>
              <CardDescription>
                Chronological documentation recording the control, transfer, and
                analysis sequence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableCaption>
                  Audit trail complying with analytical standards
                </TableCaption>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead>Log Id</TableHead>
                    <TableHead>Action Taken</TableHead>
                    <TableHead>Custodian / Handler</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dummyCustodyLog.length > 0 ? (
                    dummyCustodyLog.map((log, index) => (
                      <TableRow key={log.id || index}>
                        <TableCell className="font-mono font-medium">
                          {log.id}
                        </TableCell>
                        <TableCell className="font-semibold">
                          {log.action}
                        </TableCell>
                        <TableCell>{log.handler}</TableCell>
                        <TableCell>{log.date}</TableCell>
                        <TableCell className="text-right space-x-1">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 gap-1"
                          >
                            <Eye className="size-4" /> View
                                </Button>
                                <Button variant={"destructive"}><Trash/>Delete</Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={5}
                        className="h-24 text-center text-muted-foreground"
                      >
                        No custody movements logged yet.
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

export default Evidence;
