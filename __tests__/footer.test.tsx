import { render, screen } from '@testing-library/react'
import Footer from '../components/footer'
import '@testing-library/jest-dom'

describe('Footer', () => {
  it('renders a home link', () => {
    render(<Footer />)

    const link = screen.getByText(/home/i)

    expect(link).toBeInTheDocument()
  })

  it('renders a github link', () => {
    render(<Footer />)

    const link = screen.getByText(/github/i)

    expect(link).toBeInTheDocument()
  })

  it('renders a linkedin link', () => {
    render(<Footer />)

    const link = screen.getByText(/linkedin/i)

    expect(link).toBeInTheDocument()
  })
})