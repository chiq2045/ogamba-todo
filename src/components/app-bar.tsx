import { Link } from 'react-router-dom';

export const AppBar = () => {
  return (
    <nav className='header header-animated'>
      <div className='header-brand'>
        <div className='nav-item no-hover'>
          <Link to='/'>
            <h1 className='title text-xl'>To Do</h1>
          </Link>
        </div>
        <div className='nav-item nav-btn'>
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
};
