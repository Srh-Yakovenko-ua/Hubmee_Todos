import React, { FC, useState } from 'react';

import { EditOutlined } from '@mui/icons-material';
import { Box, IconButton, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from '@mui/material';

import { useModalController } from '../../../../common/hooks';
import { MODAL_TYPE } from '../../../modal/modal-slice';
import { Todo } from '../../todo-slice';

import { ReactComponent as DeleteIcon } from './../../../../common/assets/icon/hover.svg';
import { ReactComponent as MenuIcon } from './../../../../common/assets/icon/more_vert.svg';

export const DropDownMenuTodo: FC<Pick<Todo, 'id'>> = ({ id }) => {
  const { openModal } = useModalController();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Box>
        <Tooltip title="todo settings" placement="top">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'todos-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="todos-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => openModal(MODAL_TYPE.edit, 'Edit Task', id)}>
          <ListItemIcon>
            <EditOutlined fontSize="small" />
          </ListItemIcon>
          <Typography component="p">Edit</Typography>
        </MenuItem>
        <MenuItem onClick={() => openModal(MODAL_TYPE.delete, 'Delete Todo', id)}>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <Typography component="p">Delete</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};
