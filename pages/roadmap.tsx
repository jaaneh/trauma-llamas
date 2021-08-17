import * as React from 'react'
import { NextSeo } from 'next-seo'

import ContentLayout from '@components/ContentLayout'
import roadmap from '@content/roadmap.json'

const RoadmapPage = (): JSX.Element => {
  return (
    <>
      <NextSeo title='Roadmap' />
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
              <div className='order-1 w-10/12 px-1 py-4 text-left md:w-5/12'>
                <p
                  className={`mb-1 text-lg text-tl-yellow roadmap_after ${
                    i % 2 === 0 ? 'md:text-right text-left' : 'md:text-left'
                  }`}
                >
                  {roadmapItem.percentage}
                </p>

                <div className='divide-y rounded-md shadow bg-tl-bg-secondary divide-tl-divider'>
                  {roadmapItem.content.map((content, i) => (
                    <div key={i} className='p-4'>
                      <h4 className='mb-1 text-md '>{content.title}</h4>
                      <div
                        className='text-sm leading-snug prose-sm text-gray-400'
                        dangerouslySetInnerHTML={{ __html: content.text }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </>
      </ContentLayout>
    </>
  )
}

export default RoadmapPage
