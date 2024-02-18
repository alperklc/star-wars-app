import { Route, Switch } from "wouter";
import { getListPage } from "./pages/list";
import { MainPage } from "./pages/mainPage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={MainPage} />

        <Route path="/films" component={getListPage("films")} />
        <Route path="/people" component={getListPage("people")} />
        <Route path="/planets" component={getListPage("planets")} />
        <Route path="/species" component={getListPage("species")} />
        <Route path="/starships" component={getListPage("starships")} />
        <Route path="/vehicles" component={getListPage("vehicles")} />

        <Route>404: No such page!</Route>
      </Switch>
    </>
  )
}

export default App
