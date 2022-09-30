import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Portal from "../pages/Portal";
import LandingPage from "../pages/LandingPage";
import Empresas from "../pages/Empresas";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/cadastro">
        <Cadastro />
      </Route>
      <Route path="/portal">
        <Portal />
      </Route>
      <Route path="/empresas">
        <Empresas />
      </Route>
    </Switch>
  );
};

export default Routes;
