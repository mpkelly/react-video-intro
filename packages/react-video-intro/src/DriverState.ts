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
  const [state, setState] = useState<DriverProgramState>(createState(program));
  const requestRef = useRef<number>();
  const { loopCompleted } = useVideoIntroState() as VideoIntroState;

  const animate = (lastStep?: DriverProgramStep, loopCompleted?: boolean) => {
    if (!video || !program) {
      return;
    }
    const currentTime = video.currentTime as number;
    const step = getStep(program, currentTime, !!loopCompleted);

    if (!step) {
      return;
    }

    video.playbackRate =
      step.playbackRate !== undefined ? step.playbackRate : 1;

    if (step !== lastStep) {
      setState(createStepState(step));
    }

    requestRef.current = requestAnimationFrame(() =>
      animate(step, loopCompleted)
    );
  };

  useEffect(() => {
    if (program && video) {
      requestRef.current = requestAnimationFrame(() =>
        animate(undefined, loopCompleted)
      );
    }
    return () => cancelAnimationFrame(requestRef.current as number);
  }, [program, video, loopCompleted]);

  return state;
};

const createState = (program?: DriverProgram) => {
  if (!program || !program.steps.length) {
    return {
      scale: 1,
    };
  }
  const step = program.steps[0];
  return createStepState(step);
};

const createStepState = (step: DriverProgramStep) => {
  const { start, end, ...rest } = step;
  return rest;
};
