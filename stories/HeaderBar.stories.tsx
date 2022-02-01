import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeaderBarPresenter } from '../components/header';

export default {
  title: 'Example/HeaderBar',
  component: HeaderBarPresenter,
} as ComponentMeta<typeof HeaderBarPresenter>;

const Template: ComponentStory<typeof HeaderBarPresenter> = (args) => <HeaderBarPresenter {...args} />;

export const HeaderBarBasicUsage = Template.bind({});
HeaderBarBasicUsage.args = {
  username: 'Bob',
  activePage: 'overview',
};
