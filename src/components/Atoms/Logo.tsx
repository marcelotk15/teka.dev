import { HTMLAttributes } from 'react'

interface LogoProps extends HTMLAttributes<HTMLOrSVGElement> {
  currentColor?: boolean
}

export const Logo = ({ currentColor, ...svgProps }: LogoProps) => {
  const fill = currentColor ? 'currentColor' : 'url(#logo-gradient-fill)'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 110 30"
      {...svgProps}
    >
      <path
        d="M24.601 0.369385H0V6.91778H9.01378V29.6305H15.5873V6.91778H24.601V0.369385Z"
        fill={fill}
      />
      <path
        d="M28.887 29.6132V0.389258H53.488L50.4423 18.6049H35.4567V23.102H51.9072V29.6132H28.887ZM35.4567 12.0565H44.6349L45.4795 6.93766H35.4567V12.0565Z"
        fill={fill}
      />
      <path
        d="M82.3233 14.8548V29.6305H75.7498V21.3994H64.2957V29.6305H57.7222V0.369385H64.2957V14.8548H71.1233L74.2064 0.406613H81.1087L78.0256 14.8548H82.3233Z"
        fill={fill}
      />
      <path
        d="M89.9881 6.91778H85.399V0.369385H110V29.6305H103.427V24.6569H92.7049V29.6305H86.1314V18.1085L89.9881 6.91778ZM103.427 18.1085V6.91778H96.3411L93.0749 18.1085H103.427Z"
        fill={fill}
      />

      <defs>
        <linearGradient
          xmlns="http://www.w3.org/2000/svg"
          id="logo-gradient-fill"
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ce4de9" />
          <stop offset="0.14285714285714285" stopColor="#df46dd" />
          <stop offset="0.2857142857142857" stopColor="#ff3dbc" />
          <stop offset="0.42857142857142855" stopColor="#ff4a91" />
          <stop offset="0.5714285714285714" stopColor="#ff6c6a" />
          <stop offset="0.7142857142857142" stopColor="#ff8d52" />
          <stop offset="0.8571428571428571" stopColor="#faa24b" />
          <stop offset="1" stopColor="#f4aa4b" />
        </linearGradient>
      </defs>
    </svg>
  )
}
