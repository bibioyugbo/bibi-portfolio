declare module 'react-typical' {
    import * as React from 'react';

    export interface TypicalProps {
        steps: (string | number)[];
        wrapper?: keyof JSX.IntrinsicElements;
        loop?: number;
        className?: string; // 👈 this solves your issue
    }

    const Typical: React.FC<TypicalProps>;
    export default Typical;
}