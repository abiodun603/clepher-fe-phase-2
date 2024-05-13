import { Button } from '@/components/ui/button'
import { Breadcrumbs } from '@/lib/helpers/breadcrumbs'
import Settings from '@/view/capture-tools/post-management/tab-panel/Settings/Settings'
import { useLocation } from 'react-router-dom'

const EditPostManagements = () => {
  const { pathname } = useLocation()

  return (
    <div className='px-4'>
      <div className='mb-4 flex flex-row items-center justify-between'>
        <Breadcrumbs url={pathname} />
        <Button className='' variant={"primary"}>Save</Button>
      </div>
      <div className="flex flex-col space-y-10 md:space-y-0 md:grid md:grid-cols-5 w-full h-full md:h-[80vh] bg-white shadow-sm rounded-xl">
          <div className='col-span-2'>
            <div role="tablist" className="tabs ">
              <div className='w-full grid grid-cols-2 tabs-bordered h-full'>
                <input type="radio" name="my_tabs_1" role="tab" className="tab w-full text-n500" aria-label="Settings"checked />
                <div role="tabpanel" className="tab-content px-6 pt-2 w-full overflow-y-scroll h-[74vh]">
                  <Settings />
                </div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab w-full text-n500" aria-label="Auto Response" />
                <div role="tabpanel" className="tab-content p-10">Auto Response</div>
              </div>
            </div>
          </div>
          <div className='col-span-3'>
            <div role="tablist" className="tabs bg-transparent">
              <div className='w-full grid grid-cols-2 tabs-boxed bg-transparent p-0 m-0'>
                <input type="radio" name="my_tabs_2" role="tabs" className="tab w-full" aria-label="Select A Post" checked />
                <div role="tabpanel" className="tab-content p-10 w-full">Settings</div>

                <input type="radio" name="my_tabs_2" role="tabs" className="tab w-full" aria-label="Post ID / URL"  />
                <div role="tabpanel" className="tab-content p-10">Auto Response</div>
              </div>
            </div>
          </div>
      </div>

    </div>
  )
}

export default EditPostManagements