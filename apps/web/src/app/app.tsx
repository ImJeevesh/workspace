import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const WebRemote = React.lazy(() => import('web-remote/Module'));

const WebContent = React.lazy(() => import('web-content/Module'));

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

        <li>
          <Link to="/web-content">WebContent</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="web" />} />

        <Route path="/web-remote" element={<WebRemote />} />

        <Route path="/web-content" element={<WebContent />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
