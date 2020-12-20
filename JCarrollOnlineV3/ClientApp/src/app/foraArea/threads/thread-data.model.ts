export interface ThreadData {
  id: number;
  rootId?: number;
  parent?: ThreadData;
  parentPostNumber: number;
  children?: ThreadData[];
  forum: ForumViewModel;
  postCount: number;
  author: string;
  content: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  postNumber: number;
  locked: boolean;
  imageList: string[];
}

export interface ForumViewModel {
  Id: number;
  Title: string;
  Description: string;
  ThreadCount: number;
  LastThread: string;
}
