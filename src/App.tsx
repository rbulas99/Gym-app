
import './App.css';
import { useState } from 'react';

import { MantineProvider, createEmotionCache } from '@mantine/core';
import Header from './components/Header';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const myCache = createEmotionCache({
    key: 'mantine',
    prepend: false
  });



  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={myCache}
        theme={{
          colorScheme: darkMode ? 'dark' : 'light',

        }}
      >
        <Header setDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
        <main>
          
        </main>
      </MantineProvider>
    </>
  );
}

export default App;
