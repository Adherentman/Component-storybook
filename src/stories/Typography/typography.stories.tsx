import { select, withKnobs } from "@storybook/addon-knobs";
import { setAddon, storiesOf } from "@storybook/react";
import * as React from "react";
import JSXAddon from "storybook-addon-jsx";
import { Typography } from "../../components";
import TypographyStory from "./typography";

setAddon(JSXAddon);

storiesOf("Typography", module)
  .addDecorator(withKnobs)
  .add("Typography", () => <TypographyStory />)
  .addWithJSX(
    "super —— H8",
    () => (
      <Typography
        size={select(
          "Size",
          [
            "super",
            "H1",
            "H2",
            "H3",
            "H4",
            "H5",
            "H6",
            "H7",
            "H8",
            "article",
            "articleSmall",
            "bodySmall",
            "accent",
            "uppercase"
          ],
          "super"
        )}
      >
        Amazing Typography
      </Typography>
    ),
    { displayName: "Typography" }
  );
