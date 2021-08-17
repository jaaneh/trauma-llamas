import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Cloudinary } from '@cloudinary/base'

import FadeInWhenVisible from '@components/FadeInWhenVisible'
import Button from '@components/Button'

import welcomeKit from '@content/welcome_kit.json'

const cld = new Cloudinary({
  cloud: {
    cloudName: 'trauma-llamas'
  }
})

const HomeOne = cld.video('home_1').toURL()
const HomeThree = cld.video('home_3').toURL()

import Llama from '../public/llama.png'

const HomePage = (): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <div
        className='min-h-[50vh] hero'
        style={{
          backgroundImage: 'url(banner.png)'
        }}
      >
        <div className='bg-opacity-20 hero-overlay bg-gradient-to-t from-neutral-focus h-[50vh]'></div>
        <div className='text-center hero-content text-neutral-content'>
          <div className='max-w-md'>
            <h1 className='mb-4 text-5xl font-bold'>Trauma Llamas</h1>
            <Button href='#sadllamas' variant='primary' isActive className='rounded-full'>
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div
        id='sadllamas'
        className='container flex flex-col justify-center w-full py-20 space-y-20'
      >
        <FadeInWhenVisible>
          <section className='flex flex-col w-full px-8 md:flex-row min-h-[50vh]'>
            <figure className='w-full mb-6 md:mb-0 h-72 md:min-h-[50vh] overflow-hidden md:order-1 md:mr-12 relative'>
              <video
                src={HomeOne}
                loop={true}
                autoPlay={true}
                muted={true}
                className='object-cover object-center w-full h-full rounded-lg'
              />
              {/* <Image
                src={HomeOne}
                alt='Llama'
                layout='fill'
                className='object-cover object-center w-full h-full rounded-lg'
              /> */}
            </figure>
            <div className='w-full md:order-2'>
              <h1 className='mb-2 text-4xl font-bold'>Trauma Llamas</h1>
              <div className='text-lg tracking-tight prose-sm text-gray-400'>
                <p>Welcome to Trauma Llamas Rescue.</p>
                <p>
                  We have 8,888 1st generation rescued Trauma Llamas that are in need of a
                  good home. These llamas have seen rough times traveling long and far so
                  please consider adopting one of them. We are currently at capacity and
                  can't work on saving the 2nd generation until the 1st generation llamas
                  are all adopted.
                </p>
                <p>
                  Please keep in mind that these are no ordinary llamas... These are
                  Trauma Llamas.
                </p>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section
            id='tlc'
            className='flex flex-col w-full px-8 md:flex-row min-h-[50vh]'
          >
            <figure className='relative w-full mb-6 md:mb-0 h-72 md:min-h-[50vh] overflow-hidden md:order-2 md:ml-12'>
              <Image
                src={Llama}
                alt='Llama'
                layout='fill'
                className='object-cover object-center w-full h-full rounded-lg'
              />
            </figure>
            <div className='w-full md:order-1'>
              <h2 className='text-lg text-yellow-300 uppercase tracking-loose'>TLC</h2>
              <h2 className='mb-2 text-4xl font-bold'>Trauma Llamas Club</h2>
              <div className='mb-6 text-lg tracking-tight prose-sm text-gray-400'>
                <p>
                  Tender love and care is all a llama needs, by adopting a llama today you
                  will become a member of the Trauma Llamas Club.
                </p>
                <p>
                  To help our club members further support their Trauma Llamas they will
                  receive a digital welcome kit that includes:
                </p>
              </div>
              <div className='grid grid-cols-2 gap-4 mb-6 md:grid-cols-1 lg:grid-cols-3'>
                {welcomeKit.map((kit, i) => (
                  <div
                    key={i}
                    className='flex items-center justify-center p-2 border rounded-lg shadow-sm md:p-3 border-tl-divider bg-tl-bg-secondary'
                  >
                    <h3 className='text-sm font-normal text-center text-gray-200 uppercase'>
                      {kit.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section
            id='thefuture'
            className='flex flex-col w-full px-8 md:flex-row min-h-[50vh]'
          >
            <figure className='relative w-full mb-6 md:mb-0 h-72 md:min-h-[50vh] overflow-hidden md:order-1 md:mr-12'>
              <video
                src={HomeThree}
                loop={true}
                autoPlay={true}
                muted={true}
                className='object-cover object-center w-full h-full rounded-lg'
              />
              {/* <Image
                src={HomeTwo}
                alt='Llama'
                layout='fill'
                className='object-cover object-center w-full h-full rounded-lg'
              /> */}
            </figure>
            <div className='w-full md:order-2'>
              <h2 className='mb-2 text-4xl font-bold'>The Future</h2>
              <div className='mb-6 text-lg tracking-tight prose-sm text-gray-400'>
                <p>
                  Together we'll create a community that will make a positive change in
                  the world. We’ll start by making donations to NidderDale Llamas and the
                  American Foundation for Suicide Prevention in a combined total amount of
                  $25,000. Additionally we will hold a Trauma Llamas Club vote where the
                  club will vote on which 3 club members will receive $10,000 ($30,000 in
                  total) so they can develop and launch their own NFT project.
                </p>
                <p>
                  If you’d like to learn more about the rest of our plans then please
                  click the button below to view our road map.
                </p>
              </div>
              <div className='grid grid-cols-2 gap-4 mb-6 md:grid-cols-1 lg:grid-cols-3'>
                <Link href='/roadmap'>
                  <Button
                    variant='primary'
                    isActive
                    className='w-full col-span-2 md:col-span-1'
                  >
                    View Roadmap
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>
      </div>
    </div>
  )
}

export default HomePage
