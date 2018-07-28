import { withInfo } from "@storybook/addon-info";
import { select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as PropTypes from "prop-types";
import * as React from "react";
// import JSXAddon from "storybook-addon-jsx";
import { Typography } from "../../components";
import TypographyStory from "./typography";

storiesOf("Typography", module)
  .addDecorator(withKnobs)
  .add("Typography", () => <TypographyStory />)
  .add(
    "super —— H8",
    withInfo({
      propTables: [Typography],
      text: "哒哒哒哒哒"
    })(() => (
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
    ))
  );

Typography.displayName = "Typography";

Typography.defaultProps = {
  size: "root"
};

Typography.propTypes = {
  /**
   * @description big sizeo
   */
  size: PropTypes.oneOf([
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
  ])
};
