import { axe } from 'jest-axe'

import { render } from '@testing-library/react'

import Button from './Button'

describe('components/Button', () => {
  it('renders without crashing', () => {
    render(<Button />)
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Button>Click Me</Button>)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })

  it('renders title', () => {
    const { getByText } = render(<Button>Click Me</Button>)
    expect(getByText('Click Me')).toBeInTheDocument()
  })

  it('renders <a> when href provided', () => {
    const { container } = render(
      <Button href='https://traumallamas.io/'>Click Me</Button>
    )
    expect(container.querySelector('a')).toBeInTheDocument()
  })

  it('can add custom classnames', () => {
    const { container } = render(<Button className='trauma-llama-button' />)
    expect(container.firstChild).toHaveClass('trauma-llama-button')
  })

  it('matches snapshot for outline variant', () => {
    const { container } = render(<Button />)
    expect(container).toMatchSnapshot()
  })

  it('matches snapshot for primary variant', () => {
    const { container } = render(<Button variant='primary' />)
    expect(container).toMatchSnapshot()
  })

  it('matches snapshot for primary variant', () => {
    const { container } = render(<Button variant='secondary' />)
    expect(container).toMatchSnapshot()
  })
})
