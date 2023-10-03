import { useRoutes } from "react-router-dom";
import ThemeProvider from "./theme";
import routes from "./routes";

function App() {
  const routing = useRoutes(routes);

  return (
    <>
      <ThemeProvider>{routing}</ThemeProvider>
    </>
  );
}

export default App;
