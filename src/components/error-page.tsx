import { useNavigate, useRouteError } from 'react-router-dom';
import { ErrorResponse } from '@remix-run/router';
import { Button } from './button';

export const ErrorPage = () => {
  const error = useRouteError() as ErrorResponse & Error;
  const navigate = useNavigate();

  return (
    <div className='toast toast--gray'>
      <Button className='btn-close' />
      <h2 className='toast__title'>Error</h2>
      <p>An Error has Occured</p>
      <p>{error.statusText || error.message}</p>
      <Button onPress={() => navigate('..')} className='btn-link'>
        Go Back
      </Button>
    </div>
  );
};
