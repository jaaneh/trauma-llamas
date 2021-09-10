import * as React from 'react'
import { motion } from 'framer-motion'

type IAttributesSection = {
  section_title: string
  data: {
    image_path: string
    title: string
    rarity: string
  }[]
}

const AttributesSection = ({ section_title, data }: IAttributesSection): JSX.Element => {
  return (
    <section className='text-left'>
      <h3 className='text-xl normal-case'>
        {section_title}
        <span className='ml-2 text-gray-400'>({data.length})</span>
      </h3>
      <hr className='my-4 border-tl-divider' />
      <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {data?.map((attr, i) => (
          <motion.div
            className='flex items-center w-full rounded-lg bg-tl-bg-secondary'
            whileHover={{ y: -3 }}
            key={i}
          >
            <figure>
              <img src={attr.image_path} alt={attr.title} className='w-20 rounded-l-lg' />
            </figure>
            <div className='flex flex-col ml-4 space-y-1'>
              <h4 className='font-bold text-gray-200 normal-case'>{attr.title}</h4>
              <p className='font-light text-gray-300'>{attr.rarity}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default AttributesSection
