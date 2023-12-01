import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./Theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`App ${theme}`}>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
