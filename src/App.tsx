import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import './App.css';
import { DifferentVideosButtons } from './components/differentVids';
import { Footer } from './components/footer';
import { HeaderComponent } from './components/header';
import { VideoBox } from './components/videoBox';

const queryClient = new QueryClient();




function App() {
  const [currentVid, setCurrentVid] = useState<string>('bunny');

  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <div className="header-area">
        <HeaderComponent/>
      </div>
      <div className="buttons-area">
        <DifferentVideosButtons currentVid={currentVid} setCurrentVid={setCurrentVid}/>
      </div>
      <div className="video-area">
        <VideoBox vidName={currentVid} />
      </div>
      <Footer projectName={currentVid}/>
    </div>
    </QueryClientProvider>
  );
}

export default App;
