import { RouterProvider } from 'react-router-dom'
import routerComponent from "./routers/Mainrouter";
import 'bootstrap/dist/css/bootstrap.min.css';
import'./App.css'



function App() {
  return (
    <>
      <RouterProvider router={routerComponent} />
    </>
  );
}

export default App