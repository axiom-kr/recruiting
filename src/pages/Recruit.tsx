import { ForwardedRef, forwardRef } from "react";
import { css } from "../../styled-system/css";
import WaveCanvas from "../components/WaveCanvas";

const Recruit = forwardRef<HTMLDivElement>(
  (_, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        })}
        ref={ref}
        id="recruit"
      >
        <WaveCanvas />
        <div
          className={css({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            lg: { height: `calc(100vh - 300px)` },
            fontSize: "16px",
            bg: "white",
            color: "black",
            fontWeight: "light",
            fontFamily: "gmarket",
            lineHeight: "32px",
          })}
        >
          <p>
            Axiom은 실제 창업을 목표로 도전과 성장을 경험하고 싶은 분들을 <br />
            위해, 창업 초기의 준비과정을 지원하는{" "}
            <em className={css({ color: "#FF993A" })}>
              특별한 단체
            </em>입니다. <br />
            <br />
            다양한 분야에서 꿈을 키우고 있는 학생들이 함께 모여 비즈니스에{" "}
            <br />
            대해 끊임없이 고민하고 협력하는 혁신적인 가치를 제공합니다.
          </p>
        </div>
      </div>
    );
  }
);

export default Recruit;
