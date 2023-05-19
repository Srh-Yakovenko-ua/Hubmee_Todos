import { useTheme } from '@mui/material';

export const useFilteredSearchStyle = () => {
  const theme = useTheme();

  const fillIcon = theme.palette.primary.main;
  const filteredButton = {
    color: theme.palette.text.primary,
    svg: {
      fill: theme.palette.primary.main,
    },
    '&:hover': {
      svg: {
        fill: theme.palette.primary.contrastText,
      },
    },
    width: '87px',
  };

  return { fillIcon, filteredButton };
};
export const filteredBtn = {
  width: '87px',
};

export const filteredSearchContainer = {
  display: 'flex',
  gap: '10px',
};
export const searchInput = {
  width: '60%',
};
