import * as React from 'react'

import ContentLayout from '@components/ContentLayout'
import roadmap from '@content/roadmap.json'

const RoadmapPage = (): JSX.Element => {
  return (
    <ContentLayout title='Roadmap'>
      <>
        <div className='absolute border-2 rounded-l-lg h-5/6 top-12 border-tl-yellow left-11 md:left-auto md:right-1/2 border-2-2'></div>
        <div className='absolute border-2 rounded-r-lg h-5/6 top-12 border-tl-yellow left-12 md:left-1/2 border-2-2'></div>
        {roadmap.map((roadmapItem, i) => (
          <section
            key={i}
            className={`flex justify-between w-full mb-8 ${
              i % 2 === 0 ? 'items-center md:flex-row-reverse' : 'items-center'
            }`}
          >
            <div className='order-1 w-1/12 md:w-5/12'></div>
            <div
              className={`order-1 w-10/12 md:w-5/12 px-1 py-4 ${
                i % 2 === 0 ? 'md:text-right text-left' : 'md:text-left'
              }`}
            >
              <p className='mb-1 text-lg text-tl-yellow roadmap_after'>
                {roadmapItem.percentage}
              </p>

              <div className='divide-y rounded-md shadow bg-tl-bg-secondary divide-tl-divider'>
                {roadmapItem.content.map((content, i) => (
                  <div key={i} className='p-4'>
                    <h4 className='mb-1 text-md '>{content.title}</h4>
                    <p className='text-sm leading-snug text-gray-400'>{content.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
        {/* <Image
          width='400'
          height='275'
          alt='thing'
          className='mx-auto mt-8'
          src='https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png'
        /> */}
      </>
    </ContentLayout>
  )
}

export default RoadmapPage
