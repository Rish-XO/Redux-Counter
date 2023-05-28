import { Fragment } from "react";
import Counter from "./components/Counter";
import Auth from "./components/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <Auth />
      <Counter />
    </Fragment>
  );
}

export default App;
