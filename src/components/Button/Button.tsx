import * as classNames from "classnames";
import * as React from "react";

export type ButtonSize = "small" | "medium" | "large";

interface IBaseButtonProps {
  children: React.ReactNode;
  size?: ButtonSize;
}

class Button extends React.Component<IBaseButtonProps> {
  public render() {
    const { children, size } = this.props;
    return (
      <React.Fragment>
        <button>{children}</button>
      </React.Fragment>
    );
  }
}

export default Button;
