import { axe } from 'jest-axe'

import { render } from '@testing-library/react'

import Footer from './Footer'

describe('components/Footer', () => {
  it('renders without crashing', () => {
    render(<Footer>This is the footer</Footer>)
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Footer>This is the footer</Footer>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders children', () => {
    const { getByText } = render(<Footer>This is the footer</Footer>)
    expect(getByText('This is the footer')).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { container } = render(<Footer>This is the footer</Footer>)
    expect(container).toMatchSnapshot()
  })
})
