import { useEffect, useState } from 'react';

import type { Workspace } from '../types';

import { DEFAULT_WORKSPACE } from '../config';

export function useStorage() {
  const [isAutoDoneEnabled, setIsAutoDoneEnabled] = useLocalStorage<boolean>('ulu_is_autodone_enabled', false);
  const [
    isAutoArchiverEnabled,
    setIsAutoArchiverEnabled,
  ] = useLocalStorage<boolean>('ulu_is_autoarchiver_enabled', false);
  const [
    isArchiveWhenDoneEnabled,
    setIsArchiveWhenDoneEnabled,
  ] = useLocalStorage<boolean>('ulu_is_archive_when_done_enabled', false);
  const [isFoldersTreeEnabled, setIsFoldersTreeEnabled] = useLocalStorage<boolean>(
    'ulu_is_folders_tree_enabled',
    false,
  );

  const [doneChatIds, setDoneChatIds] = useLocalStorage<string[]>('ulu_done_chat_ids', []);

  const [savedWorkspaces, setSavedWorkspaces] = useLocalStorage<Workspace[]>('workspaces', []);
  const [
    currentWorkspaceId,
    setCurrentWorkspaceId,
  ] = useLocalStorage<string>('current_workspace_id', DEFAULT_WORKSPACE.id);

  return {
    isAutoDoneEnabled,
    setIsAutoDoneEnabled,
    isAutoArchiverEnabled,
    setIsAutoArchiverEnabled,
    isArchiveWhenDoneEnabled,
    setIsArchiveWhenDoneEnabled,
    isFoldersTreeEnabled,
    setIsFoldersTreeEnabled,
    doneChatIds,
    setDoneChatIds,
    savedWorkspaces,
    setSavedWorkspaces,
    currentWorkspaceId,
    setCurrentWorkspaceId,
  };
}

function useLocalStorage<T>(key: string, initValue: T): [value: T, setValue: (val: T) => void] {
  const eventName = `update_storage_${key}`;

  const [state, setState] = useState<T>((() => {
    const value = localStorage.getItem(key);
    // eslint-disable-next-line no-null/no-null
    if (value !== null) {
      return JSON.parse(value);
    }

    localStorage.setItem(key, JSON.stringify(initValue));
    window.dispatchEvent(new Event(eventName));
    return initValue;
  })());

  useEffect(() => {
    if (JSON.stringify(state) !== localStorage.getItem(key)) { // can be optimized
      localStorage.setItem(key, JSON.stringify(state));
      window.dispatchEvent(new Event(eventName));
    }
  }, [key, state, eventName]);

  useEffect(() => {
    const listenStorageChange = () => {
      setState(() => {
        const value = localStorage.getItem(key);
        // eslint-disable-next-line no-null/no-null
        if (value !== null) {
          return JSON.parse(value);
        }

        localStorage.setItem(key, JSON.stringify(initValue));
        window.dispatchEvent(new Event(eventName));
        return initValue;
      });
    };
    window.addEventListener(eventName, listenStorageChange);
    return () => window.removeEventListener(eventName, listenStorageChange);
  // eslint-disable-next-line react-hooks-static-deps/exhaustive-deps
  }, []);

  const setStateFiltered = (val: T) => {
    setState(val === undefined ? initValue : val);
  };

  return [state, setStateFiltered];
}
