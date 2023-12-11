import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import routes from '~react-pages'; // 일시적으로 뜨는 오류

// eslint-disable-next-line no-console
console.log(routes);

function App() {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
}

const app = createRoot(document.getElementById('root')!);

app.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);
