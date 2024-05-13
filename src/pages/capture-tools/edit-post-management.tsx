import Settings from '@/view/capture-tools/post-management/tab-panel/Settings/Settings'
import { useLocation } from 'react-router-dom'

const EditPostManagements = () => {
  const { pathname } = useLocation()

  console.log(pathname)
  return (
    <>
      <div>

      </div>
      <div className="grid grid-cols-2 w-full h-[80vh] bg-white shadow-sm rounded-xl">
          <div className=''>
            <div role="tablist" className="tabs ">
              <div className='w-full grid grid-cols-2 tabs-bordered h-full'>
                <input type="radio" name="my_tabs_1" role="tab" className="tab w-full text-n500" aria-label="Settings"checked />
                <div role="tabpanel" className="tab-content px-10 w-full overflow-y-scroll h-[72vh]">
                  <Settings />
                </div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab w-full text-n500" aria-label="Auto Response" />
                <div role="tabpanel" className="tab-content p-10">Auto Response</div>
              </div>
            </div>
          </div>
          <div>
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

    </>
  )
}

export default EditPostManagements