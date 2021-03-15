import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: flex-end;

`
export const ToggleContainer = styled.button`
  position: absolute;
  right: 20px;
  top: 14px;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.gradient};
  width: 6.5rem;
  height: 3.5rem;
  margin: 0 auto;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  font-size: 0.5rem;
  padding: 0.5rem;
  overflow: hidden;
  cursor: pointer;
    @media screen and (max-device-width: 900px){
     position: absolute;
     top: 14px;
    };

    @media screen and (max-device-width: 600px){
      display: none;
    };
  img {
    max-width: 2.5rem;
    height: auto;
    transition: all 0.3s linear;
    z-index: 2;

    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;