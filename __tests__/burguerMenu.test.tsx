import { fireEvent, render, screen } from '@testing-library/react'
import BurgerMenu from '../components/burgerMenu'
import '@testing-library/jest-dom'

import * as mobileMenu from "@/hooks/mobileMenu"

const toggleMenu = jest.fn()
mobileMenu.useMobileMenuActions = jest.fn();
mobileMenu.useMobileMenuActions.mockImplementation(() => ({ toggleMenu }));

describe('BurgerMenu', () => {
  it('renders a menu burger', () => {
    render(<BurgerMenu />)

    const menu = screen.getByTestId('menu-burger')

    expect(menu).toBeInTheDocument()
  })

  it('should call toggle menu', () => {
    render(<BurgerMenu />)

    const menu = screen.getByTestId('menu-burger')
    fireEvent.click(menu)

    expect(toggleMenu).toBeCalled()
  })
})