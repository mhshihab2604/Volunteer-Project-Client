import "./OurTeam.css"
const OurTeam = () => {
    return (
        <div>
            <div className="text-black bg-[#E5F5F2] mt-28">
                <div>
                    <h1 className="lg:text-4xl text-2xl text-center font-medium pt-5">Our Team</h1>
                </div>
                <div className="rows">
                    {/* <!-- Column 1--> */}
                    <div className="columns">
                        <div className="cardSetup">
                            <div className="img-container">
                                <img src="https://i.ibb.co/PYxkYL8/volunteer.webp"/>
                            </div>
                            <h3>George Herrada</h3>
                            <p>Volunteer</p>
                            <div className="icons">
                                <a href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="#">
                                    <i className="fas fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Column 2--> */}
                    <div className="columns">
                        <div className="cardSetup">
                            <div className="img-container">
                                <img src="https://i.ibb.co/RCLFkBL/volunteer2.webp"/>
                            </div>
                            <h3>Smith Farfán</h3>
                            <p>Volunteer</p>
                            <div className="icons">
                                <a href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="#">
                                    <i className="fas fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Column 3--> */}
                    <div className="columns">
                        <div className="cardSetup">
                            <div className="img-container">
                                <img src="https://i.ibb.co/fNn8zJP/volunteer3.jpg"/>
                            </div>
                            <h3>Enghel Felix</h3>
                            <p>Volunteer</p>
                            <div className="icons">
                                <a href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="#">
                                    <i className="fas fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;