import { ForwardedRef, forwardRef } from "react";
import { css } from "../../styled-system/css";

const Program = forwardRef<HTMLDivElement>(
  (_, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        className={css({
          height: `calc(100vh)`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        })}
        ref={ref}
        id="program"
      >
        program
      </div>
    );
  }
);

export default Program;
