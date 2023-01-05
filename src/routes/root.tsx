import { ChangeEventHandler, useState } from 'react';
import { AppBar } from 'src/components/app-bar';

export const Root = () => {
  const [searchValue, setSeachValue] = useState('');

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSeachValue(e.target.value);
  };

  console.log(searchValue);

  return (
    <div>
      <header>
        <AppBar handleSearch={handleSearch} searchValue={searchValue} />
      </header>
      <main className='content'>
        <div>
          <ul>
            <li>To Do 1</li>
          </ul>
        </div>
      </main>
    </div>
  );
};
