export type GithubProfileSectionItem = {
  title: string;
  profiles: GithubProfileItem[];
};

export type GithubProfileItem = {
  userId: string;
};

export const exampleListItems: GithubProfileSectionItem[] = [
  {
    title: 'Favorites',
    profiles: [
      {
        userId: 'potados99',
      },
      {
        userId: 'GHeeJeon',
      },
      {
        userId: 'hambp',
      },
      {
        userId: 'bbaktaeho',
      },
      {
        userId: 'aa',
      },
    ],
  },
  {
    title: 'Visited',
    profiles: [
      {
        userId: 'ryuspace',
      },
    ],
  },
];
