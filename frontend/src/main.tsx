import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { trpc } from './utils/trpc';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';

const queryClient = new QueryClient();

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: 'http://localhost:5000/trpc',
      fetch(url, options) {
        return fetch(url, {
          ...options,
          credentials: 'include', //  utile pour cookie auth
        });
      },
    }),
  ],
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </trpc.Provider>
  </React.StrictMode>
);
