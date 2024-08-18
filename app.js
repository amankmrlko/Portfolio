function myFunction() {
    var ham = document.querySelector(".nav-links");
    if (ham.style.display === "block") {
      ham.style.display = "none";
    } else {
      ham.style.display = "block";
      ham.style.backgroundColor = "#001219";
      ham.style.opacity = "0.9";
    }
  }

  // OnScroll Animation

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  });
  
  let animateElements = document.querySelectorAll(".animated");
  animateElements.forEach(element => {
    observer.observe(element);
  });

  
  // Home Button from Icon

  let icon = document.querySelector(".aman");
  icon.addEventListener("click",()=>{
    document.getElementById('home').scrollIntoView({});
  });