import React from 'react';
import Hprop from '../components/hprop';
import Adtag from '../components/adtag';
import Hcarbontag from '../components/hcarbontag';
import Hecs from '../components/hecs';
import Lead from '../components/lead';
import Helinfo from "../components/helinfo/default";
import MiHelinfo from "../components/helinfo/mi";
import Zone1 from "../components/zone/z1";
import Block from "../components/tag/block";
import HrecHaier from "../components/hrec/haier";
import NullTag from "./NullTag";
import Zone4 from "../components/zone/z4";
import Mi from "../components/custom/mi";
import Haierrsq from "../components/custom/haierrsq";
import Qrcode from "../components/qrcode";
import Xydcj from "../components/act/xydcj";

export const assemble = (datas) => {
    return datas.map((item, idx) => {
        switch (item.label) {
            case "helinfo" : {
                return <Helinfo json={item.json} key={idx}/>
            }
            case "mihelinfo" : {
                return <MiHelinfo json={item.json} key={idx}/>
            }
            case "brandinfo1" : {
                return <Zone1 json={item.json} key={idx}/>
            }
            case "brandinfo4" : {
                return <Zone4 json={item.json} key={idx}/>
            }
            case "hprop" : {
                return <Hprop json={item.json} key={idx}/>
            }
            case "adTag" : {
                return <Adtag json={item.json} key={idx}/>
            }
            case "hCarbonTag" : {
                return <Hcarbontag json={item.json} key={idx}/>
            }
            case "hecs" : {
                return <Hecs json={item.json} key={idx}/>
            }
            case "switchTag01" : {
                return <Lead json={item.json} key={idx}/>
            }
            case "mi" : {
                return <Mi json={item.json} key={idx}/>
            }
            case "haierrsq" : {
                return <Haierrsq json={item.json} key={idx}/>
            }
            case "qrcodeTag" : {
                return <Qrcode data={item.data} key={idx}/>
            }
            case "xydcjActBtn" : { // 幸运大抽奖按钮
                return <Xydcj data={item.data} key={idx}/>
            }
            case "hrecHaier" : {
                return <HrecHaier json={item.json} key={idx}/>
            }
            case "defTag" : {
                return <Block json={item.json} key={idx}/>
            }
            default: {
                return <NullTag key={idx}/>
            }
        }
    })
};
