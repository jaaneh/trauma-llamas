import * as React from 'react'
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'

import ContentLayout from '@components/ContentLayout'

import faq_content from '@content/faq.json'

const sectionVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 0.1,
      staggerChildren: 0.15,
      ease: [0.02, 0.6, -0.01, 0.91]
    }
  }
}

const faqVariants = {
  hidden: {
    opacity: 0,
    y: 200
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.02, 0.6, -0.01, 0.91]
    }
  }
}

const FAQPage = (): JSX.Element => {
  return (
    <>
      <NextSeo title='FAQ' />
      <ContentLayout title='FAQ'>
        <motion.section
          variants={sectionVariants}
          initial='hidden'
          animate='visible'
          className='flex flex-col justify-center w-full gap-4 mx-auto text-sm md:w-2/3'
        >
          {faq_content.map((question, i) => (
            <motion.div
              key={i}
              variants={faqVariants}
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
            </motion.div>
          ))}
        </motion.section>
      </ContentLayout>
    </>
  )
}

export default FAQPage
