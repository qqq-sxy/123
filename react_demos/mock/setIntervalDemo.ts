import { MockMethod } from "vite-plugin-mock";

const apiMock: MockMethod[] = [
    {
        url: "/mock/setIntervalDemo1",
        method: "post",
        response: () => {
            return {
                code: 0,
                data: {
                    mock: '你好，我是mock1'
                },
                msg: "success"
            };
        }
    },
    {
        url: "/mock/setIntervalDemo2",
        method: "post",
        response: () => {
            return {
                code: 0,
                data: {
                    mock: '你好，我是mock2'
                },
                msg: "success"
            };
        }
    }
];

export default apiMock;
