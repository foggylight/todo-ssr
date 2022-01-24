import React from 'react';

import { PageWrapper } from '../../atoms/PageWrapper/PageWrapper';
import { Header } from '../../organisms/Header/Header';
import { TextBlock } from '../../atoms/TextBlock/TextBlock';
import { links } from '../../../navigationLinks';

import styles from './Description.module.scss';

interface DescriptionProps {
  text: string;
}

export const Description = ({ text }: DescriptionProps) => {
  return (
    <PageWrapper>
      <>
        <Header headingText="Todo App" navLinks={links} />
        <TextBlock className={styles['text-block']} text={text} />
      </>
    </PageWrapper>
  );
};
