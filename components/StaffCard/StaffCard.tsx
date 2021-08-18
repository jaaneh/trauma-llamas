import * as React from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'

import { FaTwitter } from 'react-icons/fa'

type IStaffCard = {
  name: string
  position: string
  picture: string
  socials: {
    platform: string
    url: string
  }[]
}

const StaffCard = ({ name, position, picture, socials }: IStaffCard): JSX.Element => {
  return (
    <motion.div
      className='flex flex-col border rounded-lg hover:shadow-md border-tl-divider bg-tl-bg-secondary'
      whileHover={{ y: -3 }}
    >
      <div className='w-full mx-auto'>
        <div className='flex flex-col gap-6 px-10 py-8 md:flex-row md:gap-8 md:px-8'>
          <div className='relative mx-auto md:mx-0 w-5 h-5 min-w-[6rem] min-h-[6rem]'>
            <Image
              className='border-4 border-gray-800 rounded-full '
              src={`/${picture}`}
              alt={name}
              objectFit='cover'
              layout='fill'
            />
          </div>
          <div className='flex flex-col text-center md:text-left'>
            <div className='text-lg font-medium text-gray-200'>{name}</div>
            <div className='mb-2 text-sm tracking-tight text-gray-400'>{position}</div>
            <div className='flex flex-row gap-4 mx-auto my-auto text-2xl text-gray-800 md:mx-0'>
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  rel='noopener'
                  target='_blank'
                  className='hover:cursor-pointer hover:text-blue-500'
                >
                  <FaTwitter className='text-white' />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default StaffCard
