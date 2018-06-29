import {css} from 'linaria';
import {black} from './b.js';

export let red = css`
    color: red;
`;

export let blue = css`
    .${black} & {
        color: blue;
    }
`;

export let green = css`
    color: green;
`;
