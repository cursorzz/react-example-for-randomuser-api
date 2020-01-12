import React from "react";
import { SkeletonList } from "../src/components/SkeletonList";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(<SkeletonList rows={new Array(1).fill({})} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
