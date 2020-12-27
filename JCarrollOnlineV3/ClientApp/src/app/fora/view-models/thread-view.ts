export interface ThreadViewModel {
  id: number;
  rootId?: number;
  parent?: ThreadViewModel;
  parentPostNumber: number;
  children?: ThreadViewModel[];
  forum: ThreadViewModel;
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
