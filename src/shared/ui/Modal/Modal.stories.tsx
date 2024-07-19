import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

// prettier-ignore
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus deserunt esse et impedit ipsa obcaecati perferendis possimus quibusdam quod quos.',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus deserunt esse et impedit ipsa obcaecati perferendis possimus quibusdam quod quos.',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
