import React from 'react'
import { useDispatch } from 'react-redux'
import { likeStory } from '../state/storySlice'
import { HandThumbUpIcon } from '@heroicons/react/24/outline'

const Details = ({details}) => {
  return details.map((detail, indx) => 
   <div className='space-y-2' key={indx}>
   <h2 className='font-bold text-xl'>{detail.title}</h2> 
   <p className='italic font-normal text-sm '>{detail.detail}</p>
   </div>
   )
}
function StoryCard({story}) {
  const dispatch = useDispatch()
 
  return (
    <div className='w-5/6 rounded overflow-hidden shadow-md drop-shadow-md  bg-white flex flex-row items-center justify-center p-12 gap-8 font-nunito'>
      <div className='flex-1 min-w-fit relative'>
        <img src={story.img} alt='prfile' className=' w-96 rounded-lg' />
        <div className='absolute left-4 bottom-2 text-white font-bold'>
          <h3 className='text-lg font-extrabold'>{story.name}</h3>  
          <h4>{story.role}</h4>
          <h4>{story.place}</h4>
        </div>
      </div>
      <div className='flex-auto space-y-5'>
        <Details details={story.details} />
        <div className='w-full flex items-center justify-end gap-3 text-gray-500'>
        <HandThumbUpIcon className={`w-6 h-6 hover:text-black cursor-pointer ${story.isLiked ? 'text-primary' : 'text-dark'}`} onClick={() => dispatch(likeStory(story.id))}/>
          <p>{story.likes}  likes</p>
        </div>
      </div>
    </div>
  )
}

export default StoryCard