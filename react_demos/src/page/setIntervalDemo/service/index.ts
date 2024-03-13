import request from "../../../utils/request";

export const getSetIntervalDemo1 = (data? :any) => {
    return request({
        url: "/mock/setIntervalDemo1",
        method: "post",
        data
    });
}

export const getSetIntervalDemo2 = (data? :any) => {
    return request({
        url: "/mock/setIntervalDemo2",
        method: "post",
        data
    });
}