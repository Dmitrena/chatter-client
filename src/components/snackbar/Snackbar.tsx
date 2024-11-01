import Button from '@mui/material/Button';
import SnackbarMui, { SnackbarCloseReason } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Fragment } from 'react/jsx-runtime';
import { useReactiveVar } from '@apollo/client';
import { snackVar } from '../../constants/snack';
import { Alert } from '@mui/material';

const Snackbar = () => {
  const snack = useReactiveVar(snackVar);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    snackVar(undefined);
  };

  const action = (
    <Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );

  return (
    <div>
      {snack && (
        <SnackbarMui
          open={!!snack}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Note archived"
          action={action}
        >
          <Alert
            onClose={handleClose}
            severity={snack.type}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {snack.message}
          </Alert>
        </SnackbarMui>
      )}
    </div>
  );
};

export default Snackbar;
