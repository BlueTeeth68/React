import { NavLinkComponent } from "../../component/NavLinkComponent";

export const Navbar:React.FC<{
    buttonContent: string,
    navLinkContent: NavLinkComponent[]
}> = (props) => {

    const navLinkData: React.ReactNode[] = [];
    for (let nav of props.navLinkContent) {
        navLinkData.push(<NavLink active={nav.active} content={nav.content}/>);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5 py-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">LIBRARY</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                       {navLinkData}
                    </ul>
                    <ul className="navbar-nav d-flex">
                        <NavButton content={props.buttonContent}/>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export const NavLink: React.FC<{
    active: boolean,
    content: string
}> = (props) => {
    return (
        <li className="nav-item">
            <a className={"nav-link " + (props.active ? "active" : "")} aria-current="page" href="#">{props.content}</a>
        </li>
    )
}

export const NavButton: React.FC<{
    content: string
}> = (props) => {
    return (
        <li className="nav-item m-1">
            <a type="button" className="btn btn-outline-light lead" href="#">{props.content}</a>
        </li>
    )
}

export default Navbar;