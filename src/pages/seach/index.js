import Footer from "../../components/Footer/Index";
import Header from "../../components/Header";
import SeachList from "../../components/SeachList";
import Container from "../../components/container";
import videos from "../../json/videos.json"
import "./Seach.css"

function Seach() {
    return(
        <div>
            <Header />
            <Container>
                <section className="seach">
                    <h2>Pesquisar</h2>
                    <SeachList videos={videos}/>
                </section>
            </Container>
            <Footer />
        </div>
    )
}

export default Seach;