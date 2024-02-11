import { css } from "../../styled-system/css";
import { ForwardedRef, forwardRef } from "react";

interface NavProps {
  firstRef: ForwardedRef<HTMLDivElement>;
  secondRef: ForwardedRef<HTMLDivElement>;
  thirdRef: ForwardedRef<HTMLDivElement>;
  fourthRef: ForwardedRef<HTMLDivElement>;
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
        })}
      >
        <span
          className={css({
            fontSize: "md",
            color: "#656565",
            fontWeight: "black",
          })}
          ref={firstRef}
        >
          HOME
        </span>
        <span
          className={css({
            fontSize: "md",
            color: "#656565",
            fontWeight: "black",
          })}
          ref={secondRef}
        >
          ABOUT
        </span>
        <span
          className={css({
            fontSize: "md",
            color: "#656565",
            fontWeight: "black",
          })}
          ref={thirdRef}
        >
          PROGRAM
        </span>
        <span
          className={css({
            fontSize: "md",
            color: "#656565",
            fontWeight: "black",
          })}
          ref={fourthRef}
        >
          JOIN US
        </span>
      </div>
    );
  }
);

export default Nav;
