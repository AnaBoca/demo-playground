export interface Chore {
  id: number;
  title: string;
  cleaningStyle: CleaningStyle;
  content: string;
  imgUrl: string;
  altText: string;
}

export type CleaningStyle = 'task' | 'zone' | 'weekend warrior';
