import React from "react";
import Text from "./Text";

export default {
  title: "Components/Text",
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const text = Template.bind({});
text.args = {};
