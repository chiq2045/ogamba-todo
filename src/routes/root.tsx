import { AppBar } from 'src/components/app-bar';
import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <div>
      <header>
        <AppBar />
      </header>
      <main className='content'>
        <Outlet />
      </main>
    </div>
  );
};
