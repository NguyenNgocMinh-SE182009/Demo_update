function App() {
  return (
    <>


    <h1>Hello</h1>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://file3.qdnd.vn/data/images/0/2024/10/25/upload_2071/mu-1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmGngggToTnGgiKu2Ny7IDQxj0wuf3kRgtdA&s" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://i.pinimg.com/originals/4b/be/b8/4bbeb87a923add210ee03ab2118c739b.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <div className="card">
        <img src="https://cdn-i.vtcnews.vn/resize/th/upload/2025/01/06/xuan-son-11325694.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="container row">
        <div className="col-3">
          <div className="card">
            <img src="https://cdn-i.vtcnews.vn/resize/th/upload/2025/01/06/xuan-son-11325694.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://vtcnews.vn/xuan-son-khong-the-canh-tranh-qua-bong-vang-viet-nam-2024-ar919361.html" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="card">
            <img src="https://cdn-i.vtcnews.vn/resize/th/upload/2025/01/06/xuan-son-11325694.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="card">
            <img src="https://cdn-i.vtcnews.vn/resize/th/upload/2025/01/06/xuan-son-11325694.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-dark text-light py-4">
        <div className="container text-center">
          <p>&copy; 2025 Haven Skin. All Rights Reserved.</p>
          <div className="d-flex justify-content-center">
            <a href="#" className="text-light mx-3">Home</a>
            <a href="#" className="text-light mx-3">About</a>
            <a href="#" className="text-light mx-3">Contact</a>
            <a href="#" className="text-light mx-3">Privacy Policy</a>
          </div>
        </div>
      </footer>

    </>





  )
}

export default App;
