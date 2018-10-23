// src/components/sRemo.jsx
import React, { Component } from 'react';
import {render} from "react-dom";
import ListView from "./modules/ListView.jsx";

var isTree = Math.random() > 0.50;

if (!isTree) {
    var items = [
        {
            "key": 1,
            "name": "[リモコン] リモコン設定(設定画面)",
            "children": [],
        },
        {
            "key": 2,
            "name": "[リモコン] リモコン検索(変更)",
            "children": [],
        },
        {
            "key": 3,
            "name": "[リモコン] AIスピーカデバイス設定",
            "children": [],
        },
        {
            "key": 4,
            "name": "[リモコン] ボタン設定",
            "children": [],
        },
        {
            "key": 5,
            "name": "[リモコン] タイマー設定・解除",
            "children": [],
        },
        {
            "key": 6,
            "name": "[装置・接続] 装置(Wi-Fi)設定",
            "children": [],
        },
        {
            "key": 7,
            "name": "[装置・接続]SSID設定(自宅)",
            "children": [],
        },
        {
            "key": 8,
            "name": "[装置・接続] 機器情報表示",
            "children": [],
        },
        {
            "key": 9,
            "name": "[装置・接続] リモコン送信ログ",
            "children": [],
        },
        {
            "key": 10,
            "name": "[通知制御] 通知制御 共通設定",
            "children": [],
        },
        {
            "key": 11,
            "name": "[通知制御] 通知制御設定",
            "children": [],
        },
        {
            "key": 12,
            "name": "[通知制御] 通知先設定 (Mail)",
            "children": [],
        },
        {
            "key": 13,
            "name": "[通知制御] 通知先設定 (IFTTT)",
            "children": [],
        },
        {
            "key": 14,
            "name": "[IFTTT] Condition設定[IFTTT]",
            "children": [],
        },
        {
            "key": 15,
            "name": "[Cloud] 各種名称変更",
            "children": [],
        },
        {
            "key": 16,
            "name": "[Cloud] 機器共有設定",
            "children": [],
        }
    ];
} else {
    var items = [
        {
            "key": 101,
            "name": "リモコン設定",
            "children": [
                {
                    "key": 1,
                    "name": "[リモコン] リモコン設定(設定画面)",
                    "children": [],
                },
                {
                    "key": 2,
                    "name": "[リモコン] リモコン検索(変更)",
                    "children": [],
                },
                {
                    "key": 3,
                    "name": "[リモコン] AIスピーカデバイス設定",
                    "children": [],
                },
                {
                    "key": 4,
                    "name": "[リモコン] ボタン設定",
                    "children": [],
                },
                {
                    "key": 5,
                    "name": "[リモコン] タイマー設定・解除",
                    "children": [],
                },
            ]
        },
        {
            "key": 102,
            "name": "装置・接続",
            "children": [
                {
                    "key": 6,
                    "name": "[装置・接続] 装置(Wi-Fi)設定",
                    "children": [],
                },
                {
                    "key": 7,
                    "name": "[装置・接続]SSID設定(自宅)",
                    "children": [],
                },
                {
                    "key": 8,
                    "name": "[装置・接続] 機器情報表示",
                    "children": [],
                },
                {
                    "key": 9,
                    "name": "[装置・接続] リモコン送信ログ",
                    "children": [],
                },
            ]
        },
        {
            "key": 103,
            "name": "通知制御",
            "children": [
                {
                    "key": 10,
                    "name": "[通知制御] 通知制御 共通設定",
                    "children": [],
                },
                {
                    "key": 11,
                    "name": "[通知制御] 通知制御設定",
                    "children": [],
                },
                {
                    "key": 12,
                    "name": "[通知制御] 通知先設定 (Mail)",
                    "children": [],
                },
                {
                    "key": 13,
                    "name": "[通知制御] 通知先設定 (IFTTT)",
                    "children": [],
                },
            ]
        },
        {
            "key": 104,
            "name": "IFTTT",
            "children": [
                {
                    "key": 14,
                    "name": "[IFTTT] Condition設定[IFTTT]",
                    "children": [],
                },
            ]
        },
        {
            "key": 105,
            "name": "Cloud",
            "children": [
                {
                    "key": 15,
                    "name": "[Cloud] 各種名称変更",
                    "children": [],
                },
                {
                    "key": 16,
                    "name": "[Cloud] 機器共有設定",
                    "children": [],
                }
            ]
        },
    ];
}


render(
    <div>
        <ListView items={items} problem={"sRemo_" + (isTree ? "tree" : "plane")}/>
    </div>,
    document.getElementById('sRemo')
);