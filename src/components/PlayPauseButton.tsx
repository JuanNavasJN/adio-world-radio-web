import React, { FC } from 'react';
import Image from 'next/image';
import pauseImg from '@/assets/pause.png';
import playImg from '@/assets/play.png';
import styles from '@/styles/PlayPauseButton.module.css';

interface PlayPauseButton {
  onClick: () => void;
  isPlaying: boolean;
}

const buttonImgSize = 50;

const PlayPauseButton: FC<PlayPauseButton> = ({
  onClick,
  isPlaying = false
}) => {
  return (
    <button className={styles.playPauseButton} onClick={onClick}>
      <Image
        alt="play-pause"
        src={isPlaying ? pauseImg : playImg}
        width={buttonImgSize}
        height={buttonImgSize}
      />
    </button>
  );
};

export default PlayPauseButton;
