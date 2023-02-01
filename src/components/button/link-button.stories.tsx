import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LinkButton } from '.';

export default {
  title: 'Components/Buttons/LinkButton',
  component: LinkButton,
} as ComponentMeta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = (args) => (
  <LinkButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Link',
};
