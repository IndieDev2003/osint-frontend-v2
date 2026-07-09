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
  Mail,
  Phone,
  MapPin,
  User,
  Calendar,
  ShieldAlert,
  Plus,
  Eye,
  Trash,
} from "lucide-react";

// Expanded dummy evidence template structure for rendering
const dummyEvidence = [
  {
    id: "EVID-001",
    type: "Digital Document",
    source: "Hard Drive Dump",
    createdAt: "2026-07-01",
  },
  {
    id: "EVID-002",
    type: "Call Log",
    source: "Mobile Provider",
    createdAt: "2026-07-04",
  },
];

function Person() {
  const personName = "Gagan Suman";

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Person - {personName}</CardTitle>
        <CardDescription>
          All the information gathered during investigation for {personName}
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full space-y-4">
        <div className="w-full flex flex-col md:flex-row gap-4">
          {/* Person Information */}
          <Card className="w-full md:w-2/3">
            <CardHeader className="relative flex flex-row items-start justify-between space-y-0 pb-4">
              <div>
                <CardTitle>General Information</CardTitle>
                <CardDescription>
                  General information gathered during investigation regarding{" "}
                  {personName}
                </CardDescription>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <PenBox className="h-4 w-4" /> Edit
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card text-card-foreground shadow-sm">
                  <User className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Full Name
                    </p>
                    <p className="font-semibold">{personName}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card text-card-foreground shadow-sm">
                  <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Email Address
                    </p>
                    <p className="font-semibold">mail@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card text-card-foreground shadow-sm">
                  <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Phone Number
                    </p>
                    <p className="font-semibold">+1 (555) 234-5678</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card text-card-foreground shadow-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Date of Birth
                    </p>
                    <p className="font-semibold">October 14, 1992</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card text-card-foreground shadow-sm sm:col-span-2">
                  <MapPin className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Primary Address
                    </p>
                    <p className="font-semibold">
                      123 Investigation Lane, Suite 404, Metro City, MC 90210
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg border bg-card text-card-foreground shadow-sm sm:col-span-2 bg-destructive/5 border-destructive/20">
                  <ShieldAlert className="h-4 w-4 text-destructive shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-destructive uppercase tracking-wider">
                      Case Status
                    </p>
                    <p className="font-semibold text-destructive">
                      Active Investigation
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="w-full md:w-1/3 flex flex-col gap-4">
            {/* Special Notes section */}
            <Card className="w-full h-fit border-fuchsia-500/50">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
                <div>
                  <CardTitle>Special Notes</CardTitle>
                  <CardDescription>
                    Notes written during investigation
                  </CardDescription>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem odio provident aperiam, animi vel ipsam optio ad
                  temporibus placeat voluptate asperiores, tempore et sequi
                  minima ducimus unde veniam natus.
                </p>
              </CardContent>
            </Card>

            {/* Related Person section */}
            <Card className="w-full">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
                <div>
                  <CardTitle>Related Person</CardTitle>
                  <CardDescription>
                    List of all the related persons to {personName}
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" className="gap-1 shrink-0">
                  <Plus className="h-4 w-4" /> Add
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic">
                  No connections established yet.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Evidence Table Card */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Evidences Connected with {personName}</CardTitle>
              <CardDescription>
                All the evidences gathered throughout current investigation
                connected to {personName}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableCaption>
                  All the Evidences connected to {personName}
                </TableCaption>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead>Evidence Id</TableHead>
                    <TableHead>Evidence Type</TableHead>
                    <TableHead>Evidence Source</TableHead>
                    <TableHead>Created at</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dummyEvidence.length > 0 ? (
                    dummyEvidence.map((item, index) => (
                      <TableRow key={item.id || index}>
                        <TableCell className="font-mono font-medium">
                          {item.id}
                        </TableCell>
                        <TableCell>{item.type}</TableCell>
                        <TableCell>{item.source}</TableCell>
                        <TableCell>{item.createdAt}</TableCell>
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
                        No connected evidence found.
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

export default Person;
