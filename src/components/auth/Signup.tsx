import { Link as MUILink } from '@mui/material';
import { Link } from 'react-router-dom';
import Auth from './Auth';

const Signup = () => {
  return (
    <Auth submitLabel="SignUp" onSubmit={async () => {}}>
      <Link to={'/login'} style={{ alignSelf: 'center' }}>
        <MUILink>Login</MUILink>
      </Link>
    </Auth>
  );
};

export default Signup;
