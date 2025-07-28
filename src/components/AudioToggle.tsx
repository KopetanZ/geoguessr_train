'use client';

import { useState, useEffect } from 'react';
import { setAudioEnabled } from '@/utils/audioUtils';

export default function AudioToggle() {
  const [audioOn, setAudioOn] = useState(true);

  useEffect(() => {
    // 初期状態をローカルストレージから読み込み
    const saved = localStorage.getItem('audio-enabled');
    const enabled = saved !== null ? JSON.parse(saved) : true;
    setAudioOn(enabled);
    setAudioEnabled(enabled);
  }, []);

  const toggleAudio = () => {
    const newState = !audioOn;
    setAudioOn(newState);
    setAudioEnabled(newState);
    localStorage.setItem('audio-enabled', JSON.stringify(newState));
  };

  return (
    <button
      onClick={toggleAudio}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label={audioOn ? '音声をオフにする' : '音声をオンにする'}
      title={audioOn ? '音声をオフにする' : '音声をオンにする'}
    >
      {audioOn ? '🔊' : '🔇'}
    </button>
  );
}