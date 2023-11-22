import "./favorites.css";
import Header from "../../components/Header";
import Container from "../../components/container";
import Footer from "../../components/Footer/Index";
import VideoList from "../../components/VideoList";
import { useFavoriteContext } from "../../components/contexts/Favorites";
import ScrollToTopButton from "../../components/ScrollToTopButton";

function Favorites() {
  const { favorite } = useFavoriteContext();
  return (
    <div>
      <ScrollToTopButton />
      <Header />
      <Container>
        <section className="favoritos">
          <h2>Meus Favoritos</h2>
          {<VideoList videos={favorite} emptyHeading="🤔Sem Favoritos🤔" />}
        </section>
      </Container>
      <Footer />
    </div>
  );
}

export default Favorites;
