export interface UpdateChoreDto {
  id: number;
  title: string;
  cleaningStyle: 'task' | 'zone' | 'weekend warrior';
  content: string;
  imgUrl: string;
  altText: string;
}
