import Slider from "react-slick";
import "./carouse.css";

function Carouse({ children }) {

    const settings = {
        dots: false,
        infinite: false, //true
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        // slidesToShow: 5,
        slidesAToScroll: 1,
    }
    return(
        <div>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    )
}

export default Carouse;