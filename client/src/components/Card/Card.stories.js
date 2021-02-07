import React from "react";
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const button = Template.bind({});
button.args = {
  children: (
    <>
      <h2>TOUR</h2>
      <p>Hier steht ein toller text über Blablabla</p>
    </>
  ),
};
