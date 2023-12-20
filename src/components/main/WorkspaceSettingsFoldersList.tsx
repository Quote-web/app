import React from 'react';

import './FolderSelector.scss';

interface Folder {
  id: number;
  title: string;
}

interface FolderSelectorProps {
  folders: Folder[];
  onSelectedFoldersChange: (selectedIds: number[]) => void; // Добавьте эту строку
  selectedFolderIds: number[];
}

const FolderSelector: React.FC<FolderSelectorProps> = ({ folders, onSelectedFoldersChange, selectedFolderIds }) => {
  const toggleFolder = (id: number) => {
    const newSelected = new Set(selectedFolderIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }

    onSelectedFoldersChange(Array.from(newSelected));
    return newSelected;
  };

  return (
    <div className="folderSelector">
      {folders.map((folder) => (
        <div key={folder.id} className="folderItem" onClick={() => toggleFolder(folder.id)}>
          <div className="icon-wrapper">
            <i className="icon icon-folder folderIcon" />
          </div>
          <span className="folderTitle">{folder.title}</span>
          <div className={selectedFolderIds.includes(folder.id) ? 'selectedCheckmark' : 'unselectedCheckmark'}>
            <i className="icon icon-check" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FolderSelector;
