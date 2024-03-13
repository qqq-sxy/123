const apiMock: MockMethod[] = [
    {
        url: "/mock/fuzzySearch",
        method: "post",
        response: () => {
            const data = [];
            for (let i = 0; i < 100; i++) {
                data.push({ code: `code${i}`, name: `name ${i}` });
            }
            return {
                code: 0,
                data,
                msg: "success"
            };
        },
    },
];

export default apiMock;
