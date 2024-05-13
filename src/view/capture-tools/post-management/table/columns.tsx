
import {  Link } from "react-router-dom";

import { ColumnDef } from "@tanstack/react-table"

// ** Component
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"


// ** Type
import { Post } from "@/type/type";


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
    accessorKey: "name",
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
          <Button variant="outline" className="h-6 border border-n500 hover:bg-n500 hover:text-white">
            Action
          </Button>
          <ul className="dropdown-content z-[1] menu p-2 shadow text-xs
           rounded-box w-24 bg-white">
            <li><Link to={`/capture-tools/post-engagements/${id}/edit`} className="text-n500 hover:text-n500 ">Edit</Link></li>
            <li><a className="text-n500 hover:text-n500 ">Rename</a></li>
            <li><a className="text-n500 hover:text-n500 ">Delete</a></li>
          </ul>
        </div>
      )
    },
  },
]