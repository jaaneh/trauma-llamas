import * as React from 'react'

import ContentLayout from '@components/ContentLayout'

import faq_content from '@content/faq.json'

const FAQPage = (): JSX.Element => {
  return (
    <ContentLayout title='FAQ'>
      <section className='flex flex-col justify-center w-full gap-4 mx-auto text-sm md:w-2/3'>
        {faq_content.map((question, i) => (
          <div
            key={i}
            tabIndex={0}
            className='max-w-full border shadow border-tl-divider collapse rounded-xl collapse-arrow'
          >
            <input type='checkbox' />
            <div className='flex items-center pr-10 font-medium tracking-tight text-md collapse-title'>
              {question.title}
            </div>
            <div className='prose-sm collapse-content'>
              <div dangerouslySetInnerHTML={{ __html: question.content }}></div>
            </div>
          </div>
        ))}
      </section>
    </ContentLayout>
  )
}

export default FAQPage
