import { styled } from '@theme';

const LogoStyled = styled('div', {
  svg: { width: '120px' },
  '@desktop': { svg: { width: '170px' } },
});

const LogoSVG = () => {
  return (
    <svg
      viewBox="0 0 110 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <path d="M24.601 0.369385H0V6.91778H9.01378V29.6305H15.5873V6.91778H24.601V0.369385Z" fill="url(#linear)"/>
      <path d="M28.887 29.6132V0.389258H53.488L50.4423 18.6049H35.4567V23.102H51.9072V29.6132H28.887ZM35.4567 12.0565H44.6349L45.4795 6.93766H35.4567V12.0565Z" fill="url(#linear)"/>
      <path d="M82.3233 14.8548V29.6305H75.7498V21.3994H64.2957V29.6305H57.7222V0.369385H64.2957V14.8548H71.1233L74.2064 0.406613H81.1087L78.0256 14.8548H82.3233Z" fill="url(#linear)"/>
      <path d="M89.9881 6.91778H85.399V0.369385H110V29.6305H103.427V24.6569H92.7049V29.6305H86.1314V18.1085L89.9881 6.91778ZM103.427 18.1085V6.91778H96.3411L93.0749 18.1085H103.427Z" fill="url(#linear)"/>
      
      <defs>
        <linearGradient id="linear" x1="-4.1967e-08" y1="15.3694" x2="110" y2="15.3668" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD45A"/>
          <stop offset="1" stopColor="#F49669"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

export const Logo = () => {
  return(
    <LogoStyled>
      <LogoSVG />
    </LogoStyled>
  );
}
