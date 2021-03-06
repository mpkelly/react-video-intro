import { ReactNode, CSSProperties } from "react";
import { DriverProgram } from "./DriverProgram";
export interface HelpProps {
    playbackRate?: number;
    tabs: HelpTab[];
    onComplete(): void;
    onSkipped?(): void;
    width?: number | string;
    height?: number | string;
    style?: CSSProperties;
    videoHeight?: number | string;
    videoWidth?: number | string;
    program?: DriverProgram;
}
export interface HelpTab {
    url: string;
    content?: ReactNode;
}
export declare const Help: (props: HelpProps) => JSX.Element;
