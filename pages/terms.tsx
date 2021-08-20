import * as React from 'react'
import { NextSeo } from 'next-seo'

import ContentLayout from '@components/ContentLayout'

// import terms from '@content/terms.json'

const TermsPage = (): JSX.Element => {
  return (
    <>
      <NextSeo title='Terms' />
      <ContentLayout title='Terms & Conditions'>
        <section className='flex flex-col justify-center w-full gap-4 mx-auto text-sm'>
          {/* {terms.map((term, i) => (
            <div key={i} className='max-w-3xl prose-sm prose'>
              <h3 className='terms_section-title'>{term.title}</h3>
              <div
                className='leading-normal tracking-tight'
                dangerouslySetInnerHTML={{ __html: term.content }}
              ></div>
            </div>
          ))} */}
        </section>
      </ContentLayout>
    </>
  )
}

export default TermsPage
