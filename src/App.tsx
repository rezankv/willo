import Router from "./router";

// ** providers
import { ToastProvider } from "@providers";

const App = () => (
  <>
    <ToastProvider>
      <Router />
    </ToastProvider>
  </>
);

export default App;
