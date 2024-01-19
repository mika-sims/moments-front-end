import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home Page</h1>} />
          <Route path="/signin" render={() => <h1>Sign In</h1>} />
          <Route path="/signup" render={() => <h1>Sign Up</h1>} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
