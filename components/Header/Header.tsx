import * as React from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import ActiveLink from '@components/ActiveLink'
import Button from '@components/Button'

const nav: Array<{ title: string; href: string }> = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Roadmap',
    href: '/roadmap'
  },
  {
    title: 'FAQ',
    href: '/faq'
  },
  {
    title: 'Mint',
    href: '/mint'
  }
]

const Header = (): JSX.Element => {
  return (
    <Popover className='border-b border-gray-700 rounded-b bg-neutral-focus text-neutral-content'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6'>
        <div className='flex items-center justify-between py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <Link href='/'>
              <a tabIndex={0} className='text-lg font-bold'>
                Trauma Llamas
              </a>
            </Link>
          </div>

          <div className='-my-2 -mr-2 md:hidden'>
            <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-300 rounded-md bg-neutral-focus hover:bg-neutral focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
              <span className='sr-only'>Open menu</span>
              <AiOutlineMenu className='w-6 h-6' aria-hidden='true' />
            </Popover.Button>
          </div>

          <nav className='hidden space-x-10 md:flex'>
            <div className='flex items-stretch space-x-2'>
              {nav.map((link, i) => (
                <ActiveLink key={i} href={link.href}>
                  <span className='font-normal btn btn-ghost btn-sm rounded-btn'>
                    {link.title}
                  </span>
                </ActiveLink>
              ))}
            </div>
          </nav>

          <div className='items-center justify-end hidden md:flex md:flex-1 lg:w-0'>
            <Button
              tabIndex={0}
              isActive
              href='https://discord.gg/hsvH3898Pq'
              target='_blank'
            >
              Join Discord
            </Button>
            {/* <Link href='/'>
              <Button tabIndex={0} isActive disabled>
                Mint Llamas
              </Button>
            </Link> */}
          </div>
        </div>
      </div>

      <Transition
        as={React.Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden'
        >
          {({ close }) => (
            <div className='text-white bg-tl-bg-secondary divide-gray-700 rounded-lg shadow-lg divide-y-[1px] ring-1 ring-black ring-opacity-5'>
              <div className='px-5 pt-5 pb-6'>
                <div className='flex items-center justify-between'>
                  <Link href='/'>
                    <a tabIndex={0} className='text-lg font-bold'>
                      Trauma Llamas
                    </a>
                  </Link>
                  <div className='-mr-2'>
                    <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-300 rounded-md bg-tl-bg-secondary hover:bg-neutral-focus focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Close menu</span>
                      <AiOutlineClose className='w-6 h-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className='px-8 py-6 space-y-6'>
                <div className='flex flex-col gap-y-4'>
                  {nav.map((link, i) => (
                    <ActiveLink key={i} href={link.href} onClick={() => close()}>
                      <span className='text-base font-normal btn btn-ghost btn-sm rounded-btn'>
                        {link.title}
                      </span>
                    </ActiveLink>
                  ))}
                </div>
                <div>
                  <Button
                    tabIndex={0}
                    className='w-full'
                    isActive
                    href='https://discord.gg/hsvH3898Pq'
                    target='_blank'
                  >
                    Join Discord
                  </Button>
                  {/* <Link href='/'>
                    <Button tabIndex={0} isActive disabled className='w-full'>
                      Mint Llamas
                    </Button>
                  </Link> */}
                </div>
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Header
