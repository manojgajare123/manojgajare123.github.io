 // Dark Mode
 let darkmode = document.querySelector('#darkmode');
     
 darkmode.onclick = () => {
     if(darkmode.classList.contains('bx-moon')){
         darkmode.classList.replace('bx-moon','bx-sun');
         document.body.classList.add('active');
     }else{
         darkmode.classList.replace('bx-sun','bx-moon');
         document.body.classList.remove('active');
     }
 }
 // Sticky Navbar
 let header = document.querySelector('header');
 let menu = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');
  
  
 window.addEventListener('scroll', () => {
     header.classList.toggle('shadow', window.scrollY > 0);
 });
  
 menu.onclick = () => {
     navbar.classList.toggle('active');
 }
 window.onscroll = () => {
     navbar.classList.remove('active');
 }



 // Git Hub clender


 GitHubCalendar(".calendar", "manojgajare123");

    // or enable responsive functionality:
    GitHubCalendar(".calendar", "manojgajare123", { responsive: true });

    // Use a proxy
    GitHubCalendar(".calendar", "manojgajare123", {
       proxy (manojgajare123) {
         return fetch(`https://your-proxy.com/github?user=${manojgajare123}`)
       }
    }).then(r => r.text())
