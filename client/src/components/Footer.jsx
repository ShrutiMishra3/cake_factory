export default function Footer(){
    return(
        <>
            <div className="container footer">
                <div className="box">
                    <h1>Links</h1>
                    <ul>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Company Details</a></li>
                        <li><a href="#">Mail us</a></li>
                    </ul>
                </div>
                <div className="box">
                    <h1>Socials</h1>
                    <ul>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <p className="center">&copy; 2023 <span className="orange">cakeFactory Inc.</span></p>
        </>
    )
}