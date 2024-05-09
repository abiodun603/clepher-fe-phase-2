
import {  Link } from "react-router-dom";

import { ColumnDef } from "@tanstack/react-table"


// ** Icon
import { CgMoreVertical } from "react-icons/cg";

// ** Component
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



const ActionsCell = ({ row }: { row: any }) => {
  const employee = row.original;
  // const { handleDelete } = useEmployeeDeletion();

  return (
    <DropdownMenu>
      {/* DropdownMenuTrigger component */}
      <DropdownMenuTrigger asChild>
            <div className="h-8 w-8 ">
              <span className="sr-only">Open menu</span>
              <CgMoreVertical className="h-4 w-4 text-2xl text-black" color='#000000'  size={80} />
            </div>
          </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link to={`/dashboard/employees/details/${employee?.id}`}>
          <DropdownMenuItem >Edit</DropdownMenuItem>
        </Link>
        <DropdownMenuItem onClick={() => null }>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};



// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type MemberDataTable = {
  id?: number;
  name: string
  eid: string
  email: string
  employeeId?:string;
  firstName?:string;
  lastName?:string;
  department: {name: string}
}

export const columns: ColumnDef<MemberDataTable>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="checkbox"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="checkbox"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "name",
    header: "Name",
    cell: ({ row }) => {
      const employeeData = row.original
      const firstName: string = employeeData.firstName || ""
      const lastName: string = employeeData.lastName || ""

      const fullName: string = `${firstName} ${lastName}`;
      return <div className="flex items-center space-x-4">
        <p>{fullName}</p>
      </div>
    },
  },
  {
    accessorKey: "employeeId",
    header: "Engaged / Unique",
  },
  {
    accessorKey: "email",
    header: "Acquired",
  },
  {
    accessorKey: "employmentStatus",
    header: "Conversion",
    cell: ({ row }) => {
      const employmentStatus: string = row.getValue("employmentStatus")
 
      return <div className="flex items-center space-x-4">
        <div className="flex items-center justify-center body-three text-n900  capitalize">{employmentStatus || "---"}</div>
      </div>
    },
  },
  {
    id: "actions",
    header: () => <div className="">
      <Button variant="ghost" className="h-8 w-8 p-0">
        <span className="sr-only">Open menu</span>
        <CgMoreVertical className="h-4 w-4  text-xl text-n700"  size={60}/>
      </Button>
    </div>,
    cell: ({ row }) => {
      const employee = row.original 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Action</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link to={`/dashboard/employees/details/${employee?.id}`}>
              <DropdownMenuItem >Edit</DropdownMenuItem>
            </Link>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]