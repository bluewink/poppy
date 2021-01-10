import styled from 'styled-components';

export const StyledMenu = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  text-align: left;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  
  transition: transform 0.3s ease-in-out;
  background-color: #ffffff;
  width: 294px;
  // @media (max-width: ${({ theme }) => theme.mobile}) {
  //   width: 100%;
  // }

  // a {
  //   font-size: 2rem;
  //   text-transform: uppercase;
  //   padding: 2rem 0;
  //   font-weight: bold;
  //   letter-spacing: 0.5rem;
  //   color: ${({ theme }) => theme.primaryDark};
  //   text-decoration: none;
  //   transition: color 0.3s linear;

  //   @media (max-width: ${({ theme }) => theme.mobile}) {
  //     font-size: 1.5rem;
  //     text-align: center;
  //   }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }

    transform: ${({ open }) => (!open ? 'translateX(0)' : 'translateX(-100%)')};
  }

  display: ${({ open }) => (open ? 'none' : 'flex')}
  ;
`;
