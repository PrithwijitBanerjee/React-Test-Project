import LogoBox1 from "../../assets/LogoBox1.png";
import LogoBox2 from "../../assets/LogoBox2.png";
import LogoBox3 from "../../assets/LogoBox3.png";
import LogoBox4 from "../../assets/LogoBox4.png";
import LogoBox5 from "../../assets/LogoBox5.png";

const OurClients = () => {
    return (
        <div className="our_client_wrapper">
            <p>Our Clients</p>
            <div className="client_item_wrapper">
                <div>
                    <img src={LogoBox1} alt="..." />
                </div>
                <div>
                    <img src={LogoBox2} alt="..." />
                </div>
                <div>
                    <img src={LogoBox3} alt="..." />
                </div>
                <div>
                    <img src={LogoBox4} alt="..." />
                </div>
                <div>
                    <img src={LogoBox5} alt="..." />
                </div>
            </div>
        </div>
    )
}

export default OurClients;