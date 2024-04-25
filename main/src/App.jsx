import React from 'react';
import { containerId } from './constants';

export default function App() {
  return (
    <div>
      <h1>Main App</h1>
      <main
        id={containerId}
        style={{
          position: 'absolute',
          left: '100px',
          top: '70px',
          width: '960px',
          height: '640px',
        }}
      />
    </div>
  );
}
