const dateObj = new window.Date();

const eventsData = {
  current: [
    {
      id: 0,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 1,
      name: "Darts",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 2,
      name: "Gentle Yoga",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 12,
      totalAttendees: 12
    },
    {
      id: 3,
      name: "Golf",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 4,
      name: "Meditation",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 5,
      name: "Monthly Chess competition",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 6,
      name: "Bowling",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 18,
      totalAttendees: 18
    },
    {
      id: 7,
      name: "Salsa dance classes",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 8,
      name: "Weekly Movie:The Notebook",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 9,
      name: "Weekly Movie:Dinner with Beatrix",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 10,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 11,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 12,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 13,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 14,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 15,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 16,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 17,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 18,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 19,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 20,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 21,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 22,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 23,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 24,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 25,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 26,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 27,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 28,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 29,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 30,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 31,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 32,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 33,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 34,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 35,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 36,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 37,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 38,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 39,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 40,
      name: "Bowls",
      date: new window.Date(),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    }
  ],
  upcoming: [
    {
      id: 41,
      name: "Weekly Movie:The Notebook",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 42,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 43,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 44,
      name: "Salsa dance classes",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 45,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 46,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 47,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 48,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 49,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 50,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 51,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 52,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 53,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 54,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 55,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 56,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 57,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 58,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 59,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 60,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 61,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 62,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 63,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 64,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 65,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 66,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 67,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 68,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 69,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 70,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 71,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 72,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 73,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 74,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 75,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 76,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 77,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 78,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 79,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 80,
      name: "Bowls",
      date: new window.Date("01-02-2020"),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    }
  ],
  outdated: [
    {
      id: 81,
      name: "Bowls",
      date: dateObj.setDate(dateObj.getDate() - 1),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 82,
      name: "Salsa dance classes",
      date: dateObj.setDate(dateObj.getDate() - 1),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 83,
      name: "Meditation",
      date: dateObj.setDate(dateObj.getDate() - 1),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 84,
      name: "Bowls",
      date: dateObj.setDate(dateObj.getDate() - 1),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 85,
      name: "Monthly Chess competition",
      date: dateObj.setDate(dateObj.getDate() - 1),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    },
    {
      id: 86,
      name: "Bowls",
      date: dateObj.setDate(dateObj.getDate() - 1),
      time: "7:00pm - 8:00pm",
      repeats: 12,
      location: "Level 5, Building A",
      allowedAttendees: 6,
      totalAttendees: 5
    }
  ]
};

export default eventsData;
