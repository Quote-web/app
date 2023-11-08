/* eslint-disable react/jsx-props-no-spreading */
import type { HTMLProps, ReactNode } from 'react';
import React from 'react';
import type { TreeInformation, TreeItemIndex } from 'react-complex-tree';
import type { FC } from '../../../../../lib/teact/teact';

import buildClassName from '../../../../../util/buildClassName';

import styles from './TreeItemsContainer.module.scss';

type OwnProps = {
  children: ReactNode;
  containerProps: HTMLProps<any>;
  info: TreeInformation;
  depth: number;
  parentId: TreeItemIndex;
};

const TreeItemsContainer: FC<OwnProps> = ({
  children, containerProps, depth,
}) => {
  const className = buildClassName(styles.container, !!depth && styles.padding);

  return (
    <div className={className} {...containerProps}>
      {children}
    </div>
  );
};

export default TreeItemsContainer;
