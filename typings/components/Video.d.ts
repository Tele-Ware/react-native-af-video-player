import React from 'react'

interface RNVideoProps {
  url?: string | number;
  placeholder?: string | number;
  error?: boolean | object;
  loop?: boolean;
  autoPlay?: boolean;
  inlineOnly?: boolean;
  fullScreenOnly?: boolean;
  playInBackground?: boolean;
  playWhenInactive?: boolean;
  rotateToFullScreen?: boolean;
  lockPortraitOnFsExit?: boolean;
  onEnd?: () => void;
  onLoad?: () => void;
  onPlay?: () => void;
  onError?: () => void;
  onProgress?: () => void;
  onMorePress?: () => void;
  onFullScreen?: () => void;
  onTimedMetadata?: () => void;
  rate?: number;
  volume?: number;
  lockRatio?: number;
  logo?: string;
  title?: string;
  theme?: object,
  resizeMode?: string;
  style?: object;
}

export default class Video extends React.Component<RNVideoProps> { }  