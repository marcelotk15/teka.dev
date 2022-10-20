import { render, screen } from '@testing-library/react'
import { Header } from '../components/header'
import '@testing-library/jest-dom'

import * as nextRouter from 'next/router';

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: '/', pathname: '/' }));

describe('Header', () => {
  it('renders a home link', () => {
    render(<Header />)

    const link = screen.getByText(/home/i)

    expect(link).toBeInTheDocument()
  })

  it('renders a blog link', () => {
    render(<Header />)

    const link = screen.getByText(/blog/i)

    expect(link).toBeInTheDocument()
  })

  it('renders a twiter link', () => {
    render(<Header />)

    const link = screen.getByText(/twitter/i)

    expect(link).toBeInTheDocument()
  })

  it('renders a github link', () => {
    render(<Header />)

    const link = screen.getByText(/github/i)

    expect(link).toBeInTheDocument()
  })

  it('renders a linkedin link', () => {
    render(<Header />)

    const link = screen.getByText(/linkedin/i)

    expect(link).toBeInTheDocument()
  })

  
})