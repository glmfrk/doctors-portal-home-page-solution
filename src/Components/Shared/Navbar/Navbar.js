import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/home">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              <li class="nav-item mr-5">
                <a class="nav-link active" aria-current="page" href="/home">Home</a>
              </li>
              <li class="nav-item mr-5">
                <a class="nav-link" href="/about">About</a>
              </li>
              <li class="nav-item mr-5">
                <a class="nav-link" href="/dental">Dental Services</a>
              </li>
              <li class="nav-item mr-5">
                <a class="nav-link " href="/review">Reviews</a>
              </li>
              <li class="nav-item mr-5">
                <a class="nav-link text-white" href="/blogs">Blogs</a>
              </li>
              <li class="nav-item mr-5">
                <a class="nav-link text-white" href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;