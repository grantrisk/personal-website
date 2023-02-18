import { useEffect, useRef } from "react";

export default function GradualColor({ children }) {
    const textRef = useRef(null);
    useEffect(() => {
        const text = textRef.current;
        const letters = children.split("");
        text.innerHTML = "";
        letters.forEach((letter, index) => {
            const span = document.createElement("span");
            // make span color black
            span.style.color = "black";
            span.innerHTML = letter;
            span.style.animation = "color-change 50s linear infinite";
            // Apply an offset to the animation for each letter
            span.style.animationDelay = `${index * 0.3}s`;
            text.appendChild(span);
        });
    }, [children]);

    return <h1 ref={textRef} />;
}
