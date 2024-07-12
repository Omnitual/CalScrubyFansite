const cards = document.querySelectorAll(".cal-render,.test-1, .test-2, .test-3, .test-4, #A1, #A2, #A3")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("show", entry.isIntersecting)  
    })
},
{

})

cards.forEach(card => {
  observer.observe(card)
})

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-75px";
//   }
// }