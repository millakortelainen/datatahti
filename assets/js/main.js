const hideNav = () => {
    document.getElementById("nav").className = "nav-hidden";
  }
  
  function showNav() {
    document.getElementById("nav").className = "nav";
  }

//  function showNavBtn() {
//    document.getElementById("nav").className = "mobile-nav";
//  }
  
  function reportWindowSize() {
    if (window.innerWidth < 500) {
      hideNav();
    } else {
      showNav();
    }
  }
  
  window.onresize = reportWindowSize;
  
  window.onload = () => {
    reportWindowSize();
  };