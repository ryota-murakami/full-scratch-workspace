import React, { Component } from 'react'
import {
  Container,
  Header,
  LinkContainer,
  HeaderContainer
} from './index.style'
import { Link } from '../../components/Link'

class Index extends Component {
  render() {
    return (
      <Container>
        <HeaderContainer>
          <Header>Hooks</Header>
        </HeaderContainer>
        <LinkContainer>
          <Link to="/useReducer">・useReducer</Link>
        </LinkContainer>
      </Container>
    )
  }
}

export default Index
