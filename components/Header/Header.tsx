import * as React from 'react'
import Link from 'next/link'

import Button from '@components/Button'
import ActiveLink from '@components/ActiveLink'

type INav = {
  title: string
  href: string
}

const Header = (): JSX.Element => {
  const nav: INav[] = [
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
    }
  ]

  return (
    <nav className='border-b border-gray-700 rounded-b bg-neutral-focus text-neutral-content'>
      <div className='container h-20 mx-auto navbar'>
        <div className='px-2 mx-2 navbar-start'>
          <Link href='/'>
            <a tabIndex={0} className='text-lg font-bold'>
              Trauma Llamas
            </a>
          </Link>
        </div>
        <div className='hidden px-2 mx-2 navbar-center lg:flex'>
          <div className='flex items-stretch space-x-2'>
            {nav.map((link, i) => (
              <ActiveLink key={i} href={link.href}>
                <span className='font-normal btn btn-ghost btn-sm rounded-btn'>
                  {link.title}
                </span>
              </ActiveLink>
            ))}
          </div>
        </div>
        <div className='px-2 mx-2 navbar-end'>
          <Button tabIndex={0} href='/mint'>
            Mint Llamas
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Header
