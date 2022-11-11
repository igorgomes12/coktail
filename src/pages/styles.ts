import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid;
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(#006ded 0%, #1bace2 34.48%, #00e2ed 100%)
    
    
    
`
export const Navbar = styled.nav`
    position:static;
   color: #000
`
export const Lista = styled.li`
    display: inline-block;
    
`
export const Home = styled.a`
    text-decoration: none;
    display: inline-block;
    color: #ffff;
    font-family: Righteous, Raleway, sans-serif;
    font-weight: lighter;
    font-size: 28px;
    padding: 0 20px;

`
export const Hover = styled.ul`
    display: block;
    width: 0;
    height: 2px;
    background: #fff;
    transition: width 0.3s;
`


export const Text = styled.h1 `
    color:#000;
    font-size: 35px;
    font-weight: bold;
    text-align:justify;
    text-align: center;
    
`
export const Logo = styled.img`
    width: 300px;
    height: 300px;
    border: 2px solid #000;
    border-radius: 25px;
`
export const Text1 = styled.p`
    color:#000;
    font-size: 35px;
    font-weight: 500;
    justify-content: center;
    margin-left: 20px;
`
export const Input = styled.input`
    &:hover {
        background-color:#58f5ed;
    }
    ::placeholder{
        color: #000;
    }
    border: none;
    background: papayawhip;
    border-radius: 3px;
    padding: 2px;
    margin:1px;
    font-weight:bold;
    font-size:30px;
    
`
export const Botao = styled.button`
    height: 40px;
    width: 80px;
    margin-top: 10px ;
    display: inline-block;
    border: 2px solid #000;
    padding: 0.25px 1px;
`
