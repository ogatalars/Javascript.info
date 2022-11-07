// Instead of
// function declarations
// function createElement() {
//     ...
//   }

//   function setHandler(elem) {
//     ...
//   }

//   function walkAround() {

//   }

//   // the code which uses them
//   let elem = createElement();
//   setHandler(elem);
//   walkAround();

// do this
// the code which uses the functions
let elem = createElement();
setHandler(elem);
walkAround();

// --- helper functions ---
function createElement() {}

function setHandler(elem) {}

function walkAround() {}
