import React, { useReducer } from 'react'
import { Layout, Container } from './index.style'
import Icon from './Icon'
import DropZone from './DropZone'

interface DragState {
  isDrop: boolean
}

const defaulState: DragState = { isDrop: false }

enum ActionType {
  ON_DROP = 'ON_DROP',
}
interface OnDropAction {
  type: ActionType.ON_DROP
  payload: null
}

type Action = OnDropAction

function reducer(state: DragState, action: Action): DragState {
  switch (action.type) {
    case ActionType.ON_DROP:
      return { isDrop: true }
    default:
      throw new Error()
  }
}

const DnDPage = () => {
  const [state, dispatch] = useReducer(reducer, defaulState)

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    dispatch({ type: ActionType.ON_DROP, payload: null })
  }

  return (
    <Layout>
      <Container>
        <h1>drag and drop</h1>
        <main>
          <DropZone
            isDrop={state.isDrop}
            onDrop={(e) => onDrop(e)}
            massage="Drop Here!"
          />
          {state.isDrop ? null : <Icon />}
        </main>
      </Container>
    </Layout>
  )
}

export default DnDPage
