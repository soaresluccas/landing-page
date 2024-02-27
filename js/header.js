const header = document.getElementById('header');
const headerClassList = header.classList;

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY || window.pageYOffset;

  if (scrollTop > lastScrollTop) {
    
    if (!headerClassList.contains('scrollHide')) {
      headerClassList.add('scrollHide');
    }
  } else {
    
    if (scrollTop < lastScrollTop - 2 || scrollTop <= 0) {
      headerClassList.remove('scrollHide');
    }
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
