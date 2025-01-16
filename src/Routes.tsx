import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ClientsPage } from './pages/ClientsPage';
import App from './App';
import { ErrorPage } from './pages/ErrorPage';
import { EChartsDemoPage } from './pages/EChartsDemoPage';
import { VsixDemoPage } from './pages/VsixDemoPage';
import { PostsPage } from './pages/PostsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ClientsPage />,
      },
      { path: 'clients', element: <ClientsPage /> },
      { path: 'echarts', element: <EChartsDemoPage /> },
      {
        path: 'vsix',
        element: <VsixDemoPage width={1000.0} height={406.234375} />,
      },
      { path: 'posts', element: <PostsPage /> },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
