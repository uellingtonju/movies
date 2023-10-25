import "./card.css"


function Card({ id }) {
    return(
     <section className="card">
        <a 
        href={`https://www.youtube.com/watch?v=${id}`}
        rel="noreferrer noopener"
        target="_black">
            <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} 
            alt="capa" />
        </a>
     </section>
    )
}

export default Card;