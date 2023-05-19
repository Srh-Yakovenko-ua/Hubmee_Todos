import React, { ChangeEvent, FC, memo, useEffect, useState } from 'react';

import { StandardTextFieldProps } from '@mui/material';

import { useDebounce } from '../../common/hooks';

import { Input } from './Input';

type SearchInputPropsType = StandardTextFieldProps & {
  label?: string;
  searchValue: string;
  onChangeText?: (value: string) => void;
};

export const SearchInput: FC<SearchInputPropsType> = memo(({ searchValue, onChangeText, sx, ...restProps }) => {
  const [value, setValue] = useState(searchValue);
  const debouncedValue = useDebounce(value, 500);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  useEffect(() => {
    if (value === searchValue) return;
    setValue(searchValue);
  }, [searchValue]);

  useEffect(() => {
    onChangeText?.(debouncedValue);
  }, [debouncedValue]);

  return (
    <Input
      value={value}
      autoComplete="off"
      onChange={onChangeHandler}
      sx={{
        ...sx,
      }}
      {...restProps}
    />
  );
});
