import { ToastContainer } from "react-toastify";
import Spinner from "./components/Spinner";
import useLoading from "./hooks/useLoading";

import Router from "./routes/Router";

export default function App() {
  const { loading } = useLoading();
  return (
    <>
      {loading && <Spinner />}
      <Router />;
      <ToastContainer
        position='top-right'
        autoClose={3000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  );
}
