import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input from "../components/publisher/surveyForm/Input";
import "@testing-library/jest-dom/extend-expect";

describe("Input", () => {
  const handleChange = jest.fn();
  const handleBlur = jest.fn();

  it("renders the input component correctly", () => {
    const { getByLabelText, getByPlaceholderText } = render(
      <Input
        handleChange={handleChange}
        inputType="text"
        questionDescription="Question description"
        questionName="Question name"
        inputIcon="icon-name"
        label="Label"
        isFocused={false}
        setIsFocused={jest.fn()}
        handleBlur={handleBlur}
        surveyName="Survey name"
        errors={{}}
        touched={{}}
      />
    );

    const inputElement = getByLabelText("Question name");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
    expect(inputElement).toHaveValue("");
    fireEvent.change(inputElement, { target: { value: "Test value" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
    fireEvent.blur(inputElement);
    expect(handleBlur).toHaveBeenCalledTimes(1);

    const placeholderElement = getByLabelText("Question name");
    expect(placeholderElement).toBeInTheDocument();
  });

  it("renders the input component without label correctly", () => {
    const { queryByLabelText, getByPlaceholderText } = render(
      <Input
        handleChange={handleChange}
        inputType="text"
        questionDescription="Question description"
        questionName="Question name"
        inputIcon="icon-name"
        label=""
        isFocused={false}
        setIsFocused={jest.fn()}
        handleBlur={handleBlur}
        surveyName="Survey name"
        errors={{}}
        touched={{}}
      />
    );

    const labelElement = queryByLabelText("Question name");
    expect(labelElement).toBeNull();

    const placeholderElement = getByPlaceholderText("Question name");
    expect(placeholderElement).toBeInTheDocument();
  });
});
