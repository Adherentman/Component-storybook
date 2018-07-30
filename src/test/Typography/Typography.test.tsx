import * as React from "react";
import * as renderer from "react-test-renderer";
import Typography from "../../components/Typography";

describe("<Typography>", () => {
  it("Should output a Typography", () => {
    const wrapper = renderer
      .create(<Typography>amazing Typography</Typography>)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("renders Chinese characters and size super - Uppercase", () => {
    const wrapper1 = renderer
      .create(<Typography>神奇的Typography</Typography>)
      .toJSON();

    // tslint:disable-next-line:no-console
    console.log(wrapper1, "ddd");
    expect(wrapper1).toMatchSnapshot();

    const wrapper2 = renderer
      .create(<Typography size="super">神奇的Typography</Typography>)
      .toJSON();
    expect(wrapper2).toMatchSnapshot();

    const wrapper3 = renderer
      .create(<Typography size="H1">神奇的Typography</Typography>)
      .toJSON();
    expect(wrapper3).toMatchSnapshot();

    const wrapper4 = renderer
      .create(<Typography size="H2">神奇的Typography</Typography>)
      .toJSON();
    expect(wrapper4).toMatchSnapshot();

    const wrapper5 = renderer
      .create(<Typography size="H3">神奇的Typography</Typography>)
      .toJSON();
    expect(wrapper5).toMatchSnapshot();

    const wrapper6 = renderer
      .create(<Typography size="H4">神奇的Typography</Typography>)
      .toJSON();
    expect(wrapper6).toMatchSnapshot();

    const wrapper7 = renderer
      .create(<Typography size="H5">神奇的Typography</Typography>)
      .toJSON();
    expect(wrapper7).toMatchSnapshot();

    const wrapper8 = renderer
      .create(<Typography size="H6">神奇的Typography</Typography>)
      .toJSON();
    expect(wrapper8).toMatchSnapshot();

    const wrapper9 = renderer
      .create(<Typography size="article">神奇的Typography</Typography>)
      .toJSON();
    expect(wrapper9).toMatchSnapshot();

    const wrapper10 = renderer
      .create(<Typography size="articleSmall">神奇的Typography</Typography>)
      .toJSON();
    expect(wrapper10).toMatchSnapshot();

    const wrapper11 = renderer
      .create(<Typography size="bodySmall">神奇的Typography</Typography>)
      .toJSON();
    expect(wrapper11).toMatchSnapshot();

    const wrapper12 = renderer
      .create(<Typography size="accent">神奇的Typography</Typography>)
      .toJSON();
    expect(wrapper12).toMatchSnapshot();

    const wrapper13 = renderer
      .create(<Typography size="uppercase">神奇的Typography</Typography>)
      .toJSON();
    expect(wrapper13).toMatchSnapshot();
  });
});

// const testInstance = testRenderer.root;
// // tslint:disable-next-line:no-console
// console.log(testInstance)
// expect(testInstance.findByType(Typography).props.size).toBe('super');
