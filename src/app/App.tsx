import React from 'react'

import './App.css'
import { Box } from '@mui/material'

import { PaperWrapper } from '../common/components'
import { Modal } from '../features/modal'
import { TodoList } from '../features/todos'

import { appWrapper } from './app-style'

function App() {
  return (
    <>
      <Box sx={appWrapper}>
        <PaperWrapper>
          <TodoList />
        </PaperWrapper>
      </Box>
      <Modal />
    </>
  )
}

export default App
