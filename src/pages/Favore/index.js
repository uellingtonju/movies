import "./favorites.css";
import Header from "../../components/Header";
import Container from "../../components/container";
import Footer from "../../components/Footer/Index";

function Favorites() {
  return (
    <div>
      <Header />
      <Container>
        <section className="favoritos">
          <h2>Meus Favoritos</h2>
          lista de Favoritos
        </section>
      </Container>
      <Footer />
    </div>
  );
}

export default Favorites;
