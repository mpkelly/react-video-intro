import { ReactNode, CSSProperties } from "react";
export interface DriverProgram {
    steps: DriverProgramStep[];
}
export interface DriverProgramState extends CSSProperties {
    component?: ReactNode;
    playbackRate?: number;
    loop?: boolean;
}
export interface DriverProgramStep extends DriverProgramState {
    start: number;
    end?: number;
}
export declare const getStep: (program: DriverProgram, time: number, loopCompleted: boolean) => DriverProgramStep;
