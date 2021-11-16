// @ts-nocheck
import { useRef } from "react";


export const RenderCounter = props => {
    const renderCounter  = useRef(0);
    renderCounter.current = renderCounter.current + 1;
    return <h1>Renders: {renderCounter.current}, {props.message}</h1>;
};

export const MyRef = () => {const ref = useRef(0); return ref.current + 1}