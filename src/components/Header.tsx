import { ActionIcon, Button, Header as MantineHeader, createStyles } from '@mantine/core';

import { GiMuscleUp, GiMoon, } from 'react-icons/gi';
import { BsFillSunFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/Ai";
import { FiLogOut } from "react-icons/fi";
import { BsFillCalendar2WeekFill, BsFillPlusSquareFill } from "react-icons/bs";

import { useNavigate } from 'react-router-dom';

const useStyles = createStyles(() => ({
  navItem: {
    display: "flex",
    alignItems: 'center',
    padding: "2rem",
    [`@media (max-width: 720px)`]: {
      padding: '0',
    },
  },
  currentItem: {
    display: "flex",
    alignItems: 'center',
    borderBottom: "2px solid",
    padding: "2rem",
    [`@media (max-width: 720px)`]: {
      padding: '0',
    }
  }
}));

const Header: React.FC<{ darkMode: boolean; setDarkMode: () => void; }> = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();
  const { classes } = useStyles();

  return (
    <MantineHeader height={'4em'} className='sticky flex items-center justify-between px-6 lg:px-16'>
      <div className='flex'>

        <GiMuscleUp size="1.5em" /> <p className='hidden md:block'>GYM-APP</p>
      </div>
      <div className='h-full '>
        <nav className='h-full flex justify-end '>
          <ul className='flex'>
            <li className={window.location.pathname === "/" ? classes.currentItem : classes.navItem}>
              <Button variant='subtle' color='dark' onClick={() => navigate('/')}>
                <div className='flex flex-col item-center items-center'>
                  <AiFillHome size='1rem' /><p className='hidden lg:block'>Home</p>
                </div>
              </Button>
            </li>
            <li className={window.location.pathname === "/history" ? classes.currentItem : classes.navItem}>
              <Button variant='subtle' color='dark' onClick={() => navigate('/history')}>
                <div className='flex flex-col item-center items-center'>
                  <BsFillCalendar2WeekFill size='1rem' /><p className='hidden lg:block'>History</p>
                </div>
              </Button>
            </li>
            <li className={window.location.pathname === "/new-workout" ? classes.currentItem : classes.navItem}>
              <Button variant='subtle' color='dark' onClick={() => navigate('/new-workout')}>
                <div className='flex flex-col item-center items-center'>
                  <BsFillPlusSquareFill size='1rem' /><p className='hidden lg:block'>Add Workout</p>
                </div>
              </Button>
            </li>
            <li className={window.location.pathname === "/edit-user" ? classes.currentItem : classes.navItem}>
              <Button variant='subtle' color='dark' onClick={() => navigate('/edit-user')}>
                <div className='flex flex-col item-center items-center'>
                  <FiLogOut size='1rem' /><p className='hidden lg:block'>Change User</p>
                </div>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
      <ActionIcon
        variant="subtle"
        color={darkMode ? 'yellow' : 'blue'}
        onClick={() => setDarkMode()}
        title="Toggle color scheme"
      >
        {darkMode ? <BsFillSunFill size='1.5rem' /> : <GiMoon size='1.5rem' />}
      </ActionIcon>

    </MantineHeader>
  );
};
export default Header;