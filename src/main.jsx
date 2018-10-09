// src/main.jsx
import React from 'react';
import { render } from 'react-dom';

import DesktopLighter from './components/DesktopLighter.jsx';
import SRemo from './components/sRemo.jsx';

render(
    <div>
        <SRemo />
    </div>,
    document.getElementById('sRemo')
);
render(
    <div>
        <DesktopLighter />
    </div>,
    document.getElementById('DesktopLighter')
);
