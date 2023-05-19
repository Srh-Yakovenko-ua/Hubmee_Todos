import React, { FC, forwardRef, memo } from 'react';

import { FilledTextFieldProps, OutlinedTextFieldProps, StandardTextFieldProps, TextField } from '@mui/material';

export const Input: FC<FilledTextFieldProps | OutlinedTextFieldProps | StandardTextFieldProps> = memo(
  forwardRef(({ type = 'text', sx, error, helperText, label, value, ...restProps }, ref) => {
    return (
      <TextField
        type={type}
        sx={{
          ...sx,
        }}
        value={value}
        variant="outlined"
        error={error}
        label={label}
        helperText={helperText}
        ref={ref}
        {...restProps}
      />
    );
  }),
);
