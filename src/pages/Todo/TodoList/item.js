import React, { Fragment } from 'react'
import { Text } from '../../../components/Text'

export const Item = props => (
  <Fragment>
    <Text>{props.todo.text}</Text>
  </Fragment>
)
