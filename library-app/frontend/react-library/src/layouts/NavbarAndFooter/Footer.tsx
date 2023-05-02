export const Footer = () => {
    return (
        <div className="bg-dark text-light">
            <footer className="container d-flex flex-wrap 
            justify-content-between align-items-center py-4 bg-dark">
                <p className="col-md-4 mb-0">© Example library App, Inc</p>
                <ul className="nav navbar-dark col-md-4 justify-content-end">
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-light">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-light">
                            Search Books
                        </a>
                    </li>
                    
                </ul>
            </footer>
        </div>
    )
}