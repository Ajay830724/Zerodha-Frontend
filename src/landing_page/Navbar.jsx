export default function Navbar(){
    return (
        <div className="container border-bottom navbar-wrapper">
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid d-flex">
                <a className="navbar-brand" href="#">
                    <img src="media/logo.svg" style={{width:"150px", height:"20px"}}alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-lg-0">
                        <li class="nav-item px-3">
                            <a class="nav-link" aria-current="page" href="#">Signup</a>
                        </li>
                        <li class="nav-item px-3">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item px-3">
                            <a class="nav-link" href="#">Products</a>
                        </li>
                        <li class="nav-item px-3">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item px-3">
                            <a class="nav-link" href="#">Support</a>
                        </li>
                        
                    
                    </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}