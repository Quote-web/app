/* eslint-disable max-len */

import type { ApiLangPack } from '../api/types';

import { IS_MAC_OS } from './windowEnvironment';

export default {
  Search: 'Search',
  SavedMessages: 'Saved Messages',
  ArchivedChats: 'Archived Chats',
  DoneChats: 'Archive',
  Contacts: 'Contacts',
  Settings: 'Settings',
  lng_menu_night_mode: 'Night Mode',
  lng_settings_enable_night_theme: 'Enable night mode',
  'Appearance.Animations': 'ANIMATIONS',
  TelegramFeatures: 'Ulu Features',
  AccDescrOpenMenu2: 'Open menu',
  NewMessageTitle: 'New Message',
  NewChannel: 'New Channel',
  NewGroup: 'New Group',
  'Common.Close': 'Close',
  FilterAllChats: 'Inbox',
  Inbox: 'Inbox',
  MarkAsUnread: 'Mark as unread',
  UnpinFromTop: 'Unpin from top',
  'ChatList.Mute': 'Mute',
  Archive: 'Archive',
  MarkDone: 'Mark as done',
  MarkNotDone: 'Mark as not done',
  Delete: 'Delete',
  DeleteChat: 'Delete and exit',
  FromYou: 'You',
  formatDateSchedule: 'MMM d',
  June: 'June',
  'Month.GenJune': 'June',
  'Month.ShortJune': 'Jun',
  MarkAsRead: 'Mark as read',
  PinToTop: 'Pin to top',
  'ChatList.Unmute': 'Unmute',
  'Group.LeaveGroup': 'Leave Group',
  LeaveChannel: 'Leave Channel',
  AttachPhoto: 'Photo',
  UnreadMessages: 'Unread Messages',
  'Weekday.Today': 'Today',
  Message: 'Message',
  AccDescrVoiceMessage: 'Record voice message',
  AccDescrPageDown: 'Go to bottom',
  chatDate: 'MMMM d',
  January: 'January',
  'Month.GenJanuary': 'January',
  'Month.ShortJanuary': 'Jan',
  February: 'February',
  'Month.GenFebruary': 'February',
  'Month.ShortFebruary': 'Feb',
  March: 'March',
  'Month.GenMarch': 'March',
  'Month.ShortMarch': 'Mar',
  April: 'April',
  'Month.GenApril': 'April',
  'Month.ShortApril': 'Apr',
  May: 'May',
  'Month.GenMay': 'May',
  'Month.ShortMay': 'May',
  'Weekday.Thursday': 'Thursday',
  EditedMessage: 'edited',
  chatFullDate: 'MMMM d, yyyy',
  September: 'September',
  'Month.GenSeptember': 'September',
  'Month.ShortSeptember': 'Sep',
  November: 'November',
  'Month.GenNovember': 'November',
  'Month.ShortNovember': 'Nov',
  December: 'December',
  'Month.GenDecember': 'December',
  'Month.ShortDecember': 'Dec',
  SearchAllChatsShort: 'Chats',
  SharedMediaTab2: 'Media',
  SharedLinksTab2: 'Links',
  SharedFilesTab2: 'Files',
  SharedMusicTab2: 'Music',
  SharedVoiceTab2: 'Voice',
  'PreviewSender.SendPhoto': {
    oneValue: 'Send Photo',
    otherValue: 'Send %d Photos',
  },
  Send: 'Send',
  'Preview.Dragging.AddItems': {
    oneValue: 'Add Item',
    otherValue: 'Add Items',
  },
  Caption: 'Caption',
  formatterMonthYear: 'MMMM yyyy',
  'Weekday.ShortMonday': 'Mon',
  'Weekday.ShortSaturday': 'Sat',
  'Weekday.ShortFriday': 'Fri',
  'Conversation.ScheduleMessage.SendOn': 'Send on %@ at %@',
  'Weekday.ShortThursday': 'Thu',
  'Weekday.ShortWednesday': 'Wed',
  'Weekday.ShortTuesday': 'Tue',
  'LastSeen.MinutesAgo': {
    oneValue: 'last seen 1 minute ago',
    otherValue: 'last seen %@ minutes ago',
  },
  'AttachmentMenu.PhotoOrVideo': 'Photo or Video',
  'AttachmentMenu.PhotoOrVideoHotkey': IS_MAC_OS ? 'Photo or Video [⌘+U]' : 'Photo or Video [Ctrl+U]',
  AttachDocument: 'File',
  SendWithoutSound: 'Send without sound',
  ScheduleMessage: 'Schedule message',
  ScheduleMessageHotkey: IS_MAC_OS ? 'Schedule message [⌥+Enter]' : 'Schedule message [Alt+Enter]',
  'Chat.PanelUnpinAllMessages': 'Unpin All Messages',
  'Chat.UnpinAllMessagesConfirmation': {
    oneValue: 'Do you want to unpin %d message in this chat?',
    otherValue: 'Do you want to unpin all %d messages in this chat?',
  },
  DialogUnpin: 'Unpin',
  Cancel: 'Cancel',
  AccDescrStickerSet: 'Sticker set',
  Recent: 'Recent',
  DeleteChatUser: 'Delete chat',
  'ChatList.DeleteChatConfirmation': 'Are you sure you want to delete the chat\nwith %@?',
  'ChatList.DeleteForEveryone': 'Delete for me and %@',
  'ChatList.DeleteForCurrentUser': 'Delete just for me',
  'LastSeen.HoursAgo': {
    oneValue: 'last seen 1 hour ago',
    otherValue: 'last seen %@ hours ago',
  },
  ForwardedMessage: 'Forwarded message',
  'Weekday.Yesterday': 'Yesterday',
  AttachVideo: 'Video',
  Lately: 'last seen recently',
  'Weekday.Tuesday': 'Tuesday',
  'Weekday.Wednesday': 'Wednesday',
  'Weekday.Friday': 'Friday',
  'Weekday.Saturday': 'Saturday',
  SearchFriends: 'Search contacts',
  Online: 'online',
  'LastSeen.JustNow': 'last seen just now',
  AccDescrGoBack: 'Go back',
  SETTINGS: 'Settings',
  LogOutTitle: 'Log Out',
  lng_settings_information: 'Edit profile',
  Filters: 'Folders',
  'Telegram.GeneralSettingsViewController': 'General Settings',
  Notifications: 'Notifications',
  DataSettings: 'Data and Storage',
  PrivacySettings: 'Privacy and Security',
  Language: 'Language',
  FirstName: 'First name (required)',
  LastName: 'Last name (optional)',
  UserBio: 'Bio',
  lng_settings_about_bio: 'Any details such as age, occupation or city.\nExample: 23 y.o. designer from San Francisco',
  Username: 'Username',
  UsernameHelp: 'You can choose a username on **Telegram**. If you do, people will be able to find you by this username and contact you without needing your phone number.\n\nYou can use **a–z**, **0–9** and underscores. Minimum length is **5** characters.',
  lng_username_link: 'This link opens a chat with you:',
  lng_user_typing: 'typing...',
  lng_send_action_record_video: 'recording video...',
  lng_send_action_upload_video: 'uploading video...',
  lng_send_action_record_audio: 'recording audio...',
  lng_send_action_upload_audio: 'uploading audio...',
  lng_send_action_upload_photo: 'uploading photo...',
  lng_send_action_upload_file: 'uploading file...',
  CropImage: 'Crop image',
  Chats: {
    oneValue: '%1$d chat',
    otherValue: '%1$d chats',
  },
  FilterContacts: 'Contacts',
  CreateNewFilterInfo: 'Create folders for different groups of chats and quickly switch between them.',
  CreateNewFilter: 'Create New Folder',
  FilterNew: 'New Folder',
  FilterIncludeInfo: 'Choose chats and types of chats that will appear in this folder.',
  FilterNameHint: 'Folder name',
  FilterInclude: 'Included Chats',
  FilterAddChats: 'Add Chats',
  FilterExclude: 'Excluded Chats',
  AutoDeleteConfirm: 'Confirm',
  FilterChatTypes: 'Chat types',
  FilterNonContacts: 'Non Contacts',
  FilterGroups: 'Groups',
  FilterChannels: 'Channels',
  FilterBots: 'Bots',
  FilterChats: 'Chats',
  AccDescrChannel: 'Channel',
  AccDescrGroup: 'Group',
  Bot: 'bot',
  ServiceNotifications: 'Service notifications',
  'LastSeen.TodayAt': 'last seen today at %@',
  ALongTimeAgo: 'last seen a long time ago',
  formatterYearMax: 'dd.MM.yyyy',
  'LastSeen.AtDate': 'last seen %@',
  'LastSeen.YesterdayAt': 'last seen yesterday at %@',
  FilterMuted: 'Muted',
  FilterArchived: 'Archived',
  FilterRead: 'Read',
  FilterEdit: 'Edit folder',
  Members: {
    oneValue: '%1$d member',
    otherValue: '%1$d members',
  },
  General: 'General',
  lng_settings_send_enter: 'Send with Enter',
  lng_settings_send_cmdenter: 'Send with Cmd+Enter',
  TextSize: 'Message Text Size',
  ChatBackground: 'Chat Background',
  'VoiceOver.Keyboard': 'Keyboard',
  AutoDownloadMedia: 'Auto-Download Media',
  AutodownloadPrivateChats: 'Private Chats',
  AutodownloadGroupChats: 'Group Chats',
  AutoplayMedia: 'Auto-play media',
  GifsTab2: 'GIFs',
  'DataAndStorage.Autoplay.Videos': 'Videos',
  AccDescrStickers: 'Stickers',
  SuggestStickers: 'Suggest stickers by emoji',
  LoopAnimatedStickers: 'Loop Animated Stickers',
  'StickerPack.StickerCount': {
    oneValue: '1 sticker',
    otherValue: '%@ stickers',
  },
  UploadImage: 'Upload image',
  SetColor: 'Set a color',
  ThemeResetToDefaults: 'Reset to default',
  BackgroundBlurred: 'Blurred',
  NotificationsForPrivateChats: 'Notifications for private chats',
  'UserInfo.NotificationsEnabled': 'Enabled',
  MessagePreview: 'Message Preview',
  NotificationsForGroups: 'Notifications for groups',
  NotificationsForChannels: 'Notifications for channels',
  PhoneOther: 'Other',
  ContactJoined: 'Contact joined Telegram',
  'UserInfo.NotificationsDisabled': 'Disabled',
  BlockedUsers: 'Blocked Users',
  TwoStepVerification: 'Two-Step Verification',
  PasswordOff: 'Off',
  SessionsTitle: 'Active Sessions',
  PrivacyTitle: 'Privacy',
  PrivacyPhoneTitle: 'Who can see my phone number?',
  LastSeenTitle: 'Who can see your Last Seen time?',
  PrivacyProfilePhotoTitle: 'Who can see my profile photos & videos?',
  PrivacyForwardsTitle: 'Who can add a link to my account when forwarding my messages?',
  WhoCanAddMe: 'Who can add me to group chats?',
  lng_settings_sensitive_title: 'Sensitive content',
  lng_settings_sensitive_disable_filtering: 'Disable filtering',
  lng_settings_sensitive_about: 'Display sensitive media in public channels on all your Telegram devices.',
  P2PContacts: 'My Contacts',
  P2PEverybody: 'Everybody',
  P2PNobody: 'Nobody',
  Users: {
    oneValue: '%1$d user',
    otherValue: '%1$d users',
  },
  PasswordOn: 'On',
  BlockedUsersInfo: 'Blocked users will not be able to contact you and will not see your Last Seen time.',
  EnabledPasswordText: 'You have enabled Two-Step verification.\nYou\'ll need the password you set up here to log in to your Telegram account.',
  ChangePassword: 'Change Password',
  TurnPasswordOff: 'Turn Password Off',
  SetRecoveryEmail: 'Set Recovery Email',
  PleaseEnterCurrentPassword: 'Enter your password',
  Next: 'Next',
  'AuthSessions.CurrentSession': 'CURRENT SESSION',
  TerminateAllSessions: 'Terminate All Other Sessions',
  PrivacyPhone: 'Phone Number',
  PrivacyExceptions: 'Exceptions',
  AlwaysShareWith: 'Always Share With',
  EditAdminAddUsers: 'Add Users',
  NeverShareWith: 'Never Share With',
  AlwaysShareWithPlaceholder: 'Always share with users...',
  AlwaysShareWithTitle: 'Always Share',
  NeverShareWithPlaceholder: 'Never share with users...',
  NeverShareWithTitle: 'Never Share',
  'Privacy.ProfilePhoto': 'Profile Photo',
  FilterNoChatsToDisplay: 'Folder is empty',
  InboxIsEmpty: 'Inbox is empty',
  AttachSticker: 'Sticker',
  'ChatList.Search.ShowMore': 'Show more',
  'DialogList.SearchSectionDialogs': 'Chats and Contacts',
  SearchMessages: 'Messages',
  'Weekday.ShortSunday': 'Sun',
  'DialogList.SearchSectionGlobal': 'Global Search',
  Subscribers: {
    oneValue: '%1$d subscriber',
    otherValue: '%1$d subscribers',
  },
  ChannelLeaveAlertWithName: 'Are you sure you want to leave **%1$s**?',
  'ChatList.Search.ShowLess': 'Show less',
  ChannelDelete: 'Delete Channel',
  'ChatList.DeleteAndLeaveGroupConfirmation': 'Are you sure you want to leave and delete %@?',
  'Chat.Input.Delete': 'Delete and Leave',
  formatDateScheduleYear: 'MMM d yyyy',
  October: 'October',
  'Month.GenOctober': 'October',
  'Month.ShortOctober': 'Oct',
  August: 'August',
  'Month.GenAugust': 'August',
  'Month.ShortAugust': 'Aug',
  July: 'July',
  'Month.GenJuly': 'July',
  'Month.ShortJuly': 'Jul',
  'ChatList.Search.NoResults': 'No Results',
  'ChatList.Search.NoResultsDescription': 'There were no results.\nTry a new search.',
  lng_in_dlg_album: 'Album',
  ReportSelectMessages: 'Select messages',
  'VoiceOver.Chat.MessagesSelected': {
    oneValue: '%@ message selected',
    otherValue: '%@ messages selected',
  },
  'Conversation.DeleteManyMessages': 'Delete Messages',
  AreYouSureDeleteFewMessages: 'Are you sure you want to delete these messages?',
  Reply: 'Reply',
  Copy: 'Copy',
  DialogPin: 'Pin',
  Forward: 'Forward',
  NotifyMe: 'Notify me...',
  'Common.Select': 'Select',
  DeleteSingleMessagesTitle: 'Delete message',
  AreYouSureDeleteSingleMessage: 'Are you sure you want to delete this message?',
  PinMessageAlertTitle: 'Pin message',
  PinMessageForMe: 'Pin for me only',
  PinMessageAlertChat: 'Do you want to pin this message at the top of the chat?',
  Close: 'Close',
  ForwardTo: 'Forward to...',
  SavedMessagesInfo: 'Forward here to save.',
  SendMessage: 'Send Message',
  Poll: 'Poll',
  GroupMembers: 'Members',
  Info: 'Info',
  EditAdminGroupDeleteMessages: 'Delete Messages',
  Edit: 'Edit',
  'Common.Back': 'Back',
  SharedMedia: 'Shared Media',
  lng_dlg_search_for_messages: 'Search for messages',
  JumpToDate: 'Jump to Date',
  lng_search_no_results: 'No messages found',
  'StickerPack.RemoveStickerCount': {
    oneValue: 'Remove 1 Sticker',
    otherValue: 'Remove %@ Stickers',
  },
  AccActionDownload: 'Download',
  AccActionPlay: 'Play',
  ZoomOut: 'Zoom out',
  AccDescrPrevious: 'Previous',
  'TextFormat.AddLinkTitle': 'Add Link',
  Save: 'Save',
  Updating: 'Updating...',
  lng_context_forward_msg: 'Forward Message',
  Comments: {
    oneValue: '%1$d Comment',
    otherValue: '%1$d Comments',
  },
  ChannelSubscribers: 'Subscribers',
  LeaveAComment: 'Leave a comment',
  ChatsMute: 'Mute',
  'GroupInfo.DeleteAndExit': 'Delete and Exit',
  ChatsUnmute: 'Unmute',
  'Conversation.DeleteMessagesForEveryone': 'Delete for everyone',
  lng_mediaview_profile_photo: 'Profile Photo',
  lng_media_file_empty_search: 'No files found',
  lng_media_song_empty_search: 'No music files found',
  EnterChannelName: 'Channel name',
  DescriptionPlaceholder: 'Description',
  ChannelType: 'Channel Type',
  TypePublic: 'Public',
  Discussion: 'Discussion',
  DiscussionUnlink: 'Unlink',
  ChannelAdministrators: 'Administrators',
  ChannelSignMessages: 'Sign Messages',
  ChannelDeleteAlert: 'Wait! Deleting this channel will remove all subscribers and all messages will be lost. Delete the channel anyway?',
  ChannelTypeHeader: 'Channel type',
  ChannelPrivate: 'Private Channel',
  ChannelPrivateInfo: 'Private channels can only be joined via an invite link.',
  ChannelPublic: 'Public Channel',
  ChannelPublicInfo: 'Public channels can be found in search, anyone can join them.',
  'Channel.Username.CreatePublicLinkHelp': 'People can share this link with others and find your channel using Telegram search.',
  SetUrlPlaceholder: 'Link',
  ChannelPrivateLinkHelp: 'People can join your channel by following this link. You can revoke the link any time.',
  RevokeLink: 'Revoke Link',
  RevokeAlert: 'Are you sure you want to revoke this link? Once the link is revoked, no one will be able to join using it.',
  RevokeButton: 'Revoke',
  DiscussionUnlinkGroup: 'Unlink Group',
  DiscussionUnlinkChannelAlert: 'Are you sure you want to unlink **%1$s** from this channel?',
  EventLog: 'Recent Actions',
  EventLogInfoDetailChannel: 'This is a list of all service actions taken by the channel\'s admins in the last 48 hours.',
  ChannelCreator: 'Owner',
  EditAdminRights: 'Edit admin rights',
  EditAdminWhatCanDo: 'What can this admin do?',
  EditAdminChangeChannelInfo: 'Change Channel Info',
  EditAdminPostMessages: 'Post Messages',
  EditAdminEditMessages: 'Edit Messages of Others',
  EditAdminDeleteMessages: 'Delete Messages of Others',
  EditAdminAddAdmins: 'Add New Admins',
  'Group.Info.AdminLog': 'Recent Actions',
  EventLogAllEvents: 'All actions',
  EventLogFilterNewAdmins: 'Admin rights',
  EventLogFilterNewMembers: 'New members',
  EventLogFilterChannelInfo: 'Channel info',
  EventLogFilterDeletedMessages: 'Deleted messages',
  EventLogFilterEditedMessages: 'Edited messages',
  EventLogFilterLeavingMembers: 'Leaving members',
  'Channel.Management.Title': 'Admins',
  EventLogAllAdmins: 'All admins',
  WithinAWeek: 'last seen within a week',
  WithinAMonth: 'last seen within a month',
  EventLogFilterPinnedMessages: 'Pinned messages',
  UnpinMessageAlertTitle: 'Unpin message',
  PinnedMessage: 'Pinned Message',
  OnlineCount: {
    oneValue: '%1$d online',
    otherValue: '%1$d online',
  },
  GroupName: 'Group name',
  GroupType: 'Group Type',
  LinkedChannel: 'Linked Channel',
  ChannelPermissions: 'Permissions',
  ChatHistory: 'Chat history for new members',
  DeleteMega: 'Delete Group',
  AreYouSureDeleteThisChatWithGroup: 'Are you sure you want to delete the chat **%1$s**?',
  DeleteGroupForAll: 'Delete the group for all members',
  GroupTypeHeader: 'Group type',
  MegaPrivate: 'Private Group',
  MegaPrivateInfo: 'Private groups can only be joined if you were invited or have an invite link.',
  MegaPublic: 'Public Group',
  MegaPublicInfo: 'Public groups can be found in search, chat history is available to everyone and anyone can join.',
  'Group.Username.CreatePublicLinkHelp': 'People can share this link with others and find your group using Telegram search.',
  MegaPrivateLinkHelp: 'People can join your group by following this link. You can revoke the link any time.',
  DiscussionUnlinkChannel: 'Unlink Channel',
  DiscussionUnlinkGroupAlert: 'Are you sure you want to unlink **%1$s** from this group?',
  ChannelPermissionsHeader: 'What can members of this group do?',
  UserRestrictionsSend: 'Send Messages',
  UserRestrictionsSendMedia: 'Send Media',
  UserRestrictionsSendStickers: 'Send Stickers and GIFs',
  UserRestrictionsSendPolls: 'Send Polls',
  UserRestrictionsEmbedLinks: 'Embed Links',
  UserRestrictionsInviteUsers: 'Add Users',
  UserRestrictionsPinMessages: 'Pin Messages',
  UserRestrictionsChangeInfo: 'Change Chat Info',
  ChannelBlockedUsers: 'Removed users',
  ChannelAddException: 'Add Exception',
  NoBlockedGroup2: 'Users removed from the group by the admins can\'t rejoin via invite links.',
  EventLogInfoDetail: 'This is a list of notable actions by members and admins in the last 48 hours.',
  EditAdminChangeGroupInfo: 'Change Group Info',
  EditAdminBanUsers: 'Ban Users',
  EditAdminPinMessages: 'Pin Messages',
  EditAdminSendAnonymously: 'Remain Anonymous',
  EditAdminRank: 'Custom title',
  RecentStickers: 'Recently Used',
  Emoji1: 'Smileys and people',
  Emoji2: 'Animals and nature',
  Emoji3: 'Food and drink',
  Emoji4: 'Activity',
  Emoji5: 'Travel and places',
  Emoji6: 'Objects',
  Emoji7: 'Symbols',
  Emoji8: 'Flags',
  FavoriteStickers: 'Favorites',
  SearchStickersHint: 'Search sticker sets',
  Stickers: {
    oneValue: '%1$d sticker',
    otherValue: '%1$d stickers',
  },
  'Stickers.Install': 'ADD',
  'StickerPack.AddStickerCount': {
    oneValue: 'Add 1 Sticker',
    otherValue: 'Add %@ Stickers',
  },
  SearchGifsTitle: 'Search GIFs',
  'PreviewSender.SendFile': {
    oneValue: 'Send File',
    otherValue: 'Send %d Files',
  },
  Phone: 'Phone',
  Reminders: 'Reminders',
  MessageScheduledOn: 'Scheduled for %1$s',
  NewPoll: 'New Poll',
  Create: 'Create',
  AskAQuestion: 'Ask a Question',
  PollOptions: 'Poll options',
  'CreatePoll.AddOption': 'Add an Option',
  PollAnonymous: 'Anonymous Voting',
  PollMultiple: 'Multiple Answers',
  PollQuiz: 'Quiz Mode',
  PaymentReceipt: 'Receipt',
  NoMessages: 'No messages here yet...',
  PinnedMessagesCount: {
    oneValue: 'Pinned Message',
    otherValue: '%1$d Pinned Messages',
  },
  'Chat.Pinned.UnpinAll': {
    oneValue: 'Unpin %d Message',
    otherValue: 'Unpin All %d Messages',
  },
  CommentsCount: {
    oneValue: '%1$d comment',
    otherValue: '%1$d comments',
  },
  'Conversation.DefaultRestrictedMedia': 'Posting media content isn\'t allowed in this group.',
  DiscussionStarted: 'Discussion started',
  DiscussChannel: 'channel',
  'SharedMedia.EmptyTitle': 'No media files yet',
  QuizPoll: 'Quiz',
  PollViewResults: 'VIEW RESULTS',
  'Chat.Quiz.TotalVotesEmpty': 'No answers yet',
  lng_update_telegram: 'Update Telegram',
  AutoDownloadPhotosTitle: 'Auto-download photos',
  AutoDownloadVideosTitle: 'Auto-download videos and GIFs',
  AutoDownloadFilesTitle: 'Auto-download files and music',
  'ChannelVisibility.Forwarding.ChannelTitle': 'Forwarding From This Channel',
  'ChannelVisibility.Forwarding.GroupTitle': 'Forwarding From This Group',
  'ChannelVisibility.Forwarding.ChannelInfo': 'Subscribers can forward messages from this channel and save media files.',
  'ChannelVisibility.Forwarding.GroupInfo': 'Members can forward messages from this group and save media files.',
  'ChannelVisibility.Forwarding.Enabled': 'Allow Forwarding',
  'ChannelVisibility.Forwarding.Disabled': 'Restrict Forwarding',
  'Settings.TipsUsername': 'TelegramTips',
  FoldersAllChatsDesc: 'Inbox chats',
  'Video.Unsupported.Desktop': 'Unfortunately, this video can\'t be played on Ulu. Try opening it with our **desktop app** instead.',
  'Video.Unsupported.Mobile': 'Unfortunately, this video can\'t be played on Ulu. Try opening it with our **mobile app** instead.',
  SlowModeWait: 'Slow Mode — %d',
  OpenMapWith: 'Open map with...',
  YouWillBeNotified: 'You will be notified!',
} as ApiLangPack;
