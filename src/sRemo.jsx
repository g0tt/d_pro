// src/components/sRemo.jsx
import React, { Component } from 'react';
import {render} from "react-dom";
import ListView from "./modules/ListView.jsx";

const items = [
    {
        "key": 1,
        "name": "abc",
        "children": [
            {
                "key": 3,
                "name": "ghi",
                "children": [],
            }
        ]
    },
    {
        "key": 2,
        "name": "[通知制御]\t通知制御設定",
        "children": [],
    }
];

render(
    <div>
        <ListView items={items} />
    </div>,
    document.getElementById('sRemo')
);