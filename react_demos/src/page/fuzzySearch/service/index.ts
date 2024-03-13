import request from "../../../utils/request";

export const getfuzzySearchData= (data? :any) => {
    return request({
        url: "/mock/fuzzySearch",
        method: "post",
        data
    });
}