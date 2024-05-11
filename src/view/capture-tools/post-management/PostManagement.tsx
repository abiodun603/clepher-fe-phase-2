import { DataTable } from './table/data-table'
import { columns } from './table/columns'

// ** Store
import { useGetPostEngagmentsQuery } from '@/store/feature/post/PostService'

const PostManagement = () => {
  const {isLoading: isLoadingPostEngagement, data: getPostEngagement} = useGetPostEngagmentsQuery()

  if(isLoadingPostEngagement) return null
  return (
    <>
    {
      getPostEngagement && <DataTable columns={columns} data={getPostEngagement} />
    }
    </>
  )
}

export default PostManagement