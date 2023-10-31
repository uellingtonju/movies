import Footer from "../../components/Footer/Index";
import Header from "../../components/Header";
import "./PageNotFound.css";
import erro404 from './erro404.png'

function PageNotFound(){
    return (
        <div>
            < Header />
            <section className="errado">
                <h2>Ops! Conteúdo não localizado!</h2>
                <img src={erro404} alt="Logo de Pagína não localizada"/>
            </section>
            <Footer />
            </div>
        )
}

export default PageNotFound;