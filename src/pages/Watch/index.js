import Container from "../../components/Container";
import Footer from "../../components/Footer/Index";
import Header from "../../components/Header";
import "./Watch.css"

function Watch() {
    return (
        <div>
            <Header />
            <Container>
                <section className="watch">
                    <iframe width="854" height="480" src="https://www.youtube.com/embed/2y1qW_aH0gQ?si=qGTorjWbdBOwhnRz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </section>
            </Container>
            <Footer />
        </div>
    )
}

export default Watch;