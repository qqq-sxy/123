import { MockMethod } from "vite-plugin-mock";

const apiMock: MockMethod[] = [
    {
      url: "/mock/jiekou1",
      method: "get",
      response: () => {
        return {
          code: 0,
          data: {
            mock: '你好，我是mock'
          },
          "msg": "success"
        }
      },
    },
  ];
  
  export default apiMock;
