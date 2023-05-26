import {Suspense, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import jwt_decode from "jwt-decode";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contacts from "./pages/Contacts";
import Vacancy from "./pages/Vacancy";
import NotaFound from "./pages/NotaFound";
import "./styles/style.scss"
import "./utils/i18n"


function App() {




    return (
        <Suspense fallback={"loading..."}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="services" element={<Services/>}/>
                    <Route path="gallery" element={<Gallery/>}/>
                    <Route path="vacancy" element={<Vacancy/>}/>
                    <Route path="contacts" element={<Contacts/>}/>
                    <Route path="*" element={<NotaFound/>}/>


                </Route>

            </Routes>
        </Suspense>

    );
}

export default App;
