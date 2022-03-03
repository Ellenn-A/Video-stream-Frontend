import React, { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import './App.css';
import { DifferentVideosButtons } from './components/differentVids';
import { Footer } from './components/footer';
import { HeaderComponent } from './components/header';
import { VideoBox } from './components/videoBox';
import { VideoPlayer } from './components/videoPlayer/videoPlayer';
import { getAllVideos } from './helpers/allVids.helper';
import { IVidInfo } from './types/types';

const queryClient = new QueryClient();




function App() {
  //get info from the backend 
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <div className="header-area">
        <HeaderComponent/>
      </div>
      <VideoPlayer />
    </div>
    </QueryClientProvider>
  );
}

export default App;
