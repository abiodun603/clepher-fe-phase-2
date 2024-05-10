import { DataTable } from './table/data-table'
import { columns } from './table/columns'

const PostManagement = () => {
  return (
    <>
      <DataTable columns={columns} data={[]} />
    </>
  )
}

export default PostManagement