import { Route, Switch } from "wouter";
import { ListPage } from "./pages/list";
import { MainPage } from "./pages/mainPage";
import { resourceTypes, resourcesMap } from "./data";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={MainPage} />

        {resourceTypes.map((item) => (
          <Route path={resourcesMap[item].route} component={
            () => <ListPage resourceType={item} />
          } />
        ))}

        <Route>404: No such page!</Route>
      </Switch>
    </>
  )
}

export default App
