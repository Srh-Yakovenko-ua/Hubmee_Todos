import React, { ChangeEvent, FC, memo } from 'react';

import { Checkbox, SxProps, Theme } from '@mui/material';

type PropsType = {
  checked: boolean;
  sx: SxProps<Theme> | undefined;
  onChangeChecked: (checked: boolean) => void;
};
export const CustomCheckBox: FC<Partial<PropsType>> = memo(({ checked, onChangeChecked, sx, ...restProps }) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked;

    onChangeChecked?.(isChecked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={onChangeCallback}
      inputProps={{ 'aria-label': 'controlled' }}
      sx={{
        ...sx,
      }}
      {...restProps}
    />
  );
});
