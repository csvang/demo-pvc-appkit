import React from 'react';
import '@signalwire/app-kit';

function App() {

  return (
    <div className="App">
      <div>
        
        <sw-video-conference
          token="vpt_123...abc"
          user-name="Chue">
        </sw-video-conference>

      </div>
    </div>
  );
}

export default App;
