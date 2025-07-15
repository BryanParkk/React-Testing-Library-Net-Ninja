import { render, screen } from "@testing-library/react";
import FollowerList from "../FollowersList";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

jest.mock("axios");

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowerList />
    </BrowserRouter>
  );
};

describe("FollowerList", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: {
        results: [
          {
            login: { username: "johndoe" },
            name: { first: "John", last: "Doe" },
            picture: { large: "https://randomuser.me/api/portraits/men/1.jpg" },
          },
          {
            login: { username: "janesmith" },
            name: { first: "Jane", last: "Smith" },
            picture: {
              large: "https://randomuser.me/api/portraits/women/1.jpg",
            },
          },
          {
            login: { username: "user3" },
            name: { first: "User", last: "Three" },
            picture: { large: "https://randomuser.me/api/portraits/men/3.jpg" },
          },
          {
            login: { username: "user4" },
            name: { first: "User", last: "Four" },
            picture: { large: "https://randomuser.me/api/portraits/men/4.jpg" },
          },
          {
            login: { username: "user5" },
            name: { first: "User", last: "Five" },
            picture: { large: "https://randomuser.me/api/portraits/men/5.jpg" },
          },
        ],
      },
    });
  });

  it("should render follower items", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  it("should render multiple follower items", async () => {
    render(<MockFollowersList />);
    const followerDivElements = await screen.findAllByTestId(/follower-item/i);
    expect(followerDivElements.length).toBe(5);
  });
});
