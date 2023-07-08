// import logo from "/images/logo-no-background.png"
import logo from "/images/cakeFactory.jpg"

export default function Navbar(){
    return(
        <div className="nav">
            <img src={logo} className="logo-img" alt="Logo" />
        </div>
    );
}