const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e){
  // check if they have the shift key down;
  // And check if they are checking it
  let inBetween = false;
if(e.shiftKey && this.checked){
  // go ahead and do what we please
  // loop over every single ckecked box
  checkboxes.forEach(checkbox => {
    console.log(checkboxes);
    if(checkbox === this || checkbox === lastChecked){
      inBetween = !inBetween;
      console.log("Starting to check them in between")
    }

    if(inBetween){
      checkbox.checked = true;
    }
  })
}

  lastChecked = this;
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
