
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

// ** Type
import { Post } from "@/type/type";



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


export const columns: ColumnDef<Post>[] = [
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
        className="checkbox h-5 w-5"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="checkbox h-5 w-5"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "name",
    accessorKey: "engaged",
    header: "Name",
    cell: ({ row }) => {
      const postData = row.original
      const name: string = postData.name || ""
      const image = postData.image || ""
      return <div className="flex items-center space-x-4">
        <img 
          src={image}
          alt={name}
          width={18}
          height={18}
     />
        <p>{name}</p>
      </div>
    },
  },
  {
    accessorKey: "engaged",
    header: "Engaged / Unique",
  },
  {
    accessorKey: "Acquired",
    header: "Acquired",
  },
  {
    accessorKey: "Conversion",
    header: "Conversion",
    // cell: ({ row }) => {
    //   const postData = row.original
    //   const Conversion = postData.Conversion || ""
 
    //   return <div className="flex items-center space-x-4">
    //     <div className="flex items-center justify-center body-three text-n900  capitalize">{Conversion || "---"}</div>
    //   </div>
    // },
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const id = row.original._id
      return (
        <div className="dropdown dropdown-end">
          <Button variant="outline" className="h-6 border border-n500 ">
            <span className="text-n500">Action</span>
          </Button>
          <ul className="dropdown-content z-[1] menu p-2 shadow text-n500
           rounded-box w-24 bg-white">
            <li><Link to={`/capture-tools/post-engagements/${id}/edit`} className="text-n500">Edit</Link></li>
            <li><a className="text-n500">Rename</a></li>
            <li><a className="text-n500">Delete</a></li>
          </ul>
        </div>
      )
    },
  },
]