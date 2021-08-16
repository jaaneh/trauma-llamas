import * as React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

type IProps = {
  href: string
  children: React.ReactNode
}

const ActiveLink = ({ href, children }: IProps): JSX.Element => {
  const router = useRouter()

  return (
    <Link href={href}>
      <a className={router.pathname === href ? 'text-yellow-200' : 'text-gray-200'}>
        {children}
      </a>
    </Link>
  )
}

export default ActiveLink
