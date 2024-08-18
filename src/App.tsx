import { RouterProvider } from 'react-router-dom'
import routerComponent from "./routers/Mainrouter";



function App() {
  return (
    <>
      <RouterProvider router={routerComponent} />
    </>
  );
}

export default App