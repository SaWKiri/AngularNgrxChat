import { Chat, User } from "../models/app.models";

export const TOKEN = 'xmZGMltUDec'

export const CHATS: Chat[] = [
  {
    id: '1',
    type: 'user',
    name: 'meron',
    img: '',
    participants: [
      {
        id: '2',
        type: 'user',
        name: 'meron',
        alias: '!!meron!!',
        profileImg: 'https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg',
      } as User,
    ],
  },
  {
    id: '2',
    type: 'group',
    name: 'apartment3',
    img:'https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg',
    participants: [
      {
        id: '3',
        type: 'meron',
        name: 'meron1',
        alias: '!!meron1!!',
        profileImg:
          'https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg',
      } as User,
    ],
  },
];


export const USER: User = {
  id: '123456',
  name: 'Oron',
  alias: '$$oron$$',
  profileImg:
    'https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg',
};
