import { render, screen } from '@testing-library/react'

import Main from '../..'

describe('Main Component', () => {
  it('renders the haader', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
