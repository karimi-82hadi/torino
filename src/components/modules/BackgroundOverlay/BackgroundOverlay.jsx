import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

import { removeBodyPadding } from "@/utils/bodyPadding";

import styles from "./BackgroundOverlay.module.css";

function BackgroundOverlay({ state, setState }) {
  const backgroundoverlayRef = useRef();

  const cssTransitionClassName = {
    enter: styles["backgroundOverlay-enter"],
    enterActive: styles["backgroundOverlay-enter-active"],
    exitActive: styles["backgroundOverlay-exit-active"],
  };

  const clickHandler = () => {
    setState(false);
    removeBodyPadding(300);
  };

  return (
    <CSSTransition
      in={state}
      nodeRef={backgroundoverlayRef}
      timeout={300}
      unmountOnExit
      classNames={cssTransitionClassName}
    >
      <div
        onClick={clickHandler}
        ref={backgroundoverlayRef}
        className="bg-black/30 fixed right-0 top-0 z-10 h-full w-full backdrop-blur-[2px]"
      ></div>
    </CSSTransition>
  );
}

export default BackgroundOverlay;
