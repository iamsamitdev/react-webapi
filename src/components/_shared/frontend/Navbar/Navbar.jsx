import {NavLink} from 'react-router-dom'
import { faCrow, faHome, faBookmark, faBox, faUserFriends, faEnvelope, faLock, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">

                <NavLink to="/" className="navbar-brand">
                    <FontAwesomeIcon icon={faCrow} className="d-inline-block align-top" /> &nbsp;Twitshop
                </NavLink>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/" exact={true} className="nav-link"><FontAwesomeIcon icon={faHome} /> หน้าหลัก</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link"><FontAwesomeIcon icon={faBookmark} /> เกี่ยวกับเรา</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/service" className="nav-link"><FontAwesomeIcon icon={faBox} /> บริการของเรา</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/team" className="nav-link"><FontAwesomeIcon icon={faUserFriends} /> ทีมงาน</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link"><FontAwesomeIcon icon={faEnvelope} /> ติดต่อเรา</NavLink>
                        </li>
                    </ul>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink to="/signup" className="nav-link"><FontAwesomeIcon icon={faLock} /> ลงทะเบียน</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/signin" className="nav-link"><FontAwesomeIcon icon={faBook} /> เข้าสู่ระบบ</NavLink>
                        </li>
                    </ul>


                </div>
            </div>
        </nav>
    )
}

export default Navbar
