import Router from "./router";
import TaskProvider from "./providers/task";

const App = () => (
  <>
    <TaskProvider>
      <Router />
    </TaskProvider>
  </>
);

export default App;
