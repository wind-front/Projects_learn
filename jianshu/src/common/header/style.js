import styled from 'styled-components'
import logo from '../../static/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
  href: "/"
})`
  position: absolute;
  top:0;
  left:0;
  display:block;
  width:100px;
  height:56px;
  background: url(${logo});
  background-size: contain;
`
export const Nav = styled.div`
  width:960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`
export const NavItem = styled.div`
  padding: 0 15px;
  line-height: 56px;
  font-size: 17px;
  color: #333;
  font-size: 14px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
  }
  &.active {
    color: #ea6f5a;
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  box-sizing: border-box;
  width: 160px;
  height: 38px;
  font-size:14px;
  border: none;
  margin-top: 9px;
  padding: 0 20px;
  outline: none;
  border-radius: 19px;
  background: #eee;
  &::placeholder {
    color: #999;
  }
  .slide-enter {
    transition: all .2s ease-out;
  }
  .slide-enter-active {
    width: 240px;
  }
  .slide-exit {
    transition: all .2s ease-out;
  }
  .slide-exit-active {
    width: 160px;
  }
  &.focused {
    width: 240px;
  }
`
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  padding: 0 20px;
  cursor: pointer;
  &.reg {
    color: #ec6149
  }
  &.writting {
    background: #ec6149
    color: white;
  }
`