import React, { useEffect } from "react";
import request from "../../utils/request";

const IosRefresh = () => {
  const getIosRefresh = async () => {
    const res = await request({
      url: "/mock/iosRefresh",
    });
    console.log(res);
  };

  useEffect(() => {
    getIosRefresh();
  }, []);

  return (
    <div>
      <h1>IosRefresh</h1>
    </div>
  );
};

export default IosRefresh;
