let counts = [];    // Array to keep CountUp object instances

// countTo plugin initialization
if (document.querySelector("[countTo]")) {
  let numbers = document.querySelectorAll("[countTo]");

  numbers.forEach((number) => {
    let ID = number.getAttribute("id");
    let value = number.getAttribute("countTo");
    let countUp = new CountUp(ID, value);

    if (number.hasAttribute("data-decimal")) {
      const options = {
          decimalPlaces: 1,
        };
      countUp = new CountUp(ID, 2.8, options);  // TODO: hardcoded, why??
    } else {
      countUp = new CountUp(ID, value);
    }
    
    // Add to array for later use
    counts.push(countUp);
    
  });
}
// end count to plugin initialization


// Counting function
function runNumbers(entries){

  // hack to fix Observer API
  // Because it will always fire on mount
  if (!entries[0].isIntersecting){
    return;
  }

  counts.forEach((countUp) => {
        if (!countUp.error) {
          countUp.start();
        } else {
          console.error(countUp.error);
        }
    });
}

// Add in intersection observer
let obsOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0
}
let observer = new IntersectionObserver(runNumbers, obsOptions);
let target = document.querySelector("#stats");
observer.observe(target);
