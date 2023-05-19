import { createTheme } from '@mui/material'

export const theme = createTheme({
  typography: {
    allVariants: {
      color: '#000000',
      fontFamily: 'Roboto, sans-serif',
      fontSize: 14,
      lineHeight: '21px',
      textTransform: 'unset',
    },
  },
  palette: {
    primary: {
      main: '#5DCB42',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#F33A3D',
    },
    text: {
      primary: '#000000',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
          cursor: 'pointer',
          height: '43px',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          padding: '0px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '0 0 0 8px',
          height: '43px',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#C4C4C4',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 11,
          lineHeight: '16px',
          marginLeft: '0px',
          position: 'absolute',
          top: '45px',
        },
      },
    },
  },
})
