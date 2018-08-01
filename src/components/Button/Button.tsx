import * as React from "react";

interface IBaseButtonProps {
  children: React.ReactNode;
}

class Button extends React.Component<IBaseButtonProps> {
  public render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <button>{children}</button>
      </React.Fragment>
    );
  }
}
