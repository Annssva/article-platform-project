import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { OutlineDark } from 'shared/ui/Button/Button.stories';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

// prettier-ignore
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title!',
  text: 'Some text...',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: 'Title!',
};

export const onlyText = Template.bind({});
onlyText.args = {
  text: 'Some text...',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title!',
  text: 'Some text...',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  title: 'Title!',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  text: 'Some text...',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: 'Error!',
  text: 'Some text...',
  theme: TextTheme.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  title: 'Error!',
  text: 'Some text...',
  theme: TextTheme.ERROR,
};

ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
