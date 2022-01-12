import { 
  Route, 
  Routes 
} from "react-router-dom";

import TodoContextProvider from "./contexts/TodoContext";
import Wrapper from "./layouts/Wrapper";

import Home from "./pages/Home";

function App() {
  return (
    <TodoContextProvider>
      <Wrapper>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </Wrapper>
    </TodoContextProvider>
  );
}

export default App;