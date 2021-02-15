import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';

const TopNav = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const LogoDiv = styled.div`
    img {
        width: 180px;
    }
`;

const LinksList = styled.ul`
    display: flex;
    margin: 0;
    float: right;
    padding: 11px 0;
    li {
        list-style: none;
        a {
            cursor: pointer;
            padding: 0 10px;
            color: black;
            text-decoration: none;

            &:hover {
                color: #9f07a9;
            }
        }
    }
`;

const Header = () => {
  return (
    <TopNav>
        <LogoDiv>
            <img src={logo} alt="logo"/>
        </LogoDiv>
        <LinksList>
            <li><a href="#item1">Item 1</a></li>
            <li><a href="#item2">Item 2</a></li>
            <li><a href="#item3">Item 3</a></li>
        </LinksList>
    </TopNav>
  )
};

export default Header;
