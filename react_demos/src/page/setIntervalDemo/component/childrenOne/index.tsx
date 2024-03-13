import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from "../../../../model/store";
import { getSetIntervalDemo1, getSetIntervalDemo2 } from "../../service/index";

type ChildrenOneType = {
    index: number;
}

const ChildrenOne = (props: ChildrenOneType) => {

    const { index } = props;

    const nowValue = useSelector((state: RootState) => state.setIntervalDemoModel.nowValue); 
    const dispatch = useDispatch<Dispatch>();

    const timeInterval = useRef<number>();
    const startInterval = () => {
        timeInterval.current = setInterval(() => {
            getData2()
            console.log('我是定时器，每隔5秒执行一次')
        }, 5000);
    };

    useEffect(() => {
        return () => {
            clearInterval(timeInterval.current);
        };
    }, []);

    useEffect(() => {
        if (nowValue === 1) {
            clearInterval(timeInterval.current);
        }
    }, [nowValue]);

    const getData1 = async () => {
        getSetIntervalDemo1().then((res) => {
            console.log('接口1的数据: ', res);
            getData2();
            startInterval();
        })
        .catch((err) => {
            console.log('接口1请求失败', err)
            dispatch.setIntervalDemoModel.setNowValue(1);
        })
    }

    const getData2 = async () => {
        getSetIntervalDemo2().then((res) => {
            console.log('接口2的数据: ', res);
            dispatch.setIntervalDemoModel.setNowValue(1);
        })
        .catch((err) => {
            console.log('接口2请求失败', err)
            dispatch.setIntervalDemoModel.setNowValue(1);
        })
    }

    useEffect(() => {
        getData1();
    }, []);

    return <div>
        <div>我是子组件{index}</div>
    </div>;
};

export default ChildrenOne;