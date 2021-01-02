import { ApplicationUserViewModel } from "../../usersArea/view-models/ApplicationUserViewMode";
import { ForaViewModel } from "./fora-view";

export interface ThreadViewModel {
  id: number;
  rootId?: number;
  parent?: ThreadViewModel;
  children?: ThreadViewModel[];
  forum: ForaViewModel;
  postCount: number;
  replies: number;
  author: ApplicationUserViewModel;
  content: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  postNumber: number;
  locked: boolean;
  imageList: string[];
  lastReply: string;
}
