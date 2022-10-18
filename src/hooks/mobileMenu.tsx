import { createContext, ReactNode, useContext, useReducer } from 'react'

type State = {
  open: boolean
}

type Dispatch = {
  openMenu: () => void
  closeMenu: () => void
  toggleMenu: () => void
}

type Action = {
  type: 'OPEN' | 'CLOSE' | 'TOGGLE'
}

const initialState: State = { open: false }

const MobileMenuStateContext = createContext<State>(initialState)
const MobileMenuDispatchContext = createContext<Dispatch | null>(null)

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'OPEN':
      return { ...state, open: true }
    case 'CLOSE':
      return { ...state, open: false }
    case 'TOGGLE':
      return { ...state, open: !state.open }
    default:
      return state
  }
}

interface MobileMenuProviderProps {
  children: ReactNode
}

const MobileMenuProvider = ({ children }: MobileMenuProviderProps) => {
  const [state, dispatch] = useReducer(reducer, { open: false })

  const openMenu = () => dispatch({ type: 'OPEN' })
  const closeMenu = () => dispatch({ type: 'CLOSE' })
  const toggleMenu = () => dispatch({ type: 'TOGGLE' })

  const actions: Dispatch = { openMenu, closeMenu, toggleMenu }

  return (
    <MobileMenuStateContext.Provider value={state}>
      <MobileMenuDispatchContext.Provider value={actions}>
        {children}
      </MobileMenuDispatchContext.Provider>
    </MobileMenuStateContext.Provider>
  )
}

function useMobileMenuState() {
  const context = useContext(MobileMenuStateContext)

  if (context === undefined) throw Error('"useErrorState" should be used under "ErrorProvider"!')

  return context
}

function useMobileMenuActions() {
  const context = useContext(MobileMenuDispatchContext)

  if (context === undefined)
    throw Error('"useErrorActions" should be used under "ErrorDispatchContext"!')

  return context
}

export { MobileMenuProvider, useMobileMenuState, useMobileMenuActions }
