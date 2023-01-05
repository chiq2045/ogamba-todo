import { ChangeEventHandler } from 'react';
import { Link } from 'react-router-dom';

export const AppBar = ({
  handleSearch,
  searchValue,
}: {
  handleSearch: ChangeEventHandler;
  searchValue: string;
}) => {
  return (
    <nav className='header header-animated'>
      <div className='header-brand'>
        <div className='nav-item no-hover'>
          <Link to='/'>
            <h1 className='title text-xl'>To Do</h1>
          </Link>
        </div>
      </div>
      {/* <Box> */}
      {/*   <Flex align='center'> */}
      {/*     <Spacer /> */}
      {/*     <Box> */}
      {/*       <InputGroup> */}
      {/*         <InputLeftElement pointerEvents='none'> */}
      {/*           <SearchIcon /> */}
      {/*         </InputLeftElement> */}
      {/*         <Input */}
      {/*           variant='filled' */}
      {/*           onChange={handleSearch} */}
      {/*           value={searchValue} */}
      {/*         /> */}
      {/*       </InputGroup> */}
      {/*     </Box> */}
      {/*     <Spacer /> */}
      {/*     <Box> */}
      {/*       <Flex align='center'> */}
      {/*         <Box> */}
      {/*           <Menu> */}
      {/*             <MenuButton as={Button} rightIcon={<ChevronDownIcon />}> */}
      {/*               Sort By */}
      {/*             </MenuButton> */}
      {/*             <MenuList> */}
      {/*               <MenuItem>Date Due</MenuItem> */}
      {/*               <MenuItem>Recent</MenuItem> */}
      {/*               <MenuItem>Alphabetical</MenuItem> */}
      {/*             </MenuList> */}
      {/*           </Menu> */}
      {/*         </Box> */}
      {/*         <Box> */}
      {/*           <Spacer /> */}
      {/*           <Menu> */}
      {/*             <MenuButton as={Button} rightIcon={<ChevronDownIcon />}> */}
      {/*               Sort By */}
      {/*             </MenuButton> */}
      {/*             <MenuList> */}
      {/*               <MenuItem>Date Due</MenuItem> */}
      {/*               <MenuItem>Recent</MenuItem> */}
      {/*               <MenuItem>Alphabetical</MenuItem> */}
      {/*             </MenuList> */}
      {/*           </Menu> */}
      {/*         </Box> */}
      {/*         <Spacer /> */}
      {/*       </Flex> */}
      {/*     </Box> */}
      {/*     <Spacer /> */}
      {/*   </Flex> */}
      {/* </Box> */}
    </nav>
  );
};
