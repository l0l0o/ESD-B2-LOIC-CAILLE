export type Subscriber = {
  id: string;
  name: string;
  email: string;
  message: string;
};

export type SubscriberDto = {
  name: string;
  email: string;
  message: string;
};

export type Subscribers = Subscriber[];
