import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  PenBox,
  Mail,
  Phone,
  MapPin,
  User,
  Calendar,
  ShieldAlert,
  PlusSquareIcon,
  Plus,
} from "lucide-react";

function Person() {
  const personName = "Gagan Suman";
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Person - Gagan Suman</CardTitle>
        <CardDescription>
          All the information gathered during investigation for {personName}
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full space-y-3">
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

          <div className="w-1/3 flex flex-col space-y-2">
            {/* Special Notes section */}
            <Card className="w-full  h-fit border-fuchsia-500">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
                <div>
                  <CardTitle>Special Notes</CardTitle>
                  <CardDescription>
                    Notes written during investigation
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" className="px-2">
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
            <Card>
              <CardHeader>
                <CardTitle>Related Person</CardTitle>
                <CardDescription>List of all the related persons to {personName}</CardDescription>
                <CardAction>
                  <Button className="" variant={'outline'}><Plus/>Add </Button>
                </CardAction>
              </CardHeader>
            </Card>
          </div>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Evidences Connected with {personName}</CardTitle>
              <CardDescription>
                All the evidences gathered thwough out current investigation
                Connected to {personName}
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}

export default Person;
