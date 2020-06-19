import React, {
  useState,
  createContext,
  ReactNode,
  useContext,
  FC,
  CSSProperties,
  useCallback,
} from "react";
import { VideoIntroProps, VideoIntroTab } from "./VideoIntro";
import { DriverProgram } from "./DriverProgram";

export interface VideoIntroState {
  playbackRate: number;
  showControls?: boolean;
  currentTab: VideoIntroTab;
  tabIndex: number;
  totalTabs: number;
  hasNext: boolean;
  handleNext(): void;
  hasPrevious: boolean;
  handlePrevious(): void;
  handleSkip(): void;
  currentUrl?: string;
  width?: number | string;
  height?: number | string;
  style?: CSSProperties;
  videoHeight?: number | string;
  videoWidth?: number | string;
  video?: HTMLVideoElement;
  handleVideo(video?: HTMLVideoElement): void;
  handleVideoTimeUpdate(): void;
  program?: DriverProgram;
  loopCompleted: boolean;
  time: number;
}

const Context = createContext<VideoIntroState | undefined>(undefined);

export const useVideoIntroState = () => {
  return useContext(Context);
};

type VideoIntroProvidierProps = VideoIntroProps & { children: ReactNode };

export const VideoIntroProvidier: FC<VideoIntroProvidierProps> = (
  props: VideoIntroProvidierProps
) => {
  const {
    playbackRate,
    tabs,
    onComplete,
    onSkipped,
    children,
    ...rest
  } = props;

  const [video, setVideo] = useState<HTMLVideoElement>();
  const [time, setTime] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);
  const [loopCompleted, setLoopCompleted] = useState(false);
  const currentTab = tabs[tabIndex];
  const currentUrl = currentTab.url;
  const hasNext = tabIndex + 1 < tabs.length;
  const hasPrevious = tabIndex > 0;
  const handleVideoTimeUpdate = useCallback(() => {
    if (video) {
      const played = video.played;
      const hasPlayedOnce = played.end(played.length - 1) == video.duration;
      if (!loopCompleted && hasPlayedOnce) {
        setLoopCompleted(true);
      }
      setTime(video.currentTime);
    }
  }, [video, loopCompleted]);

  const changeTab = (delta: number) => {
    setTime(0);
    setTabIndex((current) => current + delta);
  };

  const handleNext = () => {
    if (hasNext) {
      changeTab(1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (hasPrevious) {
      changeTab(-1);
    }
  };

  const handleSkip = () => {
    onSkipped ? onSkipped() : onComplete();
  };

  const value = {
    playbackRate: playbackRate as number,
    tabIndex: tabIndex + 1,
    totalTabs: tabs.length,
    hasNext,
    handleNext,
    hasPrevious,
    handlePrevious,
    handleSkip,
    currentTab,
    currentUrl,
    video,
    handleVideo: setVideo,
    handleVideoTimeUpdate,
    program: currentTab.program,
    loopCompleted,
    time,
    ...rest,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

VideoIntroProvidier.defaultProps = {
  playbackRate: 1,
  height: "auto",
  width: 500,
  videoHeight: "70%",
  videoWidth: "100%",
};
