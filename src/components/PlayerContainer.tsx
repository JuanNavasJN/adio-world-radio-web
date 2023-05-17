import React, { FC, useContext, useState, useEffect, useRef } from 'react';
import styles from '@/styles/PlayerContainer.module.css';
import { StationsContext } from '@/contexts/StationsContext';
import Slider from 'rc-slider';
import PlayPauseButton from './PlayPauseButton';

import 'rc-slider/assets/index.css';

const PlayerContainer: FC = () => {
  const { currentStation } = useContext(StationsContext);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [sliderValue, setSliderValue] = useState(50);

  useEffect(() => {
    if (currentStation) {
      setIsPlaying(true);

      if (audioRef.current) {
        let defaultVolume = 0.5;

        const savedVolume = localStorage.getItem('volume');

        if (savedVolume) defaultVolume = Number(savedVolume);

        audioRef.current.volume = defaultVolume;

        setSliderValue(defaultVolume * 100);
        audioRef.current.play().catch(_ => {
          setIsPlaying(false);
        });
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
    setSliderValue(value as number);

    if (audioRef.current) {
      const newVolume = (value as number) / 100;
      audioRef.current.volume = newVolume;
      localStorage.setItem('volume', newVolume.toString());
    }
  };

  if (!currentStation) {
    return null;
  }

  return (
    <section className={styles.playerContainer}>
      <div className={styles.column}>
        <PlayPauseButton onClick={handlePlayStop} isPlaying={isPlaying} />

        <p>{currentStation.name}</p>
      </div>
      <div className={styles.column}>
        <Slider
          className={styles.slider}
          onChange={handleSliderChange}
          value={sliderValue}
        />

        <audio ref={audioRef} src={currentStation.url} />
      </div>
    </section>
  );
};

export default PlayerContainer;
