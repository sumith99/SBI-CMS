import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "@/store/store";
import "@testing-library/jest-dom/extend-expect";
import GMsRecruitment from "@/components/publisher/gameMaster/GMsRecruitment";
import CustomFormSubmit from "../components/publisher/surveyForm/CustomFormSubmit";
const GAME_MASTER_FORM_DATA = {
  survey: {
    id: 25,
    name: "GM League Recruitment Form",
    description: "",
  },
  questions: [
    {
      name: "Please give us your first and last name.",
      description: "",
      placeholder: "Please give us your first and last name.",
      isRequired: true,
      id: 123,
      sortOrder: 1,
      surveyQuestion: {
        sortOrder: 1,
      },
      questionType: {
        id: 1,
        name: "string",
        description: "",
      },
      questionOption: [],
    },
    {
      name: "Which Conventions would you like to be considered for?",
      description: "",
      placeholder: "Which Conventions would you like to be considered for?",
      isRequired: true,
      id: 124,
      sortOrder: 2,
      surveyQuestion: {
        sortOrder: 2,
      },
      questionType: {
        id: 6,
        name: "checkbox",
        description: "",
      },
      questionOption: [
        {
          questionOption: {
            id: 160,
          },
          option: {
            id: 57,
            name: "GaryCon, Lake Geneva Wisconsin / March 23-26th",
            description: "",
            placeholder: "GaryCon, Lake Geneva Wisconsin / March 23-26th",
          },
        },
        {
          questionOption: {
            id: 161,
          },
          option: {
            id: 58,
            name: "Origins, Columbus Ohio / June 21-25th",
            description: "",
            placeholder: "Origins, Columbus Ohio / June 21-25th",
          },
        },
        {
          questionOption: {
            id: 162,
          },
          option: {
            id: 59,
            name: "GenCon, Indianapolis Indiana / August 3-6th",
            description: "",
            placeholder: "GenCon, Indianapolis Indiana / August 3-6th",
          },
        },
        {
          questionOption: {
            id: 163,
          },
          option: {
            id: 60,
            name: "GameHoleCon, Madison Wisconsin / October 19-22nd",
            description: "",
            placeholder: "GameHoleCon, Madison Wisconsin / October 19-22nd",
          },
        },
        {
          questionOption: {
            id: 164,
          },
          option: {
            id: 61,
            name: "PAX Unplugged, Philadelphia Pennsylvania / December 2-4th",
            description: "",
            placeholder:
              "PAX Unplugged, Philadelphia Pennsylvania / December 2-4th",
          },
        },
      ],
    },
    {
      name: "GaryCon, Lake Geneva Wisconsin / March 23-26th",
      description: "",
      placeholder: "GaryCon, Lake Geneva Wisconsin / March 23-26th",
      isRequired: false,
      id: 125,
      sortOrder: 3,
      surveyQuestion: {
        sortOrder: 3,
      },
      questionType: {
        id: 6,
        name: "checkbox",
        description: "",
      },
      questionOption: [
        {
          questionOption: {
            id: 165,
          },
          option: {
            id: 62,
            name: "I want to GM this con.",
            description: "",
            placeholder: "I want to GM this con.",
          },
        },
        {
          questionOption: {
            id: 166,
          },
          option: {
            id: 63,
            name: "I need a room.",
            description: "",
            placeholder: "I need a room.",
          },
        },
        {
          questionOption: {
            id: 167,
          },
          option: {
            id: 64,
            name: "I need a badge.",
            description: "",
            placeholder: "I need a badge.",
          },
        },
        {
          questionOption: {
            id: 168,
          },
          option: {
            id: 65,
            name: "I can work a booth/seminar/etc.",
            description: "",
            placeholder: "I can work a booth/seminar/etc.",
          },
        },
        {
          questionOption: {
            id: 169,
          },
          option: {
            id: 66,
            name: "I can come early for booth prep.",
            description: "",
            placeholder: "I can come early for booth prep.",
          },
        },
        {
          questionOption: {
            id: 170,
          },
          option: {
            id: 67,
            name: "I can stay late for booth takedown.",
            description: "",
            placeholder: "I can stay late for booth takedown.",
          },
        },
      ],
    },
    {
      name:
        "Please note the certainty of your ability to attend GaryCon, if chosen.",
      description: "",
      placeholder:
        "Please note the certainty of your ability to attend GaryCon, if chosen.",
      isRequired: false,
      id: 126,
      sortOrder: 4,
      surveyQuestion: {
        sortOrder: 4,
      },
      questionType: {
        id: 4,
        name: "Multiline Text",
        description: "",
      },
      questionOption: [],
    },
    {
      name: "Origins, Columbus Ohio / June 21-25th",
      description: "",
      placeholder: "Origins, Columbus Ohio / June 21-25th",
      isRequired: false,
      id: 127,
      sortOrder: 5,
      surveyQuestion: {
        sortOrder: 5,
      },
      questionType: {
        id: 6,
        name: "checkbox",
        description: "",
      },
      questionOption: [
        {
          questionOption: {
            id: 171,
          },
          option: {
            id: 62,
            name: "I want to GM this con.",
            description: "",
            placeholder: "I want to GM this con.",
          },
        },
        {
          questionOption: {
            id: 172,
          },
          option: {
            id: 63,
            name: "I need a room.",
            description: "",
            placeholder: "I need a room.",
          },
        },
        {
          questionOption: {
            id: 173,
          },
          option: {
            id: 64,
            name: "I need a badge.",
            description: "",
            placeholder: "I need a badge.",
          },
        },
        {
          questionOption: {
            id: 174,
          },
          option: {
            id: 65,
            name: "I can work a booth/seminar/etc.",
            description: "",
            placeholder: "I can work a booth/seminar/etc.",
          },
        },
        {
          questionOption: {
            id: 175,
          },
          option: {
            id: 66,
            name: "I can come early for booth prep.",
            description: "",
            placeholder: "I can come early for booth prep.",
          },
        },
        {
          questionOption: {
            id: 176,
          },
          option: {
            id: 67,
            name: "I can stay late for booth takedown.",
            description: "",
            placeholder: "I can stay late for booth takedown.",
          },
        },
      ],
    },
    {
      name:
        "Please note the certainty of your ability to attend Origins, if chosen.",
      description: "",
      placeholder:
        "Please note the certainty of your ability to attend Origins, if chosen.",
      isRequired: false,
      id: 128,
      sortOrder: 6,
      surveyQuestion: {
        sortOrder: 6,
      },
      questionType: {
        id: 4,
        name: "Multiline Text",
        description: "",
      },
      questionOption: [],
    },
    {
      name: "GenCon, Indianapolis Indiana / August 3-6th",
      description: "",
      placeholder: "GenCon, Indianapolis Indiana / August 3-6th",
      isRequired: false,
      id: 129,
      sortOrder: 7,
      surveyQuestion: {
        sortOrder: 7,
      },
      questionType: {
        id: 6,
        name: "checkbox",
        description: "",
      },
      questionOption: [
        {
          questionOption: {
            id: 177,
          },
          option: {
            id: 62,
            name: "I want to GM this con.",
            description: "",
            placeholder: "I want to GM this con.",
          },
        },
        {
          questionOption: {
            id: 178,
          },
          option: {
            id: 63,
            name: "I need a room.",
            description: "",
            placeholder: "I need a room.",
          },
        },
        {
          questionOption: {
            id: 179,
          },
          option: {
            id: 64,
            name: "I need a badge.",
            description: "",
            placeholder: "I need a badge.",
          },
        },
        {
          questionOption: {
            id: 180,
          },
          option: {
            id: 65,
            name: "I can work a booth/seminar/etc.",
            description: "",
            placeholder: "I can work a booth/seminar/etc.",
          },
        },
        {
          questionOption: {
            id: 181,
          },
          option: {
            id: 66,
            name: "I can come early for booth prep.",
            description: "",
            placeholder: "I can come early for booth prep.",
          },
        },
        {
          questionOption: {
            id: 182,
          },
          option: {
            id: 67,
            name: "I can stay late for booth takedown.",
            description: "",
            placeholder: "I can stay late for booth takedown.",
          },
        },
      ],
    },
    {
      name:
        "Please note the certainty of your ability to attend GenCon, if chosen.",
      description: "",
      placeholder:
        "Please note the certainty of your ability to attend GenCon, if chosen.",
      isRequired: false,
      id: 130,
      sortOrder: 8,
      surveyQuestion: {
        sortOrder: 8,
      },
      questionType: {
        id: 4,
        name: "Multiline Text",
        description: "",
      },
      questionOption: [],
    },
    {
      name: "GameHoleCon, Madison Wisconsin / October 19-22nd",
      description: "",
      placeholder: "GameHoleCon, Madison Wisconsin / October 19-22nd",
      isRequired: false,
      id: 131,
      sortOrder: 9,
      surveyQuestion: {
        sortOrder: 9,
      },
      questionType: {
        id: 6,
        name: "checkbox",
        description: "",
      },
      questionOption: [
        {
          questionOption: {
            id: 183,
          },
          option: {
            id: 62,
            name: "I want to GM this con.",
            description: "",
            placeholder: "I want to GM this con.",
          },
        },
        {
          questionOption: {
            id: 184,
          },
          option: {
            id: 63,
            name: "I need a room.",
            description: "",
            placeholder: "I need a room.",
          },
        },
        {
          questionOption: {
            id: 185,
          },
          option: {
            id: 64,
            name: "I need a badge.",
            description: "",
            placeholder: "I need a badge.",
          },
        },
        {
          questionOption: {
            id: 186,
          },
          option: {
            id: 65,
            name: "I can work a booth/seminar/etc.",
            description: "",
            placeholder: "I can work a booth/seminar/etc.",
          },
        },
        {
          questionOption: {
            id: 187,
          },
          option: {
            id: 66,
            name: "I can come early for booth prep.",
            description: "",
            placeholder: "I can come early for booth prep.",
          },
        },
        {
          questionOption: {
            id: 188,
          },
          option: {
            id: 67,
            name: "I can stay late for booth takedown.",
            description: "",
            placeholder: "I can stay late for booth takedown.",
          },
        },
      ],
    },
    {
      name:
        "Please note the certainty of your ability to attend GameHoleCon, if chosen.",
      description: "",
      placeholder:
        "Please note the certainty of your ability to attend GameHoleCon, if chosen.",
      isRequired: false,
      id: 133,
      sortOrder: 10,
      surveyQuestion: {
        sortOrder: 10,
      },
      questionType: {
        id: 4,
        name: "Multiline Text",
        description: "",
      },
      questionOption: [],
    },
    {
      name: "PAX Unplugged, Philadelphia Pennsylvania / December 2-4th",
      description: "",
      placeholder: "PAX Unplugged, Philadelphia Pennsylvania / December 2-4th",
      isRequired: false,
      id: 134,
      sortOrder: 11,
      surveyQuestion: {
        sortOrder: 11,
      },
      questionType: {
        id: 6,
        name: "checkbox",
        description: "",
      },
      questionOption: [
        {
          questionOption: {
            id: 189,
          },
          option: {
            id: 62,
            name: "I want to GM this con.",
            description: "",
            placeholder: "I want to GM this con.",
          },
        },
        {
          questionOption: {
            id: 190,
          },
          option: {
            id: 63,
            name: "I need a room.",
            description: "",
            placeholder: "I need a room.",
          },
        },
        {
          questionOption: {
            id: 191,
          },
          option: {
            id: 64,
            name: "I need a badge.",
            description: "",
            placeholder: "I need a badge.",
          },
        },
        {
          questionOption: {
            id: 192,
          },
          option: {
            id: 65,
            name: "I can work a booth/seminar/etc.",
            description: "",
            placeholder: "I can work a booth/seminar/etc.",
          },
        },
        {
          questionOption: {
            id: 193,
          },
          option: {
            id: 66,
            name: "I can come early for booth prep.",
            description: "",
            placeholder: "I can come early for booth prep.",
          },
        },
        {
          questionOption: {
            id: 194,
          },
          option: {
            id: 67,
            name: "I can stay late for booth takedown.",
            description: "",
            placeholder: "I can stay late for booth takedown.",
          },
        },
      ],
    },
    {
      name:
        "Please note the certainty of your ability to attend PAX Unplugged, if chosen.",
      description: "",
      placeholder:
        "Please note the certainty of your ability to attend PAX Unplugged, if chosen.",
      isRequired: false,
      id: 135,
      sortOrder: 12,
      surveyQuestion: {
        sortOrder: 12,
      },
      questionType: {
        id: 4,
        name: "Multiline Text",
        description: "",
      },
      questionOption: [],
    },
    {
      name: "Empty Question Type Test",
      description: "",
      placeholder: "Empty Question Type Test",
      isRequired: false,
      id: 135,
      sortOrder: 12,
      surveyQuestion: {
        sortOrder: 12,
      },
      questionType: {
        id: 4,
        name: "",
        description: "",
      },
      questionOption: [],
    },
    {
      name: "number Question Type Test",
      description: "",
      placeholder: "number Question Type Test",
      isRequired: false,
      id: 135,
      sortOrder: 12,
      surveyQuestion: {
        sortOrder: 12,
      },
      questionType: {
        id: 4,
        name: "number",
        description: "",
      },
      questionOption: [],
    },
    {
      name: "Multiple-Toggle Question Type Test",
      description: "",
      placeholder: "Multiple-Toggle Question Type Test",
      isRequired: false,
      id: 135,
      sortOrder: 12,
      surveyQuestion: {
        sortOrder: 12,
      },
      questionType: {
        id: 4,
        name: "multiple-toggle",
        description: "",
      },
      questionOption: [],
    },
    {
      name: "File Question Type Test",
      description: "",
      placeholder: "File Question Type Test",
      isRequired: false,
      id: 135,
      sortOrder: 12,
      surveyQuestion: {
        sortOrder: 12,
      },
      questionType: {
        id: 4,
        name: "file",
        description: "",
      },
      questionOption: [],
    },
    {
      name: "Which RPG-systems can you run at a convention?",
      description: "",
      placeholder: "Which RPG-systems can you run at a convention?",
      isRequired: true,
      id: 136,
      sortOrder: 13,
      surveyQuestion: {
        sortOrder: 13,
      },
      questionType: {
        id: 6,
        name: "checkbox",
        description: "",
      },
      questionOption: [
        {
          questionOption: {
            id: 195,
          },
          option: {
            id: 68,
            name: "5th Edition",
            description: "",
            placeholder: "5th Edition",
          },
        },
        {
          questionOption: {
            id: 196,
          },
          option: {
            id: 69,
            name: "Mork Borg",
            description: "",
            placeholder: "Mork Borg",
          },
        },
        {
          questionOption: {
            id: 197,
          },
          option: {
            id: 70,
            name: "Mothership 1e",
            description: "",
            placeholder: "Mothership 1e",
          },
        },
        {
          questionOption: {
            id: 198,
          },
          option: {
            id: 71,
            name: "OSE",
            description: "",
            placeholder: "OSE",
          },
        },
        {
          questionOption: {
            id: 199,
          },
          option: {
            id: 72,
            name: "Hannibal the RPG (playtest)",
            description: "",
            placeholder: "Hannibal the RPG (playtest)",
          },
        },
      ],
    },
    {
      name:
        "List any room requests/requirements. Please note that we may not be able to meet every request.",
      description: "",
      placeholder:
        "List any room requests/requirements. Please note that we may not be able to meet every request.",
      isRequired: true,
      id: 137,
      sortOrder: 14,
      surveyQuestion: {
        sortOrder: 14,
      },
      questionType: {
        id: 4,
        name: "Multiline Text",
        description: "",
      },
      questionOption: [],
    },
    {
      name: "Please provide your T-shirt size.",
      description: "",
      placeholder: "Please provide your T-shirt size.",
      isRequired: true,
      id: 138,
      sortOrder: 15,
      surveyQuestion: {
        sortOrder: 15,
      },
      questionType: {
        id: 1,
        name: "string",
        description: "",
      },
      questionOption: [],
    },
    {
      name:
        "Please provide your TableTop.Events email address. This will allow us to quickly assign you events, when applicable.",
      description: "",
      placeholder:
        "Please provide your TableTop.Events email address. This will allow us to quickly assign you events, when applicable.",
      isRequired: true,
      id: 139,
      sortOrder: 16,
      surveyQuestion: {
        sortOrder: 16,
      },
      questionType: {
        id: 4,
        name: "Multiline Text",
        description: "",
      },
      questionOption: [],
    },
    {
      name:
        "Please provide the email address tied to any convention specific accounts you have. This will allow us to quickly assign you a badge.",
      description: "",
      placeholder:
        "Please provide the email address tied to any convention specific accounts you have. This will allow us to quickly assign you a badge.",
      isRequired: true,
      id: 140,
      sortOrder: 17,
      surveyQuestion: {
        sortOrder: 17,
      },
      questionType: {
        id: 3,
        name: "email",
        description: "",
      },
      questionOption: [],
    },
    {
      name: "Please provide us with your Discord handle (if applicable).",
      description: "",
      placeholder:
        "Please provide us with your Discord handle (if applicable).",
      isRequired: true,
      id: 141,
      sortOrder: 18,
      surveyQuestion: {
        sortOrder: 18,
      },
      questionType: {
        id: 1,
        name: "string",
        description: "",
      },
      questionOption: [],
    },
  ],
};

