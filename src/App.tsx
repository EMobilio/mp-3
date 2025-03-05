import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import styled from 'styled-components';
import Header from './components/Header';
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import Education from "./components/pages/Education";
import Experience from "./components/pages/Experience";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
import References from "./components/pages/References";


// wrapper div for whole app
const SiteWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    font-family: Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif;
`;

// container div for column layout with nav/main
const Container = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`;

// root component
function Root() {
    return (
        <SiteWrapper>
            <Header />
            <Container>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/education" element={<Education />}/>
                    <Route path="/experience" element={<Experience />}/>
                    <Route path="/projects" element={<Projects />}/>
                    <Route path="/skills" element={<Skills />}/>
                    <Route path="/references" element={<References />}/>
                </Routes>
            </Container>
            <Footer />
        </SiteWrapper>
    );
}

// router for the app
const router = createBrowserRouter(
    [{path:"*", Component: Root}]
);

// app component which returns the router provider
function App() {
  return (
      <>
        <RouterProvider router={router}/>
      </>
  );
}

export default App
