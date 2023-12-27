import Router from "./router";

// ** providers
import { ToastProvider } from "@providers";

// ** components
import { Head } from "@components";

const App = () => (
  <>
    <Head title="Willo"/>
    <ToastProvider>
      <Router />
    </ToastProvider>
  </>
);

export default App;
