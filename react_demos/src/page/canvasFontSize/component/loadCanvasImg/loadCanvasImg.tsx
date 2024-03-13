import React from 'react';
import html2Canvas from 'html2canvas';

type LoadCanvasImgProps = {
  text?: string;
  loadName?: string;
  backgroundImageSrc?: string;
  textStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
};

const LoadCanvasImg: React.FC<LoadCanvasImgProps> = ({
  text = '我是名字',
  loadName = 'load',
  backgroundImageSrc = '',
  textStyle = { position: 'absolute', top: '0px', left: '0px' },
  containerStyle,
}) => {
  const onHtml2Canvas = async () => {
    try {
      const loadBody = document.getElementById('loadBody') as HTMLElement;
      const canvas = await html2Canvas(loadBody, {
        useCORS: true,
        allowTaint: false,
      });
      downloadCanvasImg(canvas);
    } catch (error) {
      console.error('Error generating canvas image:', error);
    }
  };

  const downloadCanvasImg = (canvas: HTMLCanvasElement) => {
    const dataURL = canvas.toDataURL('image/png') || '';
    const downloadLink = document.createElement('a');
    downloadLink.href = dataURL;
    downloadLink.download = `${loadName}.png`;

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className='loadCanvasImg' style={containerStyle}>
      <div id='loadBody'>
        <div style={textStyle}>{text}</div>
        <img src={backgroundImageSrc} width={400} alt='Background' />
      </div>
      <button onClick={onHtml2Canvas}>点击下载</button>
    </div>
  );
};

export default LoadCanvasImg;
