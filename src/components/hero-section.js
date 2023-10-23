import { Link } from "gatsby";
import delve from 'dlv';

const HeroSection = (props) => {
    console.log("component block manager", props);
    let { images, header, text, buttons } = props
    const getStrapiMedia = (url) => {
        if (url == null) {
            return null;
        }
        if (url.startsWith('http') || url.startsWith('//')) {
            return url;
        }
        return `http://localhost:1337${url}`;
    }
    console.log("==>>>", getStrapiMedia(`/uploads/piggy11_1_a39f45735b.png`));
    return (
        <>
            {images &&
                images.data
                    .slice(0, 1)
                    .map((image, index) => (
                        <div className="dlab-bnr-inr dlab-bnr-inr-sm bg-pt" style={{ backgroundImage: "url(" + getStrapiMedia(delve(image, 'attributes.url')) + ")" }}>
                            <div className="container">
                                <div className="dlab-bnr-inr-entry">
                                    <h1 className="text-white"></h1>
                                    <div className="breadcrumb-row">
                                        <ul className="list-inline">
                                            {/* <li><Link to={"#"}>Home</Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
            }
        </>

    );
}
export default HeroSection