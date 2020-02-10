import { User } from './user';

export enum MessageType {
  text = 'text',
  image = 'image',
}

export interface MessagePayload {
  type: MessageType;
  content: any;
}

export interface Message {
  id: string;
  sender: User;
  payloads: Array<MessagePayload>;
  createdAt: string;
}

export interface MessageGroup {
  sender: User;
  createdAt: string;
  messages: Array<Message>;
}

export interface ImageMessage {
  url: string;
  name?: string;
}
