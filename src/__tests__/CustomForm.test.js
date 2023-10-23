import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CustomForm from "../components/publisher/surveyForm/CustomForm";
import "@testing-library/jest-dom/extend-expect";

// Mocked child components for testing
jest.mock("../components/publisher/surveyForm/TextArea.js", () => () => (
  <div data-testid="textarea-component" />
));
jest.mock("../components/publisher/surveyForm/Input.js", () => () => (
  <div data-testid="input-component" />
));
jest.mock("../components/publisher/surveyForm/MultipleToggle", () => () => (
  <div data-testid="multiple-toggle-component" />
));
jest.mock("../components/publisher/surveyForm/CustomCheckbox", () => () => (
  <div data-testid="checkbox-component" />
));

describe("CustomForm", () => {
  it("renders the TextArea component for 'textarea' inputType", () => {
    const { getByTestId } = render(<CustomForm inputType="textarea" />);
    expect(getByTestId("textarea-component")).toBeInTheDocument();
  });

  it("renders the Input component for 'email' inputType", () => {
    const { getByTestId } = render(<CustomForm inputType="email" />);
    expect(getByTestId("input-component")).toBeInTheDocument();
  });

  it("renders the CustomCheckbox component for 'checkbox' inputType", () => {
    const { getByTestId } = render(<CustomForm inputType="checkbox" />);
    expect(getByTestId("checkbox-component")).toBeInTheDocument();
  });

  it("renders an empty fragment for unknown inputType", () => {
    const { container } = render(<CustomForm inputType="unknown" />);
    expect(container.firstChild).toBeNull();
  });
});
