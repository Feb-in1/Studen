import React from 'react'

const Navbar = () => {
  return (
    <div>



<nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Student App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Add Student</a>
        <a class="nav-link" href="#">Search Student</a>
        <a class="nav-link" href="#">Delete Student</a>
        <a class="nav-link" href="#">View All Students</a>
      </div>
    </div>
  </div>
</nav>




    </div>
  )
}

export default Navbar