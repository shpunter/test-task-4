import { render } from "@testing-library/react";
import Render from "./Render";
import { IMAGE, TEXT, VIDEO } from "./constant";

describe("render.tsx", () => {
  it("should render image component", () => {
    const { getByTestId, queryByTestId } = render(
      <Render item={{ id: 1, type: IMAGE, url: "fake-url" }} />,
    );

    expect(queryByTestId("image-test")).not.toEqual(null);
    expect(queryByTestId("text-test")).toEqual(null);
    expect(queryByTestId("video-test")).toEqual(null);

    expect(getByTestId("label-test").getAttribute("data-label")).toEqual("Image");
    expect(getByTestId("image-test").getAttribute("src")).toEqual("fake-url");
  });

  it("should render text component", () => {
    const { getByTestId, getByText, queryByTestId } = render(
      <Render
        item={{
          id: 1,
          type: TEXT,
          description: "description",
          headline: "headline",
        }}
      />,
    );

    expect(queryByTestId("image-test")).toEqual(null);
    expect(queryByTestId("text-test")).not.toEqual(null);
    expect(queryByTestId("video-test")).toEqual(null);

    expect(getByTestId("label-test").getAttribute("data-label")).toEqual("Text");
    expect(getByText("headline").innerHTML).toEqual("headline");
    expect(getByText("description").innerHTML).toEqual("description");
  });

  it("should render video component", () => {
    const { getByTestId, queryByTestId } = render(
      <Render
        item={{
          id: 1,
          type: VIDEO,
          url: "fake-video-url",
        }}
      />,
    );

    expect(queryByTestId("image-test")).toEqual(null);
    expect(queryByTestId("text-test")).toEqual(null);
    expect(queryByTestId("video-test")).not.toEqual(null);

    expect(getByTestId("label-test").getAttribute("data-label")).toEqual("Video");
    expect(getByTestId("video-test").children[0].getAttribute("src")).toEqual("fake-video-url");
  });
});
