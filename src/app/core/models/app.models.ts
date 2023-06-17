export interface User {
  id: string;
  name: string;
  alias: string;
  profileImg: string;
}

export type chatType = 'user' | 'group';
export type MessageType = 'ritchText' | 'img' | 'replay' | 'respond';

export enum EChatType {
  user = 'user',
  group = 'group',
}

export enum EMessageType {
  ritchText = 'ritchText',
  img = 'img',
  replay = 'replay',
  respond = 'respond',
}

export interface Chat {
  id: string;
  type: chatType;
  participants: User[];
  name: string;
  img: string;
}

export interface message {
  id: string;
  messageType: MessageType;
  contents: string[];
  img: string;
  timeStamp: Date;
  sender: User;
  recipient: User;
}
