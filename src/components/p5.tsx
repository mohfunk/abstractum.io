
import p5 from 'p5';
import React, { useState, useEffect } from 'react';

interface PState {
    canvas: p5 | null
    wrap: HTMLElement | null
    sketch: (p: p5) => any
}
const pState = (canv: any = null, wrap: HTMLElement | null = null, sketch: any = null): PState =>
    ({ canvas: canv, wrap: wrap, sketch: sketch})
    
const p = ({sketch}) => {
    const [state, setState] = useState(pState())

    useEffect(() => {
        if (state.sketch != sketch) {
            setState(pState(new p5(sketch, state.wrap as HTMLElement), state.wrap, sketch))
        }
        const cleanup = () => {state.canvas ? state.canvas.remove() : 0}
        return cleanup()
    });


    return <div ref={wrap => state.wrap = wrap} />
}

export default p