let scrollToTop = document.querySelector(".scroll-to-top");
let stickyNav = document.querySelector(".sticky-navbar");
let body = document.querySelector("html,body");
window.addEventListener("scroll", () => {
  if (body.scrollTop >= 100) {
      scrollToTop.style.display = " block";
           scrollToTop.addEventListener("click", () => {

         
                      window.scrollTo(0, 0)
                       });

  }else{
           
                    scrollToTop.style.display="none";

  }
  
});
window.addEventListener("scroll", () => {
                    if (body.scrollTop >= 100) {
                        stickyNav.style.display = " block";
                         
                  
                           
                                       
                    }else{
                                      stickyNav.style.display="none";
                  
                                      
                  }
                    })