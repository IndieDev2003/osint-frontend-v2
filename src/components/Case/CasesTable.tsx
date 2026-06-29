"use client";

import { cases } from "@/lib/cases";
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
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function CasesTable() {
  return (
    <Card className="w-full shadow-sm">
      {/* Added clear operational context in the card header */}
      <CardHeader className="border-b bg-muted/10 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <CardTitle className="text-xl font-bold tracking-tight text-foreground">
              Active Intelligence Folders
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground mt-1">
              Live index of active, pending, and completed OSINT investigations
              compiled under operational clearance.
            </CardDescription>
          </div>
          <div className="text-xs font-mono text-muted-foreground bg-muted/60 border rounded px-2.5 py-1 self-start sm:self-center">
            Total Records: {cases?.length || 0}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-6">
        <div className="border rounded-md overflow-hidden bg-background">
          <Table>
            <TableCaption className="my-4 text-xs text-muted-foreground">
              Secured Matrix — A comprehensive list of all active digital
              profiling and asset tracking investigations assigned to Gagan.
            </TableCaption>
            <TableHeader className="bg-muted/50 border-b select-none">
              <TableRow>
                <TableHead className="w-[120px] text-xs font-semibold uppercase tracking-wider">
                  Case ID
                </TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wider">
                  Target Identity / Alias
                </TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wider">
                  Investigation Methodology
                </TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wider">
                  Evidence Vault
                </TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wider">
                  Operational Status
                </TableHead>
                <TableHead className="text-right pr-6 text-xs font-semibold uppercase tracking-wider">
                  System Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cases && cases.length > 0 ? (
                cases.map((item) => (
                  <TableRow
                    key={item.id}
                    className="hover:bg-muted/30 transition-colors border-b last:border-0"
                  >
                    <TableCell className="font-mono font-medium text-sm text-muted-foreground">
                      {item.id || "N/A"}
                    </TableCell>
                    <TableCell className="font-semibold text-sm text-foreground">
                      {item.name || "Unknown Identity"}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground max-w-[220px] truncate">
                      {item.type || "Unclassified Type"}
                    </TableCell>
                    <TableCell>
                      <span className="font-mono text-xs bg-muted/60 px-2 py-0.5 rounded text-muted-foreground border shadow-sm">
                        {item.evidence || 0} artifacts
                      </span>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                          item.status === "Completed"
                            ? "bg-green-50 text-green-700 border-green-200 dark:bg-green-950/30 dark:text-green-400 dark:border-green-900"
                            : item.status === "In Progress"
                              ? "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-900"
                              : item.status === "Under Review"
                                ? "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-900"
                                : "bg-zinc-50 text-zinc-700 border-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full mr-1.5 ${
                            item.status === "Completed"
                              ? "bg-green-500"
                              : item.status === "In Progress"
                                ? "bg-blue-500"
                                : item.status === "Under Review"
                                  ? "bg-amber-500"
                                  : "bg-zinc-400"
                          }`}
                        />
                        {item.status || "Unknown"}
                      </span>
                    </TableCell>
                    <TableCell className="text-right pr-6">
                      <Button
                        asChild
                        variant="outline"
                        // size="sm"
                        // className="h-8 text-xs font-medium hover:bg-muted"
                      >
                        <Link to={`/cases/${item.id}`}>View Case</Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                /* Empty state logic to prevent plain table layouts if data fails to mount */
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center py-10 text-sm text-muted-foreground"
                  >
                    No active intelligence cases discovered in local data
                    repository. Create a file to begin mapping target telemetry.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

export default CasesTable;
