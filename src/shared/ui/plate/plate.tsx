import { HTMLAttributes, useState, useEffect } from "react";
import cn from "classnames";
import st from "./styles.module.scss";

interface Plate extends HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
}

export const Plate = (props: Plate) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mouseX, setMouseX] = useState<number | null>(null);
  const [mouseY, setMouseY] = useState<number | null>(null);
  const [lightSize, setLightSize] = useState<number | null>(null);

  useEffect(() => {
    const width = props.width || 60;
    const height = props.height || 60;

    if (width > height) {
      setLightSize(width);
    } else {
      setLightSize(height);
    }
  }, [props]);

  const handleMousePos = (evt: any) => {
    setIsLoaded(true);
    const event = evt.nativeEvent;
    setMouseX(event.layerX);
    setMouseY(event.layerY);
  };

  return (
    <div
      {...props}
      onMouseMove={handleMousePos}
      className={cn(
        st.card,
        st.light,
        isLoaded && st.light_disabled,
        props.className
      )}
      style={
        {
          [`--mouse-x`]: mouseX,
          [`--mouse-y`]: mouseY,
          [`--size`]: lightSize! / 16 + "rem",
        } as React.CSSProperties
      }
    >
      {props.children}
    </div>
  );
};
