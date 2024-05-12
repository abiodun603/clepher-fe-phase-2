import React from 'react'

const EditPostManagements = () => {
  return (
    <>
     <div className="grid grid-cols-2 w-full h-[80vh] bg-white shadow-sm rounded-xl">
        <div className=''>
          <div role="tablist" className="tabs ">
            <div className='w-full grid grid-cols-2 tabs-bordered'>
              <input type="radio" name="my_tabs_1" role="tab" className="tab w-full text-n500" aria-label="Settings"checked />
              <div role="tabpanel" className="tab-content p-10 w-full ">Settings</div>

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