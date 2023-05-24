import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import "./styles/style.scss"
import "./utils/i18n"
import {Formik} from "formik";



function App() {
    return (
<Suspense fallback={"loading..."}>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="home" element={<Home/>}/>




            </Route>

        </Routes>
</Suspense>

    );
}

export default App;
