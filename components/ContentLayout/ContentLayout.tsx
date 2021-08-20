import * as React from 'react'

type IContentLayout = {
  children: React.ReactNode
  title: string
  undertitle?: string
  content?: string
}

const defaultUndertitle = 'Trauma Llamas'

const ContentLayout = ({
  children,
  title,
  undertitle = defaultUndertitle
}: IContentLayout): JSX.Element => {
  return (
    <div className='container flex flex-col items-center justify-center w-full max-w-6xl mx-auto my-6 bg-neutral-focus'>
      <section className='py-8'>
        <div className='flex flex-col items-center mx-auto my-8'>
          <div className='flex flex-col items-center w-full px-8 mb-20 text-center md:max-w-3xl'>
            <h1 className='text-lg text-yellow-300 uppercase tracking-loose'>{title}</h1>
            <h2 className='mb-2 text-3xl leading-normal'>{undertitle}</h2>
          </div>
          <div className='container w-full h-full mx-auto'>
            <div className='relative h-full px-8 py-4 overflow-hidden wrap'>
              {children}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContentLayout
