window.addEventListener('load', function(event){
const panels = document.querySelectorAll('.panel');

//add the open class
function toggleOpen(){
  this.classList.toggle('open');
}

function toggleActive(e){
  //can't do just this because many transitionend events are happening
  // this.classList.toggle('open-active');
  //check what property is transitioning
  // console.log(e.propertyName);
//not just flex-grow because of browser support
  if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');

  }

}

// trigger toggleOpen on click
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));



});
