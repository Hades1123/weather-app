import logo from 'assets/logo.svg'
import dropdown from 'assets/icon-dropdown.svg'
import units from 'assets/icon-units.svg'

export const NavBar = () => {
    return (
        <>
            <nav>
                <div className="nav-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="dropdown">
                    <div className="units">
                        <img src={units} alt="units icon" />
                        <span>Units</span>
                        <img src={dropdown} alt="units icon" />
                    </div>
                </div>
            </nav>
        </>
    )
}