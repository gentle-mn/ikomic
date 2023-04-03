import React from "react";

export default function Carousel() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler ms-auto" type="button" data-mdb-toggle="collapse"
      data-mdb-target="#navbarToggleExternalContent3" aria-controls="navbarToggleExternalContent3"
      aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars"></i>
    </button>
  </div>
</nav>
<div class="collapse" id="navbarToggleExternalContent3">
  <div class="bg-light shadow-3 p-4">
    <button class="btn btn-link btn-block border-bottom m-0">Link 1</button>
    <button class="btn btn-link btn-block border-bottom m-0">Link 2</button>
    <button class="btn btn-link btn-block m-0">Link 3</button>
  </div>
</div>
    </div>
  );
}
