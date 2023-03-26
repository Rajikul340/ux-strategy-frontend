




$(".section1").hide()
$(".section2").hide()
$(".section3").hide()
$(".section4").hide()
$(".section5").hide()
$(".section6").hide()
// $(".section7").hide()

window.onscroll = function() {
  // $(".section1").show()
  // $(".section2").show()
// $(".section3").show()
// $(".section4").show()
// $(".section5").show()
// $(".section6").show()
  // $(".section3").show()
  // $(".section4").show(4000)
  // $(".section5").show(5000)

};

$(".section1").on("mouseover",()=>{
      //  $(".section1").hide()
        // $(".section6").show().fadeIn(2000)
})

const fadeIns = document.querySelectorAll('.fade-in');
const options = {
  rootMargin: '-50px 0px', // add some margin to trigger the animation before the element reaches the viewport
  threshold: 0.5 // when the element is 50% visible, trigger the animation
};
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-animation');
      observer.unobserve(entry.target);
    }
  });
}, options);
fadeIns.forEach(fadeIn => {
  observer.observe(fadeIn);
});