import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Flights from './components/Flights';
import NotFoundPage from 'components/prime-components/NotFoundPage';
import Header from 'components/prime-components/Header';
import Reservations from 'components/Reservations';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Flights />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/reservations',
    element: <Reservations />,
    errorElement: <NotFoundPage />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
