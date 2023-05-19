import React from 'react';

import { Box } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../../../app/store/store';
import { searchTodosSelector, selectFilteredTodos, selectFilterSelector } from '../../../../common/selectors';
import { CommonButton, SearchInput } from '../../../../shared';
import { changeFilterTodos, FilteredType, setSearch } from '../../todo-slice';

import { ReactComponent as DoneIcon } from './../../../../common/assets/icon/ico-done.svg';
import { filteredBtn, filteredSearchContainer, searchInput, useFilteredSearchStyle } from './filtered-search.style';

export const FilteredAndSearch = () => {
  const todos = useAppSelector(selectFilteredTodos);
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(searchTodosSelector);
  const filtered = useAppSelector(selectFilterSelector);

  const { filteredButton, fillIcon } = useFilteredSearchStyle();

  const filterTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    const DATA_SET = e.currentTarget.dataset.filter as FilteredType;

    DATA_SET && dispatch(changeFilterTodos(DATA_SET));
  };

  const setSearchHandler = (searchValue: string) => dispatch(setSearch(searchValue));

  return (
    <Box sx={filteredSearchContainer}>
      <SearchInput
        onChangeText={setSearchHandler}
        searchValue={searchValue}
        disabled={!searchValue && !todos.length}
        label="Search by text..."
        sx={searchInput}
      />
      <CommonButton
        variant={filtered === 'all' ? 'contained' : 'outlined'}
        sx={filteredBtn}
        data-filter="all"
        onClick={filterTodo}
      >
        All
      </CommonButton>
      <CommonButton
        onClick={filterTodo}
        data-filter="done"
        variant={filtered === 'done' ? 'contained' : 'outlined'}
        icon={<DoneIcon fill={fillIcon} />}
        sx={filteredButton}
      >
        Done
      </CommonButton>
    </Box>
  );
};
