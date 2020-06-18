import { ReactNode, FC, CSSProperties } from "react";
import { VideoIntroProps, VideoIntroTab } from "./VideoIntro";
import { DriverProgram } from "./DriverProgram";
export interface VideoIntroState {
    playbackRate: number;
    currentTab: VideoIntroTab;
    tabIndex: number;
    totalTabs: number;
    hasNext: boolean;
    handleNext(): void;
    hasPrevious: boolean;
    handlePrevious(): void;
    handleSkip(): void;
    currentUrl: string;
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
export declare const useVideoIntroState: () => VideoIntroState;
declare type VideoIntroProvidierProps = VideoIntroProps & {
    children: ReactNode;
};
export declare const VideoIntroProvidier: FC<VideoIntroProvidierProps>;
export {};
