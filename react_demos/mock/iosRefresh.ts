const apiMock: MockMethod[] = [
  {
    url: "/mock/iosRefresh",
    method: "post",
    response: () => {
      return {
        code: 0,
        data: {
          mock: "你好，我是mock2",
        },
        msg: "success",
      };
    },
  },
];

export default apiMock;
