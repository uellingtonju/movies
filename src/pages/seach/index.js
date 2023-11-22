import Footer from "../../components/Footer/Index";
import Header from "../../components/Header";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import SeachList from "../../components/SeachList";
import Container from "../../components/container";
import videos from "../../json/videos.json";
import "./Seach.css";

function Seach() {
  return (
    <div>
      <ScrollToTopButton />
      <Header />
      <Container>
        <section className="seach">
          <SeachList videos={videos} />
        </section>
      </Container>
      <Footer />
    </div>
  );
}

export default Seach;
