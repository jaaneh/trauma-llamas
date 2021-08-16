import * as React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

type IProps = {
  href: string
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

const ActiveLink = ({ children, onClick, href }: IProps): JSX.Element => {
  const router = useRouter()

  return (
    <Link href={href}>
      <a
        onClick={onClick}
        className={router.pathname === href ? 'text-yellow-200' : 'text-gray-200'}
      >
        {children}
      </a>
    </Link>
  )
}

export default ActiveLink
