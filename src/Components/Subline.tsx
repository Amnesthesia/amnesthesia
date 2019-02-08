import styled from 'styled-components';

interface ISublineProps {
  theme: {
    fontSize: {
      small: number;
      big: number;
    };
    colors: {
      white: string;
      grey: {
        light: string;
      };
    };
  };
  sectionTitle: string;
  light: boolean;
}

export const Subline: any = styled.div`
  font-size: ${(props: ISublineProps) => props.theme.fontSize.small};
  background-color: #222222;
  padding-left: 10px;
  padding-right: 10px;
  color: ${props => props.theme.colors.white};
  ${(props: ISublineProps) => props.sectionTitle && 'text-align: center'};

  a {
    color: white;
    font-weight: bold;
  }
`;
