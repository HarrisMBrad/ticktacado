
const button = new Button;

let Button;

function push() {
  if (Button === true) {
    console.log('button can be pushed')
  } else {
    if (Button != true)
      console.log('This buttons will not be pushable');
  }
}
button();
push();


export default Button;
