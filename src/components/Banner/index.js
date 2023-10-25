import "./Banner.css"

function Banner({ image }) {
    return(
        <div 
            className="banner"
            style={{ backgroundImage: `url('/imagens/banner-${image}.png')`}}
            >
            
        </div>
    )
}  

export default Banner;