import { useState } from 'react';

import Header from './components/header/Header';
import Home from './components/sections/Home';
import About from './components/sections/about/About';
import Skills from './components/sections/skills/Skills';
import Resume from './components/sections/Resume';

function App() {

  const [selectedTab, setSelectedTab] = useState('home');

  return (
    <>
      <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <main>
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8 dark:text-white">
          {selectedTab === 'home' && <Home setSelectedTab={setSelectedTab}/>}
          {selectedTab === 'about' && <About />}
          {selectedTab === 'skill' && <Skills />}
          {selectedTab === 'resume' && <Resume />}
        </div>
      </main>
    </>
  )
}

export default App
