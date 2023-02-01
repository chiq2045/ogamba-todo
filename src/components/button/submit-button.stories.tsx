import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SubmitButton } from '.';

export default {
  title: 'Components/Buttons/SubmitButton',
  component: SubmitButton,
} as ComponentMeta<typeof SubmitButton>;

const Template: ComponentStory<typeof SubmitButton> = (args) => (
  <SubmitButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Submit Button',
};
