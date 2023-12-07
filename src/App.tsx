import ToastProvider from "./providers/toast";
import Router from "./router";

const App = () => (
  <>
    <ToastProvider>
        <Router />
    </ToastProvider>
  </>
);

export default App;
