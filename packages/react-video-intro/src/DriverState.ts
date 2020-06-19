import { useRef, useState, useEffect } from "react";
import {
  DriverProgram,
  DriverProgramState,
  DriverProgramStep,
  getStep,
} from "./DriverProgram";
import { useVideoIntroState, VideoIntroState } from "./VideoIntroProvidier";

export const useDriverState = (
  program?: DriverProgram,
  video?: HTMLVideoElement
) => {
  const [state, setState] = useState<DriverProgramState>();
  const requestRef = useRef<number>();
  const { loopCompleted, time } = useVideoIntroState() as VideoIntroState;

  const animate = (
    time: number,
    lastStep?: DriverProgramStep,
    loopCompleted?: boolean
  ) => {
    if (!program) {
      return;
    }

    const step = getStep(program, time, !!loopCompleted);
    if (!step) {
      return;
    }

    if (video && step.playbackRate !== undefined) {
      video.playbackRate = step.playbackRate;
    }

    if (step !== lastStep) {
      setState(createStepState(step));
    }

    requestRef.current = requestAnimationFrame(() =>
      animate(time, step, loopCompleted)
    );
  };

  useEffect(() => {
    if (program) {
      requestRef.current = requestAnimationFrame(() =>
        animate(time, undefined, loopCompleted)
      );
    } else {
      setState(createState(program));
    }
    return () => cancelAnimationFrame(requestRef.current as number);
  }, [program, video, time, loopCompleted]);

  return state;
};

const createState = (program?: DriverProgram) => {
  if (!program || !program.steps.length) {
    return {};
  }
  const step = program.steps[0];
  return createStepState(step);
};

const createStepState = (step: DriverProgramStep) => {
  const { start, end, ...rest } = step;
  return rest;
};
