import React from 'react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variants: {
      options: ['primary', 'secondary', 'lastly'],
      control: { type: 'radio' },
      backgroundColor: { control: 'color' },
    }
  },
};

const Template = (args) => <Button {...args} />;

export const text = (action) => <Button {...action}>Hello!</Button>
export const emoji = () =>
  <Button action onClick={() => {
    console.log('emoji clicked');
  }}> 😀😎👍💯🍦 </Button>


export const FirstStory = Template.bind({});

const actions = FirstStory.args = {
  options: 'lastly',
  label: 'Here We Go!',
  primary: false,
  size: 'small'
};



export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button !',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button 2',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button 3',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button 4',
};

/*Need to find out why this is not a function. 
It should function but errors in testing show that this is not a function.
*/
actions();
