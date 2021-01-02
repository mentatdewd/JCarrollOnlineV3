import { BlogItemViewModel } from "../../blogArea/view-models/blog-item-view";
import { ForaViewModel } from "../../fora/view-models/fora-view";
import { ForumThreadsViewModel } from "../../fora/view-models/forum-threads-view";
import { MicroPostViewModel } from "../../microPostsArea/view-models/micropost-view";

export interface ApplicationUserViewModel {
  ScreenName: string;
  MicroPostEmailNotifications: boolean;
  MicroPostSmsNotifications: boolean;


        // Navigation Property
  BlogItems: BlogItemViewModel[];
  ForumThreadEntries: ForumThreadsViewModel[];
  ForumsModerated: ForaViewModel[];
  MicroPosts: MicroPostViewModel[];
  FollowingUsers: ApplicationUserViewModel[];
  FollowUsers: ApplicationUserViewModel[];

}
