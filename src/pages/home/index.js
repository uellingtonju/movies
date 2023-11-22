import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Carouse from "../../components/Carousel";
import Category, {
  categories,
  filterCategory,
} from "../../components/Category";
import Footer from "../../components/Footer/Index";
import Header from "../../components/Header";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Container from "../../components/container";

function Home() {
  return (
    <div>
      <ScrollToTopButton />
      <Header />
      <Banner image="home" />
      <Container>
        {categories.map((category, index) => (
          <Category category={category}>
            <Carouse>
              {filterCategory(index).map((video) => (
                <Card id={video.id} key={video.id} />
              ))}
            </Carouse>
          </Category>
        ))}
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
