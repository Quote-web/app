import type { RefObject } from 'react';
import type { FC } from '../../../lib/teact/teact';
import React, { memo, useCallback } from '../../../lib/teact/teact';
import { getActions, withGlobal } from '../../../global';

import type { ApiChat } from '../../../api/types';
import type { ISettings } from '../../../types';
import { LeftColumnContent } from '../../../types';

import { ALL_FOLDER_ID, ARCHIVED_FOLDER_ID, JUNE_TRACK_EVENTS } from '../../../config';
import { selectIsChatWithSelf, selectTabState } from '../../../global/selectors';
import { uluGetTranslatedString } from '../../../util/fallbackLangPackInitial';

import useCommands from '../../../hooks/useCommands';
import { useFolderManagerForOrderedIds, useFolderManagerForUnreadCounters } from '../../../hooks/useFolderManager';
import { useJune } from '../../../hooks/useJune';
import { useStorage } from '../../../hooks/useStorage';

import UluChatFolder from './UluChatFolder';
import UluChatFoldersWrapper from './UluChatFoldersWrapper';

import styles from './UluSystemChatFolders.module.scss';

type OwnProps = {
  ref: RefObject<HTMLDivElement>;
  content: LeftColumnContent;
  chatId: string | undefined;
  userId: string | undefined;
  onLeftColumnContentChange: (content: LeftColumnContent) => void;
};

type StateProps = {
  isSavedMessages: boolean;
  isInbox: boolean;
  chatsById: Record<string, ApiChat>;
} & Pick<ISettings, 'language'>;

const UluSystemFolders: FC<OwnProps & StateProps> = ({
  userId, language, isSavedMessages, onLeftColumnContentChange, ref,
  chatsById,
}) => {
  const titleInbox = uluGetTranslatedString('Sidebar.SystemFolders.Inbox', language);
  const titleSavedMessages = uluGetTranslatedString('Sidebar.SystemFolders.SavedMessages', language);
  const titleArchivedChats = uluGetTranslatedString('Sidebar.SystemFolders.ArchivedChats', language);
  const { track } = useJune();
  const { focusLastMessage, openChat } = getActions();

  const handleOpenSavedMessages = useCallback(() => {
    openChat({ id: userId, shouldReplaceHistory: true });
    focusLastMessage();
  }, [userId]);

  const handleOpenArchivedChats = useCallback(() => {
    onLeftColumnContentChange(LeftColumnContent.Archived);
  }, [onLeftColumnContentChange]);

  const handleOpenInbox = useCallback(() => {
    onLeftColumnContentChange(LeftColumnContent.UluInbox);
    track(JUNE_TRACK_EVENTS.OPEN_INBOX);
  }, [onLeftColumnContentChange, track]);

  const { useCommand } = useCommands();
  useCommand('OPEN_INBOX', handleOpenInbox);
  useCommand('OPEN_SAVED', handleOpenSavedMessages);

  const { doneChatIds } = useStorage();

  const unreadCounters = useFolderManagerForUnreadCounters();
  const archiveUnreadCount = unreadCounters[ARCHIVED_FOLDER_ID]?.activeChatsCount;
  const savedMessagesUnreadCount = userId ? unreadCounters[userId]?.chatsCount : 0;

  const orderedIdsAll = useFolderManagerForOrderedIds(ALL_FOLDER_ID);
  const inboxChatIds = orderedIdsAll?.filter((orderedId) => !doneChatIds.includes(orderedId)) || [];
  const inboxUnreadCount = inboxChatIds.reduce((acc, chatId) => {
    const chat = chatsById[chatId];
    return chat && !chat.isMuted && Boolean(chat.unreadCount || chat.unreadMentionsCount || chat.hasUnreadMark)
      ? acc + 1
      : acc;
  }, 0);

  window.electron?.updateTrayTitle(inboxUnreadCount);

  return (
    <UluChatFoldersWrapper ref={ref} className={styles.wrapper}>
      <UluChatFolder
        shouldStressUnreadMessages={false}
        type="inbox"
        title={titleInbox}
        messagesUnreadCount={inboxUnreadCount}
        onClick={handleOpenInbox}
      />
      <UluChatFolder
        active={isSavedMessages}
        shouldStressUnreadMessages={false}
        type="saved-messages"
        title={titleSavedMessages}
        messagesUnreadCount={savedMessagesUnreadCount}
        onClick={handleOpenSavedMessages}
      />
      <UluChatFolder
        shouldStressUnreadMessages={false}
        type="archived-chats"
        title={titleArchivedChats}
        messagesUnreadCount={archiveUnreadCount}
        onClick={handleOpenArchivedChats}
      />
    </UluChatFoldersWrapper>
  );
};

export default memo(withGlobal<OwnProps>(
  (global, { chatId }): StateProps => {
    const { activeChatFolder } = selectTabState(global);
    const isChatWithSelf = chatId ? selectIsChatWithSelf(global, chatId) : false;

    return ({
      language: global.settings.byKey.language,
      isSavedMessages: isChatWithSelf,
      isInbox: activeChatFolder === ALL_FOLDER_ID && chatId === undefined,
      chatsById: global.chats.byId,
    });
  },
)(UluSystemFolders));
