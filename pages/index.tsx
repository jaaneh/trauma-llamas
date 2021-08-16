import * as React from 'react'
import Link from 'next/link'

// import FadeInWhenVisible from '@components/FadeInWhenVisible'
import Button from '@components/Button'

import welcomeKit from '@content/welcome_kit.json'

const HomePage = (): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <div
        className='min-h-[50vh] hero'
        style={{
          backgroundImage: 'url(banner.png)'
        }}
      >
        <div className='bg-opacity-20 hero-overlay bg-gradient-to-t from-neutral-focus'></div>
        <div className='text-center hero-content text-neutral-content'>
          <div className='max-w-md'>
            <h1 className='mb-4 text-5xl font-bold'>Trauma Llamas</h1>
            <Link href='/roadmap'>
              <Button variant='primary' isActive className='rounded-full'>
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className='container flex flex-col justify-center w-full my-20 space-y-20'>
        <section className='flex flex-col w-full px-8 md:flex-row min-h-[50vh]'>
          <figure className='w-full mb-6 md:mb-0 h-72 md:min-h-[50vh] overflow-hidden md:order-1 md:mr-12'>
            <img
              src='llama_1.png'
              alt='Llama'
              className='object-cover object-center w-full h-full rounded-lg'
            />
          </figure>
          <div className='w-full md:order-2'>
            <h2 className='mb-2 text-4xl font-bold'>Sad Llamas</h2>
            <div className='text-lg tracking-tight prose-sm text-gray-400'>
              <p>Welcome to Trauma Llama Rescue.</p>
              <p>
                We have 10,000 1st generation rescued Trauma Llamas that are in need of a
                good home. These Llamas have seen rough times traveling long and far so
                please consider adopting one of these Llamas so we can go out and save
                more as our sanctuary is at capacity.
              </p>
              <p>However, these are no ordinary Llamas...</p>
            </div>
          </div>
        </section>

        <section className='flex flex-col w-full px-8 md:flex-row min-h-[50vh]'>
          <figure className='w-full mb-6 md:mb-0 h-72 md:min-h-[50vh] overflow-hidden md:order-2 md:ml-12'>
            <img
              src='llama_2.png'
              alt='Llama'
              className='object-cover object-center w-full h-full rounded-lg md:object-left'
            />
          </figure>
          <div className='w-full md:order-1'>
            <h2 className='text-lg text-yellow-300 uppercase tracking-loose'>TLC</h2>
            <h2 className='mb-2 text-4xl font-bold'>Trauma Llamas Club</h2>
            <div className='mb-6 text-lg tracking-tight prose-sm text-gray-400'>
              <p>
                Tender love and care is all a llama needs, by adopting a llama today you
                will become a member of the Trauma Llama Club.
              </p>
              <p>
                To help you further support your Trauma Llama and the community, members
                will receive this digital welcome kit including:
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
                  {/* <p className='text-sm text-gray-400'>{kit.content}</p> */}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='flex flex-col w-full px-8 md:flex-row min-h-[50vh]'>
          <figure className='w-full mb-6 md:mb-0 h-72 md:min-h-[50vh] overflow-hidden md:order-1 md:mr-12'>
            <img
              src='llama_3.png'
              alt='Llama'
              className='object-cover object-center w-full h-full rounded-lg'
            />
          </figure>
          <div className='w-full md:order-2'>
            <h2 className='mb-2 text-4xl font-bold'>The Future</h2>
            <div className='mb-6 text-lg tracking-tight prose-sm text-gray-400'>
              <p>
                Together we will create a community that will make a positive change in
                the world. We’ll do this by making donations to _ and _ in a total amount
                of $25,000. Additionally as a way to help other members of the community
                develop and launch their own NFT’s a community vote will be held, with the
                top 3 projects receiving a $10,000 fund to help them become a reality.
              </p>
              <p>
                If you’d like to learn more about the rest of our plans then please click
                to view our roadmap.
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
      </div>

      <div
        className='min-h-[30vh] hero'
        style={{
          backgroundImage: 'url(banner.png)'
        }}
      >
        <div className='bg-opacity-60 hero-overlay bg-gradient-to-b from-neutral-focus'></div>
        <div className='hero-content'>
          <Link href='/'>
            <Button variant='secondary' isActive>
              Mint Llamas
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
