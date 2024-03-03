import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Calculator from "./pages/Calculator";
import IfThePerson from "./pages/IfThePerson";
import ExchangeEventStreamPage from "./pages/ExchangeEventStreamPage";
import HuntsEventStreamPage from "./pages/HuntsEventStreamPage";
import AfterStart from "./pages/AfterStart";
import LoginPage from "./pages/LoginPage";
import Events from "./pages/Events";
import Map1 from "./pages/Map1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/leaderboard":
        title = "";
        metaDescription = "";
        break;
      case "/settings":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/calculator":
        title = "";
        metaDescription = "";
        break;
      case "/if-the-person-clicks-the-kg-widget-then-it-leads-to-a-calculator-page-where-they-can-log-the-weight-using-the-calculator-or-just-putting-in-the-number":
        title = "";
        metaDescription = "";
        break;
      case "/exchange-event-stream-page":
        title = "";
        metaDescription = "";
        break;
      case "/hunts-event-stream-page":
        title = "";
        metaDescription = "";
        break;
      case "/after-start":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/events":
        title = "";
        metaDescription = "";
        break;
      case "/map":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route
        path="/if-the-person-clicks-the-kg-widget-then-it-leads-to-a-calculator-page-where-they-can-log-the-weight-using-the-calculator-or-just-putting-in-the-number"
        element={<IfThePerson />}
      />
      <Route
        path="/exchange-event-stream-page"
        element={<ExchangeEventStreamPage />}
      />
      <Route
        path="/hunts-event-stream-page"
        element={<HuntsEventStreamPage />}
      />
      <Route path="/after-start" element={<AfterStart />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/events" element={<Events />} />
      <Route path="/map" element={<Map1 />} />
    </Routes>
  );
}
export default App;
