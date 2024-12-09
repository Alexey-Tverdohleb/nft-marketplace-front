/* eslint-disable jsx-a11y/media-has-caption */
import React, { Dispatch, SetStateAction } from 'react';
import Button from '../Button';
import Icon from '../Icon/Icon';
import Modal from '../Modal';

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function WatchVideoContent({
  setIsOpen,
}: Props) {
  return (
    <div className="relative w-[600px] h-[500px] w-full dark:text-white rounded-full">
      <button
        type="button"
        className="h-auto absolute top-[10px] right-[10px] z-10"
        onClick={() => { setIsOpen(false); }}
      >
        <Icon name="x" className="stroke-current text-white" />
      </button>
      <video width="600" height="500" poster="/images/video-thumbnail.png" controls />

    </div>
  );
}

function Video() {
  return (
    <Modal>
      {(setIsOpen) => ({
        content: <WatchVideoContent setIsOpen={setIsOpen} />,
        button: (
          <Button onClick={() => setIsOpen(true)}>
            <Icon name="play" className="stroke-current" />
            Watch Video
          </Button>
        ),
      })}
    </Modal>
  );
}

export default Video;
