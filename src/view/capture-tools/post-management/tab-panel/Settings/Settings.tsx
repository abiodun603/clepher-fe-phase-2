import { useState } from 'react';

// ** Component
import { Button } from '@/components/ui/button'
import ReactionButton from './components/reaction'
// ** Libs
import { REACTIONS } from '@/lib/dummy'

// ** Icons
import { X } from 'lucide-react';

const Settings = () => {
  const [selectedReactions, setSelectedReactions] = useState<
    { name: string; imageUrl: string }[]
  >([]);

  const handleReactionClick = (name: string, imageUrl: string) => {
    // Check if the item already exists before adding
    const isDuplicate = selectedReactions.some((reaction) => reaction.name === name);
    if (!isDuplicate) {
      setSelectedReactions([...selectedReactions, { name, imageUrl }]);
    }
  };

  const handleDeleteReact = (name: string) => {
    setSelectedReactions(
      selectedReactions.filter((reaction) => reaction.name !== name)
    );
  };

  return (
    <div >
      <div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text text-n500/60">Enable To Privately Reply To First-Level Comments Only</span> 
            <input type="checkbox" className="toggle"  />
          </label>
        </div>
        <div className="form-control -mt-3">
          <label className="label cursor-pointer">
            <span className="label-text text-n500/60">Send Message To The Same User Only Once Per Post</span> 
            <input type="checkbox" className="toggle"  />
          </label>
        </div>
      </div>

      {/*  */}
      <div className="mt-4">
        <span className="w-full text-sm">
          Require a Post Reaction
        </span>
        <hr />

        <div className="mt-7">
          <div className="flex flex-row items-center space-x-2">
            {
              selectedReactions && selectedReactions.length > 0 &&
              selectedReactions.map((reaction) => {
                return (
                  <div key={reaction.name} className='w-fit flex flex-row items-center border border-blue-300 bg-[#F2F7FF] rounded-full px-2 py-1 space-x-1'>
                    <img src={reaction.imageUrl} alt={reaction.name} className="w-5 h-5" />
                    <h3>{reaction.name}</h3>
                    <X size={16} onClick={() => handleDeleteReact(reaction.name)} className='hover:text-red-400'/>
                  </div>
                )
              })
            }
          </div>
         
          <div className="react-me group cursor-pointer block relative w-full ">
            <div className="mx-auto w-full pb-4">
              <div className="list-none hidden group-hover:block  m-0 py-4 px-1 bg-white">
                <ul className='m-0 p-0 flex flex-row items-center justify-center space-x-2'>
                  {REACTIONS.map((reaction) => (
                    <ReactionButton
                      key={reaction.name}
                      name={reaction.name}
                      imageUrl={reaction.image_url}
                      onClick={handleReactionClick}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <Button className='w-full h-12 text-sm font-semibold' variant={"primary"}>Require reaction</Button>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="space-y-7 my-6">
        <div className="w-full">
          <label htmlFor="" className='text-n500'>Exclude Comments With These Keywords</label>
          <div className="join w-full mt-4">
            <input className="input input-bordered join-item w-full" placeholder="Specify Keywords"/>
            <button className="btn join-item rounded-r-md text-sm font-semibold bg-b300 text-n300 hover:bg-b300/90" >Add Keyword</button>
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="" className='text-n500'>Only Trigger For Comments With These Keywords</label>
          <div className="join w-full mt-4">
            <input className="input input-bordered join-item w-full" placeholder="Specify Keywords"/>
            <button className="btn join-item rounded-r-md text-sm font-semibold bg-b300 text-n300 hover:bg-b300/90" >Add Keyword</button>
          </div>
        </div>
      </div>
      
      {/*  */}
      <div className="">
        <span className="w-full text-sm font-medium text-n500">
          Private Reply After Post Engagement
        </span>
        <hr />

        <div className="space-y-7 -mt-4">
          <div className="flex flex-col mt-8">
            <label htmlFor="" className='text-n500'>Select Message Type</label>
            <select className="select select-bordered w-full mt-4 text-n500">
              <option selected>Flow?</option>
              <option>Single Message</option>
            </select>
          </div>
          <div className="flex flex-col mt-8">
          <label htmlFor="" className='text-n500'>Select Flow</label>
          <select className="select select-bordered w-full mt-4 text-n500">
            <option selected>Welcome Message</option>
            <option>Default Reply</option>
          </select>
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default Settings