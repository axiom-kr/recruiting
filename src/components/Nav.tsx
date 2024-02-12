import { css } from "../../styled-system/css";
import { ForwardedRef, forwardRef } from "react";

interface NavProps {
  firstRef: ForwardedRef<HTMLSpanElement>;
  secondRef: ForwardedRef<HTMLSpanElement>;
  thirdRef: ForwardedRef<HTMLSpanElement>;
  fourthRef: ForwardedRef<HTMLSpanElement>;
}

const Nav = forwardRef<HTMLDivElement, NavProps>(
  ({ firstRef, secondRef, thirdRef, fourthRef }, _) => {
    return (
      <div
        id="nav"
        className={css({
          position: "fixed",
          right: "54px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "56px",
          top: "50vh",
          transform: "translateY(-50%)",
          zIndex: "30",
        })}
      >
        <span
          className={
            css({
              fontSize: "md",
              color: "#656565",
              fontWeight: "black",
            }) + " active"
          }
          ref={firstRef}
        >
          <a href="#home">HOME</a>
        </span>

        <span
          className={css({
            fontSize: "md",
            color: "#656565",
            fontWeight: "black",
          })}
          ref={secondRef}
        >
          <a href="#about">ABOUT</a>
        </span>
        <span
          className={css({
            fontSize: "md",
            color: "#656565",
            fontWeight: "black",
          })}
          ref={thirdRef}
        >
          <a href="#program">PROGRAM</a>
        </span>
        <span
          className={css({
            fontSize: "md",
            color: "#656565",
            fontWeight: "black",
          })}
          ref={fourthRef}
        >
          <a href="#recruit">JOIN US</a>
        </span>
      </div>
    );
  }
);

export default Nav;
