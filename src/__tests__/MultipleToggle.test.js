import React from "react";
import {
  render,
  fireEvent,
  getByText as getByTextWithMatcher,
} from "@testing-library/react";
import MultipleToggle from "../components/publisher/surveyForm/MultipleToggle";
import "@testing-library/jest-dom/extend-expect";

describe("MultipleToggle", () => {
  const mockOptions = [
    {
      displayName: "Option 1",
      value: "Option 1",
      className: "line-height",
      optionClass: "line-height",
    },
    {
      displayName: "Option 2",
      value: "Option 2",
      className: "line-height",
      optionClass: "line-height",
    },
  ];

  const mockSurvey = {
    questionOption: [
      { option: { name: "Option 1" } },
      { option: { name: "Option 2" } },
    ],
  };

  const mockSetFieldValue = jest.fn();
  const mockSetSelected = jest.fn();

  const defaultProps = {
    selectedOption: {},
    optionForm: [],
    questionDescription: "question-1",
    questionName: "Question 1",
    setFieldValue: mockSetFieldValue,
    setOptionForm: jest.fn(),
    setSelected: mockSetSelected,
    survey: mockSurvey,
  };

  it("renders the MultipleToggle component correctly", () => {
    const { getByText } = render(
      <MultipleToggle {...defaultProps} optionForm={mockOptions} />
    );
    expect(getByText("Question 1")).toBeInTheDocument();
    expect(getByText("Option 1")).toBeInTheDocument();
    expect(getByText("Option 2")).toBeInTheDocument();
  });

  it("calls setFieldValue and setSelected when an option is selected", () => {
    const { getByText } = render(
      <MultipleToggle {...defaultProps} optionForm={mockOptions} />
    );
    fireEvent.click(getByText("Option 1"));
    expect(mockSetFieldValue).toHaveBeenCalledTimes(1);
    expect(mockSetSelected).toHaveBeenCalledTimes(1);
    expect(mockSetFieldValue).toHaveBeenCalledWith("question-1", "Option 1");
    expect(mockSetSelected).toHaveBeenCalledWith({ "question-1": "Option 1" });
  });
});
