import React, { FC, useContext, useState, useEffect, useRef } from 'react';
import styles from '@/styles/PlayerContainer.module.css';
import Image from 'next/image';
import { StationsContext } from '@/contexts/StationsContext';
import Slider from 'rc-slider';
import pauseImg from '@/assets/pause.png';
import playImg from '@/assets/play.png';

import 'rc-slider/assets/index.css';

const buttonImgSize = 50;

const PlayerContainer: FC = () => {
  const { currentStation } = useContext(StationsContext);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (currentStation) {
      setIsPlaying(true);

      if (audioRef.current) {
        audioRef.current.volume = 0.5;
        audioRef.current.play();
      }
    }
  }, [currentStation]);

  const handlePause = () => {
    if (audioRef.current) audioRef.current.pause();
  };
  const handlePlay = () => {
    if (audioRef.current) audioRef.current.play();
  };

  const handlePlayStop = () => {
    if (isPlaying && handlePause) {
      handlePause();
    } else if (!isPlaying && handlePlay) {
      handlePlay();
    }

    setIsPlaying(!isPlaying);
  };

  const handleSliderChange = (value: number | number[]) => {
    if (audioRef.current) {
      audioRef.current.volume = (value as number) / 100;
    }
  };

  if (!currentStation) {
    return null;
  }

  return (
    <section className={styles.playerContainer}>
      <div className={styles.column}>
        <button className={styles.playPauseButton} onClick={handlePlayStop}>
          <Image
            alt="play-pause"
            src={isPlaying ? pauseImg : playImg}
            width={buttonImgSize}
            height={buttonImgSize}
          />
        </button>

        <p>{currentStation.name}</p>
      </div>
      <div className={styles.column}>
        <Slider
          className={styles.slider}
          onChange={handleSliderChange}
          defaultValue={50}
        />

        <audio ref={audioRef} src={currentStation.url} />
      </div>
    </section>
  );
};

export default PlayerContainer;
