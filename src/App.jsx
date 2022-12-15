import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";
import { LogoutLink } from "./LogoutLink";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <LogoutLink />
      <Footer />
    </div>
  );
}

export default App;
