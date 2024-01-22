import {BrowserRouter, Routes, Route} from "react-router-dom";
import Masuk from "./pages/Masuk";
import Daftar from "./pages/Daftar";
// import Home from "./pages/Home";
import Kepala from "./pages/Kepala";
import Tentang from "./pages/Tentang";
import Dasboards from "./pages/Dashboards";
import Homes from "./pages/Homes";
import UserInfos from "./pages/UserInfos";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* <Route path ="/" element={<Home/>}/> */}
        <Route path ="/kepala" element={<Kepala/>}/>
        <Route path= "/tentang" element={<Tentang/>}/>
        <Route path ="/masuk" element={<Masuk/>}/>
        <Route path = "/daftar" element={<Daftar/>}/>
        <Route path="/dashboard" element={<Dasboards/>}/>
        <Route path="/home" element={<Homes/>}/>
        <Route path="/userinfo" element={<UserInfos/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
