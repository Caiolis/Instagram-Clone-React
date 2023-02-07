import "./style.css";

export default function Header() {
  return (
    <header>
      {/* <!-- Wrapper --> */}
      <div class="wrapper">
        {/* <!-- Logo and Instagram icon container --> */}
        <div class="header-container-left">
          <ion-icon name="logo-instagram"></ion-icon>
          <hr class="divider" />
          <img src="./assets/img/logo.png" alt="Logo instagram" class="logo" />
        </div>
        {/* <!-- Logo and Instagram icon container end --> */}

        {/* <!-- Search Bar container --> */}
        <div class="header-container-middle">
          <input type="text" placeholder="Pesquisar" class="searchbar" />
        </div>
        {/* <!-- Search Bar container End --> */}

        {/* <!-- Icons container --> */}
        <div class="header-container-right">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline" class="icon-spacing-left"></ion-icon>
          <ion-icon name="heart-outline" class="icon-spacing-right"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
        {/* <!-- Icons container End --> */}
      </div>
      {/* <!-- Wrapper End --> */}

      {/* <!-- Mobile Wrapper --> */}
      <div class="mobile-wrapper">
        <ion-icon name="logo-instagram"></ion-icon>
        <img src="./assets/img/logo.png" alt="Logo instagram" class="logo" />
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      {/* <!-- Mobile Wrapper --> */}
    </header>
  );
}
