import  Home  from './pages/Home';
import Publier from './pages/Publier';
import './App.css';
import{Routes , Route} from "react-router-dom";
import UserInformation from './pages/UserInformation';
import UserFavorites from './pages/UserFavorites';
import UserAnnounce from './pages/UserAnnounce';
import Detail from './pages/Detail';
import Authentification from './pages/Authentification';
import Announce from './pages/Announce';



function App() {
    return ( 
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/announce" element={<Publier/>} />
            <Route path="/UserInformation" element={<UserInformation/>} />
            <Route path="/UserFavorites" element={<UserFavorites/>} />
            <Route path="/UserAnnounce" element={<UserAnnounce/>} />
            <Route path="/DetailAnnounce" element={<Detail/>} />
            <Route path="/Login" element={<Authentification/>} />
            <Route path="/Article" element={<Announce/>} />
          
         



       
        </Routes>
);
}
export default App;