import React from 'react';
import styled from 'styled-components';
import config from '../Configuration/Config';
import { media } from '../Configuration/media';

const HeaderWrapper: any = styled.header`
  position: relative;
  background: url(${(props: any) => props.banner}) no-repeat;
  background-size: cover;
  padding: 8rem 2rem 10rem;
  text-align: center;
  background-position-y: 70%;
  ::after {
    background: transparent url(/assets/mask.svg) no-repeat bottom center;
    background-size: 101%;

    bottom: -2px;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
  }
  @media ${media.tablet} {
    padding: 4rem 2rem 6rem;
  }
  @media ${media.phone} {
    padding: 1rem 0.5rem 2rem;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 999;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  a {
    color: white;
    &:hover {
      opacity: 0.85;
      color: white;
    }
  }
`;

interface Props {
  children: any;
  banner?: string;
}

export class Header extends React.PureComponent<Props> {
  public render() {
    return (
      <HeaderWrapper banner={this.props.banner || config.defaultBg}>
        <Content>{this.props.children}</Content>
      </HeaderWrapper>
    );
  }
}
