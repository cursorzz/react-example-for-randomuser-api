import React from "react";
import { UserList } from "../src/components/UserList";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const users = [
    {
      gender: "female",
      name: { title: "Mrs", first: "Nurdan", last: "Karaböcek" },
      location: {
        street: { number: 9334, name: "Doktorlar Cd" },
        city: "Rize",
        state: "Hatay",
        country: "Turkey",
        postcode: 41411,
        coordinates: { latitude: "76.1898", longitude: "93.4928" },
        timezone: { offset: "+6:00", description: "Almaty, Dhaka, Colombo" }
      },
      email: "nurdan.karabocek@example.com",
      login: {
        uuid: "b77ce2a6-5521-4627-a077-ce8b1367a0b5",
        username: "lazyrabbit925",
        password: "joel",
        salt: "vheAlDPb",
        md5: "60120d395e7f1c502e6d6880b3e999e4",
        sha1: "bde493c5cf9ce145c61643a4742615846ecc3687",
        sha256:
          "006214ba5d1cd8f9781fa9d1e95de6083cefc1532492af620053cb0a33520c85"
      },
      dob: { date: "1973-05-12T08:05:47.336Z", age: 47 },
      registered: { date: "2014-12-05T11:02:40.986Z", age: 6 },
      phone: "(134)-607-3573",
      cell: "(737)-003-0643",
      id: { name: "", value: null },
      picture: {
        large: "https://randomuser.me/api/portraits/women/9.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/9.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/9.jpg"
      },
      nat: "TR"
    }
  ];
  const tree = renderer.create(<UserList rows={users} />).toJSON();
  expect(tree).toMatchSnapshot();
});
