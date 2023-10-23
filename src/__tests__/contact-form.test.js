import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "@/store/store";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "@/components/contact-form";
import ContactFormSubmit from "../components/contact-form-submit";

jest.mock("../components/contact-form-submit", () => jest.fn());

const mockZoneContent = [
  {
    Id: 723,
    ZoneId: 53,
    ContentId: 637,
    ComponentId: 45,
    Name: "Contact form zone content",
    Description: "",
    FeaturedText: null,
    CallToAction: null,
    IsDeleted: false,
    SortOrder: 999,
    Component: {
      Id: 45,
      Name: "ContactForm",
      Description: "",
      FilePath:
        "https://res.cloudinary.com/wogd/raw/upload/v1658726775/site/component/cqarb394qymdcyxcekep.js",
      SortOrder: 999,
      IsDeleted: false,
    },
    Zone: {
      Id: 53,
      ZoneTypeId: 25,
      ParentId: null,
      Name: "Contact Form",
      Description: "",
      NewsLetterDate: null,
      IsDeleted: false,
      ZoneContents: [
        {
          Id: 723,
          ZoneId: 53,
          ContentId: 637,
          ComponentId: 45,
          Name: "Contact form zone content",
          Description: "",
          FeaturedText: null,
          CallToAction: null,
          IsDeleted: false,
          SortOrder: 999,
          Component: {
            Id: 45,
            Name: "ContactForm",
            Description: "",
            FilePath:
              "https://res.cloudinary.com/wogd/raw/upload/v1658726775/site/component/cqarb394qymdcyxcekep.js",
            SortOrder: 999,
            IsDeleted: false,
          },
          Content: {
            Id: 637,
            ContentTypeId: 145,
            Name: "Contact form content",
            Description: "",
            ContentObject:
              '{"title":"Contact Us","subTitle":"We are eager to hear from you so please leave us a message","buttonName":"Send Message"}',
            IsDeleted: false,
          },
        },
      ],
      ZoneParents: [],
      ZoneMedias: [],
      ZoneMenus: [],
    },
    ZoneContentMedias: [],
    Content: {
      Id: 637,
      ContentTypeId: 145,
      Name: "Contact form content",
      Description: "",
      ContentObject:
        '{"title":"Contact Us","subTitle":"We are eager to hear from you so please leave us a message","buttonName":"Send Message"}',
      IsDeleted: false,
      ContentMenus: [],
      ContentLocations: [],
      ContentType: {
        Id: 145,
        Name: "Contact form content type",
        Description: "",
        ContentObject: '{"title":"","subTitle":"","buttonName":""}',
        IsDeleted: false,
      },
      ContentMedias: [],
    },
  },
];
const mockContactFormData = {
  survey: {
    id: 2,
    name: "Contact Us",
    description: "We are eager to hear from you so please leave us a message",
  },
  questions: [
    {
      name: "First Name",
      description: "name",
      placeholder: "First Name",
      isRequired: true,
      id: 6,
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
      name: "Last Name",
      description: "name",
      placeholder: "Last Name",
      isRequired: true,
      id: 7,
      sortOrder: 5,
      surveyQuestion: {
        sortOrder: 2,
      },
      questionType: {
        id: 1,
        name: "string",
        description: "",
      },
      questionOption: [],
    },
    {
      name: "Email Address",
      description: "email",
      placeholder: "Please enter your email address",
      isRequired: true,
      id: 3,
      sortOrder: 3,
      surveyQuestion: {
        sortOrder: 3,
      },
      questionType: {
        id: 3,
        name: "email",
        description: "",
      },
      questionOption: [],
    },
    {
      name: "Phone",
      description: "phone",
      placeholder: "Please enter a valid international phone number",
      isRequired: true,
      id: 2,
      sortOrder: 2,
      surveyQuestion: {
        sortOrder: 4,
      },
      questionType: {
        id: 2,
        name: "number",
        description: "",
      },
      questionOption: [],
    },
    {
      name: "Your Message",
      description: "message",
      placeholder: "Please enter a description of your project",
      isRequired: false,
      id: 4,
      sortOrder: 4,
      surveyQuestion: {
        sortOrder: 5,
      },
      questionType: {
        id: 4,
        name: "Multiline Text",
        description: "",
      },
      questionOption: [],
    },
  ],
};

