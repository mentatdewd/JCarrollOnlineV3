using JCarrollOnlineV3.Data;
using JCarrollOnlineV3.Models;
using JCarrollOnlineV3.ViewModels;
using Microsoft.EntityFrameworkCore;
using Omu.ValueInjecter;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JCarrollOnlineV3.Controllers.Helpers
{
    public static class ControllerHelpers
    {
        //private static Logger _logger = LogManager.GetCurrentClassLogger();

        public static async Task<int> GetThreadPostCountAsync(int thread, JCarrollOnlineV3DbContext data)
        {
            return data == null
                ? throw new ArgumentNullException(nameof(data))
                : await data.ForumThreadEntrys.Where(i => i.Root.Id == thread).AsQueryable().CountAsync().ConfigureAwait(false);
        }

        public static async Task<int> GetThreadCountAsync(Forum forum, JCarrollOnlineV3DbContext data)
        {
            return data == null
                ? throw new ArgumentNullException(nameof(data))
                : await data.ForumThreadEntrys.Where(i => i.Forum.Id == forum.Id && i.Parent == null).CountAsync().ConfigureAwait(false);
        }

        public static async Task<DateTime> GetLastReplyAsync(int? rootId, JCarrollOnlineV3DbContext data)
        {
            if (rootId != null)
            {
                if (data == null)
                {
                    throw new ArgumentNullException(nameof(data));
                }

                Models.ThreadEntry fte = await data.ForumThreadEntrys.Where(m => m.Root.Id == rootId).OrderByDescending(m => m.UpdatedAt).FirstOrDefaultAsync().ConfigureAwait(false);
                return fte.UpdatedAt;
            }
            else
            {
                return DateTime.Now;
            }
        }

        public static async Task<LastForumThread> GetLatestThreadDataAsync(Forum forum, JCarrollOnlineV3DbContext data)
        {
            LastForumThread lastThreadViewModel = new LastForumThread();

            if (data == null)
            {
                throw new ArgumentNullException(nameof(data));
            }

            Models.ThreadEntry forumThreadEntry = null;

            try
            {
                forumThreadEntry = await data.ForumThreadEntrys.Where(i => i.Forum.Id == forum.Id)
                .Include(i => i.Author)
                .OrderByDescending(i => i.UpdatedAt)
                .FirstOrDefaultAsync().ConfigureAwait(false);
            }
            catch(Exception exception)
            {
                Console.WriteLine($"ForumThreadEntrys query threw and exception: {exception.Message}");
            }

            if (forumThreadEntry != null)
            {
                lastThreadViewModel.InjectFrom(forumThreadEntry);
                lastThreadViewModel.Author = new ApplicationUserViewModel();
                lastThreadViewModel.Author.InjectFrom(forumThreadEntry.Author);
                lastThreadViewModel.Forum = new ForaViewModel();
                lastThreadViewModel.Forum.InjectFrom(forumThreadEntry.Forum);

                bool rootNotFound = true;

                if (forumThreadEntry.Parent?.Id != null)
                {
                    while (rootNotFound)
                    {
                        forumThreadEntry = await data.ForumThreadEntrys.FindAsync(forumThreadEntry.Parent?.Id).ConfigureAwait(false);
                        if (forumThreadEntry != null)
                        {
                            if (forumThreadEntry.Parent?.Id == null)
                            {
                                rootNotFound = false;
                            }
                        }
                    }
                }

                lastThreadViewModel.PostRoot = forumThreadEntry.Id;

                return lastThreadViewModel;
            }

            return null;
        }

        //public static async Task<RssFeedViewModel> UpdateRssAsync()
        //{
        //    _logger.Info("Obtaining rss data");
        //    Uri mlbUri = new Uri("https://www.mlb.com/mariners/feeds/news/rss.xml");
        //    TNX.RssReader.RssFeed rssFeed = await TNX.RssReader.RssHelper.ReadFeedAsync(mlbUri).ConfigureAwait(false);

        //    _logger.Info("Processing rss data");
        //    RssFeedViewModel rssFeedViewModel = new RssFeedViewModel
        //    {
        //        RssFeedItems = new List<RssFeedItemViewModel>()
        //    };

        //    foreach (TNX.RssReader.RssItem item in rssFeed.Items)
        //    {
        //        if (!string.IsNullOrWhiteSpace(item.Link))
        //        {
        //            RssFeedItemViewModel rss = new RssFeedItemViewModel();

        //            rss.InjectFrom(item);
        //            rss.Link = new Uri(item.Link);
        //            rss.UpdatedAt = DateTime.Now;
        //            rssFeedViewModel.RssFeedItems.Add(rss);
        //        }
        //    }

        //    _logger.Info(string.Format(CultureInfo.InvariantCulture, "Processed {0} rss records", rssFeedViewModel.RssFeedItems.Count));

        //    return rssFeedViewModel;
        //}
    }
}