jest.mock("../components/publisher/surveyForm/CustomFormSubmit", () =>
  jest.fn()
);

describe("GMsRecruitment component", () => {
  test("renders without crashing", () => {
    render(
      <Provider store={store}>
        <GMsRecruitment gameMasterFormData={GAME_MASTER_FORM_DATA} />
      </Provider>
    );
  });
  test("renders the expected UI elements", () => {
    render(
      <Provider store={store}>
        <GMsRecruitment gameMasterFormData={GAME_MASTER_FORM_DATA} />
      </Provider>
    );
    const titleElement = screen.getByText("GM League Recruitment Form");
    expect(titleElement).toBeInTheDocument();

    const nameInput = screen.getByPlaceholderText(
      "Please give us your first and last name."
    );
    expect(nameInput).toBeInTheDocument();

    const questionOneTitle = screen.getAllByText(
      "GaryCon, Lake Geneva Wisconsin / March 23-26th"
    );
    expect(questionOneTitle[0]).toBeInTheDocument();

    const questionTwoTitle = screen.getAllByText(
      "Origins, Columbus Ohio / June 21-25th"
    );
    expect(questionTwoTitle[0]).toBeInTheDocument();

    const questionThreeTitle = screen.getAllByText(
      "GenCon, Indianapolis Indiana / August 3-6th"
    );
    expect(questionThreeTitle[0]).toBeInTheDocument();

    const questionFourTitle = screen.getAllByText(
      "GameHoleCon, Madison Wisconsin / October 19-22nd"
    );
    expect(questionFourTitle[0]).toBeInTheDocument();

    const questionFiveTitle = screen.getAllByText(
      "PAX Unplugged, Philadelphia Pennsylvania / December 2-4th"
    );
    expect(questionFiveTitle[0]).toBeInTheDocument();

    const questionSixTitle = screen.getByText(
      "Which RPG-systems can you run at a convention?"
    );
    expect(questionSixTitle).toBeInTheDocument();

    const gmThisConCheckBox = screen.getAllByText("I want to GM this con.");
    gmThisConCheckBox.map(val => {
      expect(val).toBeInTheDocument();
    });
    expect(gmThisConCheckBox).toHaveLength(5);

    const roomCheckBox = screen.getAllByText("I need a room.");
    roomCheckBox.map(val => {
      expect(val).toBeInTheDocument();
    });
    expect(roomCheckBox).toHaveLength(5);

    const badgeCheckBox = screen.getAllByText("I need a badge.");
    badgeCheckBox.map(val => {
      expect(val).toBeInTheDocument();
    });
    expect(badgeCheckBox).toHaveLength(5);

    const boothOrSeminarCheckBox = screen.getAllByText(
      "I can work a booth/seminar/etc."
    );
    boothOrSeminarCheckBox.map(val => {
      expect(val).toBeInTheDocument();
    });
    expect(boothOrSeminarCheckBox).toHaveLength(5);

    const boothPrepCheckBox = screen.getAllByText(
      "I can come early for booth prep."
    );
    boothPrepCheckBox.map(val => {
      expect(val).toBeInTheDocument();
    });
    expect(boothPrepCheckBox).toHaveLength(5);

    const boothTakedownCheckBox = screen.getAllByText(
      "I can stay late for booth takedown."
    );
    boothTakedownCheckBox.map(val => {
      expect(val).toBeInTheDocument();
    });
    expect(boothTakedownCheckBox).toHaveLength(5);

    const grayConCertaintyNoteField = screen.getByPlaceholderText(
      "Please note the certainty of your ability to attend GaryCon, if chosen."
    );
    expect(grayConCertaintyNoteField).toBeInTheDocument();

    const originsCertainityNoteField = screen.getByPlaceholderText(
      "Please note the certainty of your ability to attend Origins, if chosen."
    );
    expect(originsCertainityNoteField).toBeInTheDocument();

    const genConCertainityNoteField = screen.getByPlaceholderText(
      "Please note the certainty of your ability to attend GenCon, if chosen."
    );
    expect(genConCertainityNoteField).toBeInTheDocument();

    const gameHoleConCertainityNoteField = screen.getByPlaceholderText(
      "Please note the certainty of your ability to attend GameHoleCon, if chosen."
    );
    expect(gameHoleConCertainityNoteField).toBeInTheDocument();

    const paxUnpluggedCertainityNoteField = screen.getByPlaceholderText(
      "Please note the certainty of your ability to attend PAX Unplugged, if chosen."
    );
    expect(paxUnpluggedCertainityNoteField).toBeInTheDocument();

    const roomRequestField = screen.getByPlaceholderText(
      "List any room requests/requirements. Please note that we may not be able to meet every request."
    );
    expect(roomRequestField).toBeInTheDocument();

    const tShirtSizeField = screen.getByPlaceholderText(
      "Please provide your T-shirt size."
    );
    expect(tShirtSizeField).toBeInTheDocument();

    const tabelTopEmailField = screen.getByPlaceholderText(
      "Please provide your TableTop.Events email address. This will allow us to quickly assign you events, when applicable."
    );
    expect(tabelTopEmailField).toBeInTheDocument();

    const emailAdressField = screen.getByPlaceholderText(
      "Please provide the email address tied to any convention specific accounts you have. This will allow us to quickly assign you a badge."
    );
    expect(emailAdressField).toBeInTheDocument();

    const discordHandlerField = screen.getByPlaceholderText(
      "Please provide us with your Discord handle (if applicable)."
    );
    expect(discordHandlerField).toBeInTheDocument();

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });
  test("updates form values correctly when typing in a text field", async () => {
    render(
      <Provider store={store}>
        <GMsRecruitment gameMasterFormData={GAME_MASTER_FORM_DATA} />
      </Provider>
    );
    const nameInput = screen.getByPlaceholderText(
      "Please give us your first and last name."
    );
    await waitFor(() => {
      fireEvent.change(nameInput, { target: { value: "Ansh" } });
      expect(nameInput.value).toBe("Ansh");
    });

    const grayConCertaintyNoteField = screen.getByPlaceholderText(
      "Please note the certainty of your ability to attend GaryCon, if chosen."
    );
    await waitFor(() => {
      fireEvent.change(grayConCertaintyNoteField, {
        target: { value: "not sure" },
      });
      expect(grayConCertaintyNoteField.value).toBe("not sure");
    });

    const originsCertainityNoteField = screen.getByPlaceholderText(
      "Please note the certainty of your ability to attend Origins, if chosen."
    );
    await waitFor(() => {
      fireEvent.change(originsCertainityNoteField, {
        target: { value: "100%" },
      });
      expect(originsCertainityNoteField.value).toBe("100%");
    });

    const genConCertainityNoteField = screen.getByPlaceholderText(
      "Please note the certainty of your ability to attend GenCon, if chosen."
    );
    await waitFor(() => {
      fireEvent.change(genConCertainityNoteField, { target: { value: "90%" } });
      expect(genConCertainityNoteField.value).toBe("90%");
    });

    const gameHoleConCertainityNoteField = screen.getByPlaceholderText(
      "Please note the certainty of your ability to attend GameHoleCon, if chosen."
    );
    await waitFor(() => {
      fireEvent.change(gameHoleConCertainityNoteField, {
        target: { value: "0%" },
      });
      expect(gameHoleConCertainityNoteField.value).toBe("0%");
    });

    const paxUnpluggedCertainityNoteField = screen.getByPlaceholderText(
      "Please note the certainty of your ability to attend PAX Unplugged, if chosen."
    );
    await waitFor(() => {
      fireEvent.change(paxUnpluggedCertainityNoteField, {
        target: { value: "kind of" },
      });
      expect(paxUnpluggedCertainityNoteField.value).toBe("kind of");
    });

    const roomRequestField = screen.getByPlaceholderText(
      "List any room requests/requirements. Please note that we may not be able to meet every request."
    );
    await waitFor(() => {
      fireEvent.change(roomRequestField, { target: { value: "AC please" } });
      expect(roomRequestField.value).toBe("AC please");
    });

    const tShirtSizeField = screen.getByPlaceholderText(
      "Please provide your T-shirt size."
    );
    await waitFor(() => {
      fireEvent.change(tShirtSizeField, { target: { value: "XL" } });
      expect(tShirtSizeField.value).toBe("XL");
    });

    const tabelTopEmailField = screen.getByPlaceholderText(
      "Please provide your TableTop.Events email address. This will allow us to quickly assign you events, when applicable."
    );
    await waitFor(() => {
      fireEvent.change(tabelTopEmailField, {
        target: { value: "test@tabletop.com" },
      });
      expect(tabelTopEmailField.value).toBe("test@tabletop.com");
    });

    const emailAdressField = screen.getByPlaceholderText(
      "Please provide the email address tied to any convention specific accounts you have. This will allow us to quickly assign you a badge."
    );
    await waitFor(() => {
      fireEvent.change(emailAdressField, {
        target: { value: "test@gmail.com" },
      });
      expect(emailAdressField.value).toBe("test@gmail.com");
    });

    const discordHandlerField = screen.getByPlaceholderText(
      "Please provide us with your Discord handle (if applicable)."
    );
    await waitFor(() => {
      fireEvent.change(discordHandlerField, { target: { value: "test#4564" } });
      expect(discordHandlerField.value).toBe("test#4564");
    });
  });
  test("shows validation errors when required fields are empty on form submission", async () => {
    render(
      <Provider store={store}>
        <GMsRecruitment gameMasterFormData={GAME_MASTER_FORM_DATA} />
      </Provider>
    );
    const submitButton = screen.getByRole("button");

    fireEvent.click(submitButton);
    await waitFor(() => {
      screen.getAllByText("This field is required.").map(val => {
        expect(val).toBeInTheDocument();
      });
      expect(screen.getAllByText("This field is required.")).toHaveLength(5);
      expect(screen.getByText("Email is required.")).toBeInTheDocument();
    });
  });
  test("shows validation errors for invalid data", async () => {
    render(
      <Provider store={store}>
        <GMsRecruitment gameMasterFormData={GAME_MASTER_FORM_DATA} />
      </Provider>
    );

    const nameInput = screen.getByPlaceholderText(
      "Please give us your first and last name."
    );
    fireEvent.change(nameInput, { target: { value: "Ansh" } });

    const roomRequestField = screen.getByPlaceholderText(
      "List any room requests/requirements. Please note that we may not be able to meet every request."
    );
    fireEvent.change(roomRequestField, { target: { value: "AC please" } });

    const tShirtSizeField = screen.getByPlaceholderText(
      "Please provide your T-shirt size."
    );
    fireEvent.change(tShirtSizeField, { target: { value: "XL" } });

    const tabelTopEmailField = screen.getByPlaceholderText(
      "Please provide your TableTop.Events email address. This will allow us to quickly assign you events, when applicable."
    );
    fireEvent.change(tabelTopEmailField, {
      target: { value: "test@tabletop.com" },
    });

    const emailAdressField = screen.getByPlaceholderText(
      "Please provide the email address tied to any convention specific accounts you have. This will allow us to quickly assign you a badge."
    );
    fireEvent.change(emailAdressField, { target: { value: "testingGmail" } });
    const discordHandlerField = screen.getByPlaceholderText(
      "Please provide us with your Discord handle (if applicable)."
    );
    fireEvent.change(discordHandlerField, { target: { value: "test#4564" } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
    fireEvent.blur(emailAdressField);
    await waitFor(() => {
      expect(
        screen.getByText("Please enter valid email Address.")
      ).toBeInTheDocument();
    });
  });
  test("does not show validation error for valid data", async () => {
    render(
      <Provider store={store}>
        <GMsRecruitment gameMasterFormData={GAME_MASTER_FORM_DATA} />
      </Provider>
    );

    const nameInput = screen.getByPlaceholderText(
      "Please give us your first and last name."
    );
    fireEvent.change(nameInput, { target: { value: "test" } });

    const roomRequestField = screen.getByPlaceholderText(
      "List any room requests/requirements. Please note that we may not be able to meet every request."
    );
    fireEvent.change(roomRequestField, { target: { value: "AC please" } });

    const tShirtSizeField = screen.getByPlaceholderText(
      "Please provide your T-shirt size."
    );
    fireEvent.change(tShirtSizeField, { target: { value: "XL" } });

    const tabelTopEmailField = screen.getByPlaceholderText(
      "Please provide your TableTop.Events email address. This will allow us to quickly assign you events, when applicable."
    );
    fireEvent.change(tabelTopEmailField, {
      target: { value: "test@tabletop.com" },
    });

    const emailAdressField = screen.getByPlaceholderText(
      "Please provide the email address tied to any convention specific accounts you have. This will allow us to quickly assign you a badge."
    );
    fireEvent.change(emailAdressField, {
      target: { value: "thescalion114@gmail.com" },
    });

    const discordHandlerField = screen.getByPlaceholderText(
      "Please provide us with your Discord handle (if applicable)."
    );
    fireEvent.change(discordHandlerField, { target: { value: "test#4564" } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.queryAllByRole("error")).toHaveLength(0);
    });
  });
  test("clicking on a checkbox updates the form values correctly", () => {
    render(
      <Provider store={store}>
        <GMsRecruitment gameMasterFormData={GAME_MASTER_FORM_DATA} />
      </Provider>
    );

    const checkboxClicked = async (index, domNode) => {
      if (index % 2 === 0) {
        await waitFor(() => {
          fireEvent.click(domNode);
          expect(domNode).toHaveAttribute("checked");
        });
      } else {
        expect(domNode).not.toHaveAttribute("checked");
      }
    };

    const gmThisConCheckBox = screen.getAllByText("I want to GM this con.");
    gmThisConCheckBox.map((val, index) => {
      expect(val).toBeInTheDocument();
      checkboxClicked(index, val);
    });
    expect(gmThisConCheckBox).toHaveLength(5);

    const roomCheckBox = screen.getAllByText("I need a room.");
    roomCheckBox.map((val, index) => {
      expect(val).toBeInTheDocument();
      checkboxClicked(index, val);
    });
    expect(roomCheckBox).toHaveLength(5);

    const badgeCheckBox = screen.getAllByText("I need a badge.");
    badgeCheckBox.map((val, index) => {
      expect(val).toBeInTheDocument();
      checkboxClicked(index, val);
    });
    expect(badgeCheckBox).toHaveLength(5);

    const boothOrSeminarCheckBox = screen.getAllByText(
      "I can work a booth/seminar/etc."
    );
    boothOrSeminarCheckBox.map((val, index) => {
      expect(val).toBeInTheDocument();
      checkboxClicked(index, val);
    });
    expect(boothOrSeminarCheckBox).toHaveLength(5);

    const boothPrepCheckBox = screen.getAllByText(
      "I can come early for booth prep."
    );
    boothPrepCheckBox.map((val, index) => {
      expect(val).toBeInTheDocument();
      checkboxClicked(index, val);
    });
    expect(boothPrepCheckBox).toHaveLength(5);

    const boothTakedownCheckBox = screen.getAllByText(
      "I can stay late for booth takedown."
    );
    boothTakedownCheckBox.map((val, index) => {
      expect(val).toBeInTheDocument();
      checkboxClicked(index, val);
    });
    expect(boothTakedownCheckBox).toHaveLength(5);
  });
  test("submitting the form with valid data calls the CustomFormSubmit function.", async () => {
    CustomFormSubmit.mockImplementation(() => true);
    render(
      <Provider store={store}>
        <GMsRecruitment gameMasterFormData={GAME_MASTER_FORM_DATA} />
      </Provider>
    );

    const nameInput = screen.getByPlaceholderText(
      "Please give us your first and last name."
    );
    fireEvent.change(nameInput, { target: { value: "test" } });

    const roomRequestField = screen.getByPlaceholderText(
      "List any room requests/requirements. Please note that we may not be able to meet every request."
    );
    fireEvent.change(roomRequestField, { target: { value: "AC please" } });

    const tShirtSizeField = screen.getByPlaceholderText(
      "Please provide your T-shirt size."
    );
    fireEvent.change(tShirtSizeField, { target: { value: "XL" } });

    const tabelTopEmailField = screen.getByPlaceholderText(
      "Please provide your TableTop.Events email address. This will allow us to quickly assign you events, when applicable."
    );
    fireEvent.change(tabelTopEmailField, {
      target: { value: "test@tabletop.com" },
    });

    const emailAdressField = screen.getByPlaceholderText(
      "Please provide the email address tied to any convention specific accounts you have. This will allow us to quickly assign you a badge."
    );
    fireEvent.change(emailAdressField, {
      target: { value: "thescalion114@gmail.com" },
    });

    const discordHandlerField = screen.getByPlaceholderText(
      "Please provide us with your Discord handle (if applicable)."
    );
    fireEvent.change(discordHandlerField, { target: { value: "test#4564" } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.queryAllByRole("error")).toHaveLength(0);
      expect(CustomFormSubmit).toHaveBeenCalledTimes(1);
    });
    CustomFormSubmit.mockClear();
  });
  test("submitting the form with invalid data does not call the CustomFormSubmit function.", async () => {
    CustomFormSubmit.mockImplementation(() => true);
    render(
      <Provider store={store}>
        <GMsRecruitment gameMasterFormData={GAME_MASTER_FORM_DATA} />
      </Provider>
    );

    const nameInput = screen.getByPlaceholderText(
      "Please give us your first and last name."
    );
    fireEvent.change(nameInput, { target: { value: "Ansh" } });

    const roomRequestField = screen.getByPlaceholderText(
      "List any room requests/requirements. Please note that we may not be able to meet every request."
    );
    fireEvent.change(roomRequestField, { target: { value: "AC please" } });

    const tShirtSizeField = screen.getByPlaceholderText(
      "Please provide your T-shirt size."
    );
    fireEvent.change(tShirtSizeField, { target: { value: "XL" } });

    const tabelTopEmailField = screen.getByPlaceholderText(
      "Please provide your TableTop.Events email address. This will allow us to quickly assign you events, when applicable."
    );
    fireEvent.change(tabelTopEmailField, {
      target: { value: "test@tabletop.com" },
    });

    const emailAdressField = screen.getByPlaceholderText(
      "Please provide the email address tied to any convention specific accounts you have. This will allow us to quickly assign you a badge."
    );
    fireEvent.change(emailAdressField, { target: { value: "testingGmail" } });

    const discordHandlerField = screen.getByPlaceholderText(
      "Please provide us with your Discord handle (if applicable)."
    );
    fireEvent.change(discordHandlerField, { target: { value: "test#4564" } });

    const submitButton = screen.getByRole("button");
    fireEvent.blur(emailAdressField);
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getAllByRole("error")).toHaveLength(1);
      expect(CustomFormSubmit).toHaveBeenCalledTimes(0);
    });
    CustomFormSubmit.mockClear();
  });
  test("handle data when inputField type is not defined", () => {
    render(
      <Provider store={store}>
        <GMsRecruitment gameMasterFormData={GAME_MASTER_FORM_DATA} />
      </Provider>
    );
  });
});
