import SmoothScroll from "./utils/SmoothScroll";
import PageProvider from "./context/PageProvider";
import Nav from "./components/Nav";
import { css } from "../styled-system/css";
import Home from "./pages/Home";
import About from "./pages/About";
import FullPageCanvas from "./components/FullPageCanvas";

function App() {
  return (
    <>
      <SmoothScroll>
        <PageProvider>
          <div
            className={css({
              backgroundColor: "black",
              width: "100%",
            })}
          >
            <Nav />
            <Home />
            <About />
          </div>
        </PageProvider>
      </SmoothScroll>
      <FullPageCanvas />
    </>
  );
}

export default App;
