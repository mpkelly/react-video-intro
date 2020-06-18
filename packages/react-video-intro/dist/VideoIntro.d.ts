import { ReactNode, CSSProperties } from "react";
import { DriverProgram } from "./DriverProgram";
export interface VideoIntroProps {
    playbackRate?: number;
    showControls?: boolean;
    tabs: VideoIntroTab[];
    onComplete(): void;
    onSkipped?(): void;
    width?: number | string;
    height?: number | string;
    style?: CSSProperties;
    videoHeight?: number | string;
    videoWidth?: number | string;
}
export interface VideoIntroTab {
    url?: string;
    content?: ReactNode;
    program?: DriverProgram;
}
export declare const VideoIntro: (props: VideoIntroProps) => JSX.Element;
