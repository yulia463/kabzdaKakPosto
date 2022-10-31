import React from "react";
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title:'Accordion',
    component:Accordion,
};

const callback = action('accordion mode change event fired');
const onClickCallback = action('some item was clicked');

