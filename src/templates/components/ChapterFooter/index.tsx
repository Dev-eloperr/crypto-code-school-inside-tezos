import React, { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import ContentMenuSlider from '../MenuSlider/index';
import {
  Footer,
  MenuButton,
  ChapterTitle,
  PrevLink,
  ContentIndex,
  NextLink,
} from './styled';
import { RightArrow, LeftArrow } from '../../../components/IconSet';
import ReactTooltip from 'react-tooltip';
interface Props {
  chapter: string;
  title: string;
  chapterIndex: {
    current: number;
    total: number;
    nextSlug: string;
    prevSlug: string;
  };
}

function ChapterFooter({
  chapter,
  title,
  chapterIndex: { current, total, nextSlug, prevSlug },
}: Props) {
  const [openDrawer, toggleDrawer] = useState(false);
  const toggle = () => {
    toggleDrawer(openDrawer => !openDrawer);
  };
  return (
    <Footer>
      <div>
        <MenuButton>
          <IoIosMenu onClick={toggle} size={36} color="#fff" />
          <ContentMenuSlider openDrawer={openDrawer} toggle={toggle} />
        </MenuButton>
        <ChapterTitle>
          {chapter}
          {': '}
          {title}
        </ChapterTitle>
      </div>
      <div>
        {prevSlug ? (
          <PrevLink to={`/lesson/${prevSlug}`}>
            <LeftArrow small />
            <span>Prev</span>
          </PrevLink>
        ) : null}

        <ContentIndex>
          {current}/{total}
        </ContentIndex>
        {nextSlug ? (
          <NextLink to={`/lesson/${nextSlug}`}>
            <span>Next</span> <RightArrow small />
          </NextLink>
        ) : (
          <NextLink to="/tezos/game">
            <span>Finish</span> <RightArrow small />
          </NextLink>
        )}
      </div>
    </Footer>
  );
}

export default ChapterFooter;
