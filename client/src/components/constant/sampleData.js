export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Faiyyazz",
    _id: "1",
    groupChat: false,
    // sameSender,
    members: ["1", "2", "3"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Dilshad",
    _id: "2",
    groupChat: false,
    // sameSender,
    members: ["1", "2", "3"],
  },
];

export const sampleUsers = [
  {
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "Faiyyazz",
    _id: "1",
  },
  {
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "Dilshad",
    _id: "2",
  },
  {
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "MFS",
    _id: "3",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Faiyyazz",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Dilshad",
    },
    _id: "2",
  },
];

export const sampleMessages = [
  {
    attachment: [
      {
        public_id: "asdfg",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "L**da ka message hai",
    _id: "zrexdbhunjgvbhjn",
    sender: {
      _id: "user._id",
      name: "Chaman Hootiya",
    },
    chat: "ChatId",
    createdAt: "2024-05-09T10:41:30.630z",
  },
  {
    attachment: [
      {
        public_id: "asdfg",
        url: "https://tse3.mm.bing.net/th?id=OIP.MgmLaKtuFHsPamyag0cUDwHaEo&pid=Api&P=0&h=180",
      },
    ],
    content: "2 L**da ka message hai",
    _id: "zrexdbhun",
    sender: {
      _id: "asdfghj",
      name: "Chaman Hootiya 2",
    },
    chat: "ChatId",
    createdAt: "2024-05-09T10:41:30.630z",
  },
];

export const dashboardData = {
  users: [
    {
      name: "Faiyyazz",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "1",
      username: "__imfaiyyazzz___",
      friends: 20,
      groups: 5,
    },
    {
      name: "Dilshad",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "2",
      username: "__dilshad__",
      friends: 10,
      groups: 3,
    },
  ],

  chats: [
    {
      name: "Dilshad",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [ 
        {
        _id: "1",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
        {
        _id: "2",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
      totalMessages: 20,
      creator: {
        name: "Dilshad",
        avatar: ["https://www.w3schools.com/howto/img_avatar.png",]
      }
    },
    {
      name: "Faiyyazzz",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: false,
      members: [ 
        {
        _id: "1",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
        {
        _id: "2",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
        {
        _id: "3",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
        {
        _id: "4",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
      ],
      totalMessages: 20,
      creator: {
        name: "Dilshad",
        avatar: ["https://www.w3schools.com/howto/img_avatar.png",]
      }
    },
    {
      name: "LabadBaaz",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "3",
      groupChat: false,
      members: [ 
        {
        _id: "1",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
        {
        _id: "2",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
        {
        _id: "3",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
      ],
      totalMessages: 20,
      creator: {
        name: "Dilshad",
        avatar: ["https://www.w3schools.com/howto/img_avatar.png",]
      }
    },
  ],
    messages: [
      {
        attachments: [],
        content: "L*uda ka Message hai",
        _id: "sfnsdjkfsdnfkjsbnd",
        sender: {
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
          name: "Chaman ",
        },
        chat: "chatId",
        groupChat: false,
        createdAt: "2024-02-12T10:41:30.630Z",
      },
  
      {
        attachments: [
          {
            public_id: "asdsad 2",
            url: "https://www.w3schools.com/howto/img_avatar.png",
          },
        ],
        content: "",
        _id: "sfnsdjkfsdnfkdddjsbnd",
        sender: {
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
          name: "Chaman  2",
        },
        chat: "chatId",
        groupChat: true,
        createdAt: "2024-02-12T10:41:30.630Z",
      },
    ],
  
};



