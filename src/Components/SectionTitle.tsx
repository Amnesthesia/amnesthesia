import styled from 'styled-components';

export const SectionTitle: any = styled.div`
  font-size: ${props => props.theme.fontSize.big};
  text-transform: ${(props: any) => (props.uppercase ? 'uppercase' : 'normal')};
  text-align: center;
  font-family: Trueno;
  color: ${props => props.theme.colors.white};
  color: #ffffff;
  padding-left: 25px;
  padding-right: 25px;
  background-color: #222222;
  position: relative;
  margin-top: 2rem;
  margin-bottom: 2rem;
  &:after {
    content: '';
    height: 1px;
    width: 50px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -25px;
    background: ${props => props.theme.colors.white};
  }
`;
