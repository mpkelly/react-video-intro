import React, { CSSProperties } from "react";
import { useVideoIntroState, VideoIntroState } from "./VideoIntroProvidier";
import { useDriverState } from "./DriverState";
import { DriverProgramState } from "./DriverProgram";

export const VideoPlayer = () => {
  const {
    currentTab,
    height,
    width,
    videoWidth,
    videoHeight,
    playbackRate,
    style,
    handleVideo,
    video,
    program,
    tabIndex,
    showControls,
    handleVideoTimeUpdate,
  } = useVideoIntroState() as VideoIntroState;

  const state = useDriverState(program, video);

  const handleRef = (video: HTMLVideoElement | null) => {
    if (video) {
      video.playbackRate = playbackRate;
      handleVideo(video);
    }
  };

  const additionalStyle = style || {};
  const { component, ...rest } = state;
  const videoStyle = convertStateToStyles(rest);
  return (
    <div
      key={tabIndex}
      style={{
        display: "flex",
        flexDirection: "column",
        width,
        height,
        ...additionalStyle,
      }}
    >
      <div style={{ position: "relative", overflow: "hidden" }}>
        <video
          width={videoWidth}
          height={videoHeight}
          autoPlay
          loop
          controls={showControls}
          style={videoStyle}
          onTimeUpdate={handleVideoTimeUpdate}
          onLoadedMetadata={(event) => {
            handleRef(event.currentTarget);
          }}
        >
          {currentTab.url && <source src={currentTab.url} />}
        </video>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
          }}
        >
          {component}
        </div>
      </div>
      {currentTab.content}
    </div>
  );
};

const convertStateToStyles = (state: DriverProgramState): CSSProperties => {
  const { scale, ...rest } = state;
  if (scale === undefined) {
    return rest;
  }
  const transform = `scale(${scale})`;
  return { transform, ...rest };
};
