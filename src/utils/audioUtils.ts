// Web Audio API を使用したクイズ用効果音生成

class AudioManager {
  private audioContext: AudioContext | null = null;
  private isEnabled = true;

  private getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    
    if (!this.audioContext) {
      try {
        this.audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      } catch (error) {
        console.warn('Web Audio API not supported:', error);
        return null;
      }
    }
    
    return this.audioContext;
  }

  // ピンポーン音（正解音）を生成
  async playCorrectSound(): Promise<void> {
    if (!this.isEnabled) return;
    
    const context = this.getAudioContext();
    if (!context) return;

    try {
      // Web Audio APIが停止状態の場合は再開
      if (context.state === 'suspended') {
        await context.resume();
      }

      const now = context.currentTime;

      // ピンポーン音（C5 → E5 → G5）
      const frequencies = [523.25, 659.25, 783.99]; // C5, E5, G5
      const noteDuration = 0.2;

      frequencies.forEach((freq, index) => {
        const oscillator = context.createOscillator();
        const gainNode = context.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(context.destination);

        // 音色を豊かにするため、サイン波とのこぎり波をミックス
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(freq, now + index * noteDuration);

        // エンベロープ（音量の時間変化）
        const startTime = now + index * noteDuration;
        const endTime = startTime + noteDuration;
        
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.15, startTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.01, endTime);

        oscillator.start(startTime);
        oscillator.stop(endTime);
      });

    } catch (error) {
      console.warn('Error playing correct sound:', error);
    }
  }

  // ブー音（不正解音）を生成
  async playIncorrectSound(): Promise<void> {
    if (!this.isEnabled) return;
    
    const context = this.getAudioContext();
    if (!context) return;

    try {
      if (context.state === 'suspended') {
        await context.resume();
      }

      const now = context.currentTime;
      const duration = 0.8;

      // ブー音（低い音から更に低い音へ）
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(context.destination);

      // のこぎり波で重厚な音
      oscillator.type = 'sawtooth';
      
      // 周波数を下降させる（200Hz → 100Hz）
      oscillator.frequency.setValueAtTime(200, now);
      oscillator.frequency.exponentialRampToValueAtTime(100, now + duration);

      // エンベロープ
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.2, now + 0.1);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);

      oscillator.start(now);
      oscillator.stop(now + duration);

    } catch (error) {
      console.warn('Error playing incorrect sound:', error);
    }
  }

  // 音声の有効/無効を切り替え
  setEnabled(enabled: boolean): void {
    this.isEnabled = enabled;
  }

  // 音声が有効かどうか
  isAudioEnabled(): boolean {
    return this.isEnabled;
  }

  // AudioContextのクリーンアップ
  dispose(): void {
    if (this.audioContext && this.audioContext.state !== 'closed') {
      this.audioContext.close();
      this.audioContext = null;
    }
  }
}

// シングルトンインスタンス
let audioManager: AudioManager | null = null;

export function getAudioManager(): AudioManager {
  if (!audioManager) {
    audioManager = new AudioManager();
  }
  return audioManager;
}

// 便利な関数エクスポート
export const playCorrectSound = () => getAudioManager().playCorrectSound();
export const playIncorrectSound = () => getAudioManager().playIncorrectSound();
export const setAudioEnabled = (enabled: boolean) => getAudioManager().setEnabled(enabled);
export const isAudioEnabled = () => getAudioManager().isAudioEnabled();