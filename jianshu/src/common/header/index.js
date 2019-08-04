import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch,
  Addition, Button} from './style';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux';
import { constants } from './store';

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right">Aa</NavItem>
          <CSSTransition
            in={this.props.focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch 
              className={this.props.focused ? "focused" : ''}
              onFocus={this.props.handleFocus}
              onBlur={this.props.handleBlur}>
            </NavSearch>
          </CSSTransition>
          <Addition>
            <Button className="writting">写文章</Button>
            <Button className="reg">注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.get('focused')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus() {
      dispatch({ type: constants.Search_focues })
    },
    handleBlur() {
      dispatch({ type: constants.Search_blur })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);