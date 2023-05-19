import React, { FC, useState } from 'react'

import { Box, Typography } from '@mui/material'

import { CustomCheckBox } from '../../../../shared'
import { Todo } from '../../todo-slice'
import { DropDownMenuTodo } from '../dropdown-menu-todo/DropDownMenuTodo'

import { todoItemContainer, todoItemTextContainer, todoItemWrapper } from './todo-item.style'

type PropsType = Todo & {
  changeStatusTask: (checked: boolean, todoId: string) => void
}

export const TodoItem: FC<PropsType> = ({ text, id, checkedStatus, changeStatusTask }) => {
  const [mouseHover, setMouseHover] = useState(false)

  const onChangeStatusHandler = (checked: boolean) => changeStatusTask(checked, id)

  const mouseEnterHandler = () => setMouseHover(true)
  const mouseLeaveHandler = () => setMouseHover(false)

  return (
    <Box onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} sx={todoItemWrapper}>
      <Box sx={todoItemContainer}>
        <CustomCheckBox checked={checkedStatus} onChangeChecked={onChangeStatusHandler} />
        <Box sx={todoItemTextContainer}>
          <Typography
            component="span"
            sx={{
              fontWeight: 'bold',
              textDecoration: checkedStatus ? 'line-through' : '',
            }}
          >
            {text}
          </Typography>
        </Box>
      </Box>

      {mouseHover && <DropDownMenuTodo id={id} />}
    </Box>
  )
}
