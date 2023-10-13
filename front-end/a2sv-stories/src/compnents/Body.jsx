import React from 'react'
import StoryCard from './StoryCard'
import { useSelector, useDispatch } from 'react-redux'
import AcceptanceRate from './AcceptanceRate'
import GrowthData from './GrowthData'

function Body() {
  const stories = useSelector(state => state.story.stories)

  return (
    <section className='bg-whitesmoke flex flex-col items-center gap-11 pt-16'>

        <div className='flex flex-col items-center gap-4'>
        <h1 className='font-extrabold text-5xl'>Success Stories</h1>
        <h3 className='text-xl font-nunito'>A2SV has turned the dreams of African software engineers into a reality and continues to thrive.</h3>
        </div>

        <div className='flex flex-col items-center font-nunito'>
            <p>Google SWE Interviews Acceptance Rate Comparison</p>
            <h4 className='text-lg'>A2SV students are 35 times more likely to pass Google SWE interviews than average candidates.</h4>
        </div>

        <AcceptanceRate />

        <div className='flex flex-col items-center gap-6'>
            <h1 className='font-extrabold text-5xl'>Impact Stories</h1>
            <h3 className='text-2xl font-nunito'>Behind every success is a story. Learn about the stories of A2SVians.</h3>
           <div className='gap-14 flex flex-col items-center'>
           {(() => stories.map(story => <StoryCard key={story.id} story={story} />))()}
           </div>
        </div>

        <GrowthData />
    </section>
  )
}

export default Body