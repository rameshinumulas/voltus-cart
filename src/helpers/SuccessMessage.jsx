import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function SuccessMessage({ successMsg }) {
  const varientObj = {
    open: true,
    vertical: 'top',
    horizontal: 'right',
  }
  return (
    <>
      <Snackbar
        anchorOrigin={varientObj}
        open
        autoHideDuration={2000}
        message={successMsg}
      >
        <Alert
          severity="success"
          variant="filled"
          // sx={{ width: '100%' }}
        >
          {successMsg}
        </Alert>
      </Snackbar>
    </>
  )
}
