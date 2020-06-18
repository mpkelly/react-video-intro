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

export const getStep = (
  program: DriverProgram,
  time: number,
  loopCompleted: boolean
) => {
  const steps = loopCompleted
    ? program.steps.filter((step) => step.loop !== false)
    : program.steps;
  return steps.find(
    (step) =>
      (time >= step.start && step.end === undefined) ||
      time < (step.end as number)
  );
};
