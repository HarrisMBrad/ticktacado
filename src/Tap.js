import React from "react";
import { FirstStory } from "./stories/Button.stories";



//  * This is set up for my app to perform some work.
//  * For future development. 
//  * I'm wondering if my app can help me memorize the contents thereof? 
//  * I need to test this in training. 

function Tap() {

  FirstStory(
    <Button action onClick={(button) => {
      console.log('emoji tapped', button.Tap);
    }}> 😀😎👍💯🍦 </Button>
  );

}

export default Tap;
