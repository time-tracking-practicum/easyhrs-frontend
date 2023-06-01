import { createRoot } from "react-dom/client";
import Header from "./components/Header";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Header />);