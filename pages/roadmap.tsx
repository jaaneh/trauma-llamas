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
          <div className='absolute h-[97%] border-2 rounded-l-lg top-12 border-tl-yellow left-11 md:left-auto md:right-1/2 border-2-2'></div>
          <div className='absolute h-[97%] border-2 rounded-r-lg top-12 border-tl-yellow left-12 md:left-1/2 border-2-2'></div>
          {roadmap.map((roadmapItem, i) => (
            <section
              key={i}
              className={`relative flex justify-between w-full mb-8 ${
                i % 2 === 0 ? 'items-center md:flex-row-reverse' : 'items-center'
              }`}
            >
              <img
                src='/stars.png'
                alt='stars'
                className={`absolute z-0 w-52 opacity-40 select-none pointer-events-none rotate-12 top-2 -right-7 ${
                  i % 2 === 0 ? 'md:top-4 md:-left-6 md:rotate-[170deg]' : ''
                }`}
              />
              <div className='order-1 w-1/12 md:w-5/12'></div>
              <div className='z-10 order-1 w-10/12 px-1 py-4 text-left md:w-5/12'>
                <p
                  className={`mb-1 text-lg text-tl-yellow after:left-4 md:after:left-1/2 roadmap_after ${
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
