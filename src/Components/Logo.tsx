import React from 'react';
import styled, { ThemedStyledComponentsModule, ThemedStyledProps } from 'styled-components';
import config from '../Configuration/Config';

interface ILogoProps extends ThemedStyledProps<React.HTMLProps<React.HTMLAttributes<HTMLDivElement>>, HTMLDivElement> {
  light?: boolean;
}

const Logo = styled.div`
  background-image: url(${(props: ILogoProps) => (props.light ? config.siteLogoLight : config.siteLogo)});
  width: 400px;
  height: 100px;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Logo;
