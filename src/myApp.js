import { FirstStory } from "./stories/Button.stories";
import { Button } from './Button';

/**
 * This is set up for my app to perform some work.
 * For future development. 
 * I'm wondering if my app can help me memorize the contents thereof? 
 * I need to test this in training. 
 */
function myApp() {
  FirstStory(
    <Button action onClick={() => {
      console.log('emoji clicked');
    }}> 😀😎👍💯🍦 </Button>
  )
}

export default myApp;
