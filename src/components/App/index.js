import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as dotenv from 'dotenv';

dotenv.config();

const App = () => {
    return (
        <BrowserRouter>
            <header id="header" role="banner">
                {/* <Header /> */}
            </header>
            <main id='main' role="main">
                <Routes>
                    {/* <Route path="/" element={<Home />} /> */}
                </Routes>
            </main>
        </BrowserRouter>
    )
}
export default App;