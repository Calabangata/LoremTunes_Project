const subsForm = document.getElementById("subsForm");
const basicOption = document.querySelector("input[value='basic']");
const proOption = document.querySelector("input[value='pro']");
const eliteOption = document.querySelector("input[value='elite']");



//subs validation
subsForm.addEventListener("submit", message);

// function submitValidation2(event) {
  
//   if (!basicOption.checked && !proOption.checked && !eliteOption.checked){
//     alert("An option is not selected");
//     event.preventDefault();
//   } else {
//     alert("tnanks");
//   } 
// }

function message(event){
  
  
  const success = document.getElementById('success');
  const danger = document.getElementById('danger');

  if(!basicOption.checked && !proOption.checked && !eliteOption.checked){
      danger.style.display = 'block';
      event.preventDefault();
  }
  else{
      // setTimeout(() => {
      //   event.preventDefault();
      // }, 10000);

      event.preventDefault();
    setTimeout(function() {
    this.submit();
    }.bind(this), 2300);


      success.style.display = 'block';

      setTimeout(() => {
        success.style.display = "block";
        success.style.opacity = "1";
      }, 1000);

      
  }


  setTimeout(() => {
      danger.style.display = 'none';
      success.style.display = 'none';
  }, 4000);

}
