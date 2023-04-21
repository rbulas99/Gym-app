import { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { MantineProvider, createEmotionCache } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import { UserContext } from './context/userContext';

import Header from './components/Header';
import SelectUser from './components/SelectUser';

const myCache = createEmotionCache({
  key: 'mantine',
  prepend: false
});

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const userContext = useContext(UserContext);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      emotionCache={myCache}
      theme={{
        colorScheme: darkMode ? 'dark' : 'light',

      }}
    >
      <Notifications />
      <Header darkMode={darkMode} setDarkMode={() => setDarkMode(!darkMode)} />
      {userContext?.userId ? <Outlet /> :
        <SelectUser />}
    </MantineProvider>
  );
}

export default App;
