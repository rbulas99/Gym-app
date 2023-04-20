import { ActionIcon, Button, Header as MantineHeader } from '@mantine/core';
import { GiMuscleUp, GiMoon,  } from 'react-icons/gi';
import { BsFillSunFill } from "react-icons/bs";



const Header: React.FC<{ darkMode: boolean; setDarkMode: () => void; }> = ({ darkMode, setDarkMode }) => {

  return (
    <MantineHeader height={'4em'} className='flex items-center justify-between p-2 lg:px-16'>
      <div className='flex'>

        <GiMuscleUp size="1.5em" /> GYM-APP
      </div>
      <div>
        <nav>
          <ul className='flex gap-2 md:gap-4 lg:gap-16'>
            <li><Button variant='subtle' color='dark'>Home</Button></li>
            <li><Button variant='subtle' color='dark'>History</Button></li>
            <li><Button variant='subtle' color='dark'>New Workout</Button></li>
            <li><Button variant='subtle' color='dark'>Edit User</Button></li>
          </ul>
        </nav>
      </div>
        <ActionIcon
          variant="subtle"
          color={darkMode ? 'yellow' : 'dark'}
          onClick={() => setDarkMode()}
          title="Toggle color scheme"
        >
          {darkMode ? <BsFillSunFill/>: <GiMoon/>}
        </ActionIcon>

    </MantineHeader>
  );
};
export default Header;