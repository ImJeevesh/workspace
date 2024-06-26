import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const WebRemote = React.lazy(() => import('web-remote/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/web-remote">WebRemote</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="web-platform" />} />
        <Route path="/web-remote" element={<WebRemote />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
