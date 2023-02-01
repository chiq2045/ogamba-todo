import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DivButton } from '.';

export default {
  title: 'Components/Buttons/DivButton',
  component: DivButton,
} as ComponentMeta<typeof DivButton>;

const Template: ComponentStory<typeof DivButton> = (args) => (
  <DivButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Div',
};
