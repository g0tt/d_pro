// src/components/sRemo.jsx
import React, { Component } from 'react';
import {render} from "react-dom";
import ListView from "./modules/ListView.jsx";



render(
    <div>
        <ListView items={items} problem="sRemo_2"/>
    </div>,
    document.getElementById('sRemo')
);