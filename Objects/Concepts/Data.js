// Sampale JSON (Here Expressed in Object format);
const API = {
  results: [
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Angelo",
        last: "Muller",
      },
      location: {
        street: {
          number: 8405,
          name: "Place de la Mairie",
        },
        city: "Fort-de-France",
        state: "Corse-du-Sud",
        country: "France",
        postcode: 21196,
        coordinates: {
          latitude: "-13.1371",
          longitude: "-89.2606",
        },
        timezone: {
          offset: "+9:00",
          description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
        },
      },
      email: "angelo.muller@example.com",
      login: {
        uuid: "0bed4531-22ef-4be4-9763-cef6a0451a72",
        username: "happyduck829",
        password: "isaac",
        salt: "kj38S4sv",
        md5: "ddd162498b86fe8e3ab84328f761b30c",
        sha1: "0f3a3b026521ebc5e8b7bd46828cbecf439e988b",
        sha256:
          "63200e26d305cc750b49211eea4ff190356547c9b586fa5484bc2468971bcfae",
      },
      dob: {
        date: "1997-02-07T02:07:52.900Z",
        age: 28,
      },
      registered: {
        date: "2021-07-13T12:00:59.585Z",
        age: 3,
      },
      phone: "04-02-30-64-17",
      cell: "06-62-14-31-91",
      id: {
        name: "INSEE",
        value: "1970170674699 49",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/42.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/42.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/42.jpg",
      },
      nat: "FR",
    },
  ],
  info: {
    seed: "8f5de3ffa6bbcc02",
    results: 1,
    page: 1,
    version: "1.4",
  },
};

module.exports = API;
