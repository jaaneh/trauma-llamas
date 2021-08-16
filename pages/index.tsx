import * as React from 'react'

import FadeInWhenVisible from '@components/FadeInWhenVisible'

import welcomeKit from '@content/welcome_kit.json'

const HomePage = (): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <div
        className='min-h-[50vh] hero'
        style={{
          backgroundImage: 'url(llama_3.png)'
        }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='text-center hero-content text-neutral-content'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold'>Trauma Llamas</h1>
            <p className='mb-5'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className='btn btn-info'>Get Started</button>
          </div>
        </div>
      </div>
      <div className='container flex flex-col justify-center w-full my-20 space-y-20'>
        {[1, 2, 3].map((_, i) => (
          <FadeInWhenVisible key={i}>
            <section className='flex flex-col w-full px-8 md:flex-row min-h-[50vh]'>
              <figure
                className={`w-full mb-6 md:mb-0 h-72 md:min-h-[50vh] overflow-hidden ${
                  i % 2 === 0 ? 'md:order-1 md:mr-12' : 'md:order-2 md:ml-12'
                }`}
              >
                <img src='llama_1.png' alt='Llama' className='rounded-lg llama-picture' />
              </figure>
              <div className={`w-full ${i % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <h2 className='mb-2 text-4xl font-bold'>Some title</h2>
                <p className='text-lg tracking-tight text-gray-400'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, vel!
                  Consequatur, qui sequi corrupti dolores amet pariatur sint nisi alias
                  molestias sunt doloremque perspiciatis reprehenderit deserunt recusandae
                  eos consequuntur voluptatibus. Oui sequi corrupti dolores amet pariatur
                  sint nisi alias molestias sunt doloremque perspiciatis reprehenderit
                  deserunt recusandae eos consequuntur voluptatibus.
                </p>
              </div>
            </section>
          </FadeInWhenVisible>
        ))}
      </div>
      <FadeInWhenVisible>
        <section className='container px-6 py-4 mx-auto'>
          <h1 className='text-lg text-yellow-300 uppercase tracking-loose'>TLC</h1>
          <h2 className='mb-2 text-3xl leading-normal'>Trauma Llamas Club</h2>
          <div className='mb-8 prose text-gray-400'>
            <p>
              Tender love and care is all a llama needs, by adopting a llama today you
              will become a member of the Trauma Llama Club.
            </p>
            <p>
              To help you further support your Trauma Llama and the community, members
              will receive this digital welcome kit including:
            </p>
          </div>
          <div>
            <div className='grid gap-6 mb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {welcomeKit.map((kit, i) => (
                <div
                  key={i}
                  className='flex items-start p-4 border rounded-lg shadow-sm border-tl-divider bg-tl-bg-secondary'
                >
                  <div>
                    <h3 className='mb-2 text-gray-200'>{kit.title}</h3>
                    <p className='text-sm text-gray-400'>{kit.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInWhenVisible>
    </div>
  )
}

export default HomePage
