import Banner from "./components/Banner";
import Footer from "./components/Footer/Index";
import Header from "./components/Header";
import Container from "./components/container";

function App() {
  return (
   <div>
    <Header />
    <Banner />
    <Container>
        <h1>Helow World</h1>
        <p>Estou aprendendo react</p>
    </Container>
    <Footer/>
   </div>
  );
}

export default App;