describe("ContactForm", () => {
  it("should render without any errors", () => {
    render(
      <Provider store={store}>
        <ContactForm
          zoneContent={mockZoneContent}
          contactFormData={mockContactFormData}
        />
      </Provider>
    );
    // Assert that the component is rendered without errors
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(
      screen.getByText(
        "We are eager to hear from you so please leave us a message"
      )
    ).toBeInTheDocument();
  });

  it("should set initial form values correctly", () => {
    render(
      <Provider store={store}>
        <ContactForm
          zoneContent={mockZoneContent}
          contactFormData={mockContactFormData}
        />
      </Provider>
    );
    // Assert that the input fields have the correct initial values
    expect(screen.getByPlaceholderText("First Name")).toHaveValue("");
    expect(screen.getByPlaceholderText("Last Name")).toHaveValue("");
    expect(screen.getByPlaceholderText("Email Address")).toHaveValue("");
    expect(screen.getByPlaceholderText("Phone")).toHaveValue("");
    expect(screen.getByPlaceholderText("Your Message")).toHaveValue("");
  });

  it("should display validation errors for invalid fields", async () => {
    render(
      <Provider store={store}>
        <ContactForm
          zoneContent={mockZoneContent}
          contactFormData={mockContactFormData}
        />
      </Provider>
    );

    // Submit the form without filling any fields
    fireEvent.click(screen.getByText("Send Message"));

    // Assert that the error messages are displayed for required fields
    await waitFor(() => {
      screen.getAllByText("This field is required.").map(val => {
        expect(val).toBeInTheDocument();
      });
      expect(screen.getAllByText("This field is required.")).toHaveLength(2);
      expect(screen.getAllByText("This Field is required.")).toHaveLength(1);
      expect(screen.getByText("Email is required.")).toBeInTheDocument();
    });
  });

  it("should handle user input in input fields correctly", async () => {
    render(
      <Provider store={store}>
        <ContactForm
          zoneContent={mockZoneContent}
          contactFormData={mockContactFormData}
        />
      </Provider>
    );
    await waitFor(() => {
      fireEvent.change(screen.getByPlaceholderText("First Name"), {
        target: { value: "John" },
      });
      expect(screen.getByPlaceholderText("First Name")).toHaveValue("John");
    });

    await waitFor(() => {
      fireEvent.change(screen.getByPlaceholderText("Last Name"), {
        target: { value: "Doe" },
      });
      expect(screen.getByPlaceholderText("Last Name")).toHaveValue("Doe");
    });
    await waitFor(() => {
      fireEvent.change(screen.getByPlaceholderText("Email Address"), {
        target: { value: "test@example.com" },
      });
      expect(screen.getByPlaceholderText("Email Address")).toHaveValue(
        "test@example.com"
      );
    });

    await waitFor(() => {
      fireEvent.change(screen.getByPlaceholderText("Phone"), {
        target: { value: "1234567890" },
      });
      expect(screen.getByPlaceholderText("Phone")).toHaveValue("1234567890");
    });
    await waitFor(() => {
      fireEvent.change(screen.getByPlaceholderText("Your Message"), {
        target: { value: "Test message" },
      });
      expect(screen.getByPlaceholderText("Your Message")).toHaveValue(
        "Test message"
      );
    });
  });

  it("should call ContactFormSubmit with valid props when the submit button is clicked", async () => {
    ContactFormSubmit.mockImplementation(() => null);

    const { getByText } = render(
      <Provider store={store}>
        <ContactForm
          zoneContent={mockZoneContent}
          contactFormData={mockContactFormData}
        />
      </Provider>
    );
    fireEvent.change(screen.getByPlaceholderText("First Name"), {
      target: { value: "John" },
    });

    fireEvent.change(screen.getByPlaceholderText("Last Name"), {
      target: { value: "Doe" },
    });

    fireEvent.change(screen.getByPlaceholderText("Email Address"), {
      target: { value: "test@example.com" },
    });

    fireEvent.change(screen.getByPlaceholderText("Phone"), {
      target: { value: "1234567890" },
    });

    fireEvent.change(screen.getByPlaceholderText("Your Message"), {
      target: { value: "Test message" },
    });

    const submitButton = screen.getByText("Send Message");
    fireEvent.click(submitButton);
    const contactFormData = mockContactFormData;

    await waitFor(() => {
      expect(ContactFormSubmit).toHaveBeenCalledTimes(1);
      expect(ContactFormSubmit).toHaveBeenCalledWith(
        {
          string6: "John",
          string7: "Doe",
          email3: "test@example.com",
          number2: "1234567890",
          MultilineText4: "Test message",
        },
        contactFormData,
        expect.any(Function),
        expect.any(Function),
        true
      );
    });
  });
});
