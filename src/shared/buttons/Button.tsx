import React, { FC, memo, KeyboardEvent, DetailedHTMLProps, ButtonHTMLAttributes, MouseEvent } from 'react';

import { Button, ButtonProps, styled } from '@mui/material';

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  svg: {
    transition: 'all 0.4s ease-out',
  },
  '&.MuiButton-outlined': {
    '&:hover': {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
  '&.MuiButton-contained': {
    svg: {
      fill: theme.palette.primary.contrastText,
    },
    color: theme.palette.primary.contrastText,
  },
}));

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type SuperButtonPropsType = DefaultButtonPropsType &
  ButtonProps & {
    callback?: () => void;
    onKeyDownCallBack?: () => void;
    icon?: any;
  };

export const CommonButton: FC<SuperButtonPropsType> = memo(
  ({
    type = 'button',
    sx,
    variant = 'contained',
    children,
    callback,
    disabled,
    onKeyDownCallBack,
    icon,
    ...restProps
  }) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      callback?.();
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === 'Enter') {
        event.stopPropagation();
        onKeyDownCallBack?.();
      }
    };

    return (
      <CustomButton
        type={type}
        variant={variant}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        startIcon={icon}
        sx={{
          ...sx,
        }}
        {...restProps}
      >
        {children}
      </CustomButton>
    );
  },
);
