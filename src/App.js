import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routers/Home";
import Detail from "./routers/Detail";
import GlobalStyle from "./GlobalStyle";
import { RecoilRoot } from "recoil";

function App() {
    return (
        <RecoilRoot>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <GlobalStyle />
                <Routes>
                    <Route path="/movie/:id" element={<Detail />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;
