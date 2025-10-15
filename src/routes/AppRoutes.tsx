import { Routes, Route } from "react-router-dom";

// Components
import Layout from "../components/Layout";

// Views
import ClickCounterView from "../views/ClickCounterView";
import GeometryExplorer from "../views/GeometryExplorer";
import HomePage from "../views/HomePage";
import LayoutsView from "../views/LayoutsView";
import SettingsView from "../views/SettingsView";
import SpeechDemoView from "../views/SpeechDemoView";
import ThreeDemoView from "../views/ThreeDemoView";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="click" element={<ClickCounterView />} />
        <Route path="geometry" element={<GeometryExplorer />} />
        <Route path="layouts" element={<LayoutsView />} />
        <Route path="settings" element={<SettingsView />} />
        <Route path="three" element={<ThreeDemoView />} />
        <Route path="tts" element={<SpeechDemoView />} />
      </Route>
    </Routes>
  );
}
