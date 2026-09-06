import {Link} from "react-router-dom"

export default function Navbar(){
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top border-bottom navbar-wrapper mb-5 ">
            <div className="container-fluid d-flex">
                <Link className="navbar-brand" to="/">
                    <img src="media/logo.svg" style={{width:"150px", height:"20px"}}alt="" />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-lg-0">
                        <li class="nav-item px-3">
                            <Link class="nav-link" aria-current="page" to="/signup">Signup</Link>
                        </li>
                        <li class="nav-item px-3">
                            <Link class="nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item px-3">
                            <Link class="nav-link" to="/products">Products</Link>
                        </li>
                        <li class="nav-item px-3">
                            <Link class="nav-link" to="/pricing">Pricing</Link>
                        </li>
                        <li class="nav-item px-3">
                            <Link class="nav-link" to="/Support">Support</Link>
                        </li>
                        
                    
                    </ul>
                </div>
            </div>
            </nav>
    )
}