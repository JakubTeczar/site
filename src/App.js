import { RouterProvider, createHashRouter } from 'react-router-dom';
import Main from './pages/Main';
import Root from './pages/Root';
import Prodix from './pages/Prodix';
import Calendar from './pages/Calendar';
import Zjadbyco from './pages/Zjadbyco';

// import Expenses from './components/Expenses/Expenses';

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    // errorElement: <ErrorPage />,
    id: 'root',
    // errorElement : <ErrorPage/>,
    // loader: tokenLoader,
    children :[
      {
        path: "",
        element : <Main/>,
      },
      {
        path: "prodix",
        element : <Prodix/>,
      },
      {
        path: "calendar",
        element : <Calendar/>,
      },
      {
        path: "zjadbyco",
        element : <Zjadbyco/>,
      },
      // {
      //   path: "zjadbyco",
      //   element : <Main/>,
      // }
    ]
  }]);
  
function App() {
  return <RouterProvider router={router} />;
}


export default App;
