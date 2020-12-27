export interface ForumThreadsViewModel {
  Id: number;
  Title: string;
  CreatedAt: string;
  UpdatedAt: string;
  Author: string;
  ForumId: number;
  ThreadParentId: number;
  Replies: number;
  Views: number;
  LastReply: string;
  Recs: number;
}
