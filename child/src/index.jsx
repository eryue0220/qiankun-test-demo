import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  useEffect(() => {
    window.initTest = function() {};
    console.log('sub::', window, window.initGeetest4, window.initTest);
  }, []);

  return (
    <div>
      <h2>Child App</h2>
    </div>
  );
}

function render(props = {}) {
  const { container } = props;
  const root = createRoot(
    container ? container.querySelector('#app') : document.querySelector('#app')
  );
  root.render(<App />);
}


if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(props) {
  console.log('mount::', props);
  render();
}

export async function unmount(props) {
  console.log('unmount::', props);
}
