type Tweet = {
  id: string;
  text: string;
  createdAt: Date;
  name: string;
  username: string;
  url?: string;
};

const tweets: Tweet[] = [
  {
    id: '1',
    text: '카카오 가즈아!',
    createdAt: new Date(),
    name: 'yong',
    username: 'yong',
    url: '',
  },
];

export async function getAll(): Promise<Tweet[]> {
  return tweets;
}
