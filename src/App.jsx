import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayOut from "./LAYOUTS/MainLayOut";
import HomePage from "./PAGES/HomePage";
import PlanmateEventsPage from "./PAGES/PlanmateEventsPage";
import ServiceProvidersPage from "./PAGES/ServiceProvidersPage";
import AboutPage from "./PAGES/AboutPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayOut />}>
      <Route index element={<HomePage />} />
      <Route path="/planmate-event" element={<PlanmateEventsPage />} />
      <Route path="/service-providers" element={<ServiceProvidersPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
