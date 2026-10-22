import { createFileRoute } from "@tanstack/react-router";
import App from "../App";
export default App;
export const Route = createFileRoute("/")({ component: App });
