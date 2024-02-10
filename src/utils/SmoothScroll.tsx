import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
