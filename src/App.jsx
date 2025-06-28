import { useState } from 'react';

import Header from './components/header/Header';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Resume from './components/sections/Resume';

function App() {

  const [selectedTab, setSelectedTab] = useState('home');

  return (
    <>
      <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <main>
        <div className="px-4 pt-6 pb-1.5 mx-auto max-w-7xl sm:px-6 lg:px-8 dark:text-white">
          {selectedTab === 'home' && <Home setSelectedTab={setSelectedTab}/>}
          {selectedTab === 'about' && <About />}
          {selectedTab === 'resume' && <Resume />}
        </div>
      </main>
    </>
  )
}

export default App
