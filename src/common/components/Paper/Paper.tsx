import React, { FC, ReactNode } from 'react';

import { Box, Paper } from '@mui/material';

import { paperContainer, paperWrapper } from './paper.style';

export const PaperWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Paper sx={paperWrapper}>
      <Box sx={paperContainer}>{children}</Box>
    </Paper>
  );
};
