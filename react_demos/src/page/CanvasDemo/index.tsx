import React, { useEffect, useRef } from "react";
import './style.css'

const CanvasDemo = () => {

  const canvasDemo = useRef(null);

  useEffect(() => {
    const canvas = canvasDemo.current as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    ctx.scale(dpr, dpr);
    const canvasImg = document.getElementById("canvas_img");
    console.log('canvasImg: ', canvasImg);

    const backgroundImage = new Image();
    backgroundImage.setAttribute('crossOrigin', 'anonymous')
    backgroundImage.src = "https://m.xiwang.com/resource/4fUhVsqPALoKweSPLTYLB-1709794344201.jpg";
    backgroundImage.onload = () => {
      const imgScale = backgroundImage.width / backgroundImage.height;
      canvas.style.width = canvas.width + 'px';
      canvas.style.height = canvas.width / imgScale + 'px';
      canvas.width = canvas.width * dpr;
      canvas.height = canvas.width / imgScale;

      ctx.drawImage(backgroundImage, 0, 0, backgroundImage.width, backgroundImage.height, 0, 0, canvas.width, canvas.height);
      ctx.font = `{ fontFamily: 'PingFang SC-Medium', fontSize: '20px'}`;
      ctx.fillText('你好', 270,  370);
      canvasImg.src = canvas.toDataURL('image/png', 1);
    }
  }, [])

  return (
    <div>
      <h1>CanvasDemo</h1>
      <canvas ref={canvasDemo}></canvas>
      <img className="poster_img" id="canvas_img" src="" alt=""></img>
    </div>
  );
}

export default CanvasDemo;