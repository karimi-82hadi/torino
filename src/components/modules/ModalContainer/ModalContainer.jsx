import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { createPortal } from "react-dom";

import { removeBodyPadding } from "@/utils/bodyPadding";

import styles from "./ModalContainer.module.css";

function ModalContainer({ state, setState, children }) {
  const [DOMReady, setDOMReady] = useState(false);
  const modalContainerRef = useRef();
  const modalInnerRef = useRef();

  const cssTransitionClassName = {
    enter: styles["modalContainer-enter"],
    enterActive: styles["modalContainer-enter-active"],
    exitActive: styles["modalContainer-exit-active"],
  };

  const clickHandler = (e) => {
    if (e.target !== modalContainerRef.current) return;
    setState(false);
    removeBodyPadding(300);
  };

  useEffect(() => setDOMReady(true), []);

  return DOMReady
    ? createPortal(
        <CSSTransition
          in={state}
          nodeRef={modalContainerRef}
          timeout={300}
          unmountOnExit
          classNames={cssTransitionClassName}
          onEnter={() => modalInnerRef.current.classList.add("!scale-100")}
          onExit={() => modalInnerRef.current.classList.remove("!scale-100")}
        >
          <div
            onClick={(e) => clickHandler(e)}
            ref={modalContainerRef}
            className="fixed right-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/30 backdrop-blur-[2px]"
          >
            <div
              ref={modalInnerRef}
              className="h-auto w-[358px] scale-50 rounded-[20px] bg-white shadow-[0px_4px_4px_#00000040] transition-all duration-300 lg:w-[561px]"
            >
              {children}
            </div>
          </div>
        </CSSTransition>,
        document.getElementById("modal-root"),
      )
    : null;
}

export default ModalContainer;
