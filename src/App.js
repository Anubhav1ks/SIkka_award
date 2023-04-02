import Form from "./pages/form";
import { Routes,Route} from "react-router-dom";
import HOMEPAGE from "./pages/home/Index";

function App() {
  return (
    <>
       <Routes>
         <Route path="/*" element={<HOMEPAGE/>} />
         <Route path="/Register" element={<Form/>}/>
       </Routes>
    </>
  );
}

export default App;
