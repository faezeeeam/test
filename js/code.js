function showMenu() {
     var menu = document.getElementById("menu");
     var menuIcon = document.getElementById("drop-down-menu")
     var searchIcon = document.getElementById("search-icon")
     if (menu.className === "header-menu") {
          menu.className += " active-menu";
     } else {
          menu.className = "header-menu"
     }

     if (menuIcon.className === "drop-down-menu d-flex") {
          menuIcon.className += " active-menuIcon";
     } else {
          menuIcon.className = "drop-down-menu d-flex"
     }

     if (searchIcon.className === "search-icon d-flex") {
          searchIcon.className += " active-searchIcon";
     } else {
          searchIcon.className = "search-icon d-flex"
     }

     console.log(menu.className)
}

// function showMenu() {
//      var menu = document.getElementById("menu");
//      if (menu.className === "header-menu") {
//          menu.className += " show";
//      } else {
//          menu.className = "header-menu";
//      }
//  }