import TaskProvider from "./providers/task";
import ToastProvider from "./providers/toast";
import Router from "./router";

const App = () => (
  <>
    <ToastProvider>
      <TaskProvider>
        <Router />
      </TaskProvider>
    </ToastProvider>
  </>
);

export default App;
