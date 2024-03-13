import React, { useEffect, useRef } from 'react';
import { Button } from 'antd-mobile';

interface CanvasFontSizeProps {
    text?: string;
    backgroundImageSrc?: string;
    x?: number;
    y?: number;
    textStyle?: React.CSSProperties;
    fillStyle?: string | CanvasGradient | CanvasPattern;
    canvasStyle?: React.CSSProperties;
}

const CanvasFontSize: React.FC<CanvasFontSizeProps> = ({
    text = '姓名',
    backgroundImageSrc = '',
    x = 100,
    y = 100,
    textStyle = { fontFamily: 'e1kcQpNW_GBK_ry', fontSize: '22px'},
    fillStyle = '#000',
    canvasStyle = { width: 800, height: 600 }
}) => {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    const downloadCanvasImage = () => {
        const canvas = canvasRef.current;
        const dataURL = canvas?.toDataURL('image/png') || '';

        const downloadLink = document.createElement('a');
        downloadLink.href = dataURL;
        downloadLink.download = 'canvas_image.png';

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement;
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

        const backgroundImage = new Image();
        // backgroundImage.setAttribute('crossOrigin', 'Anonymous');
        backgroundImage.src = backgroundImageSrc;
        backgroundImage.onload = () => {
            ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

            ctx.font = `${textStyle.fontSize} ${textStyle.fontFamily}`;
            ctx.fillStyle = fillStyle;
            ctx.fillText(text, x, y);
        };

    }, [text, x, y, backgroundImageSrc, textStyle, fillStyle]);

    return (
        <div>
            <canvas ref={canvasRef} style={canvasStyle} />
            <Button onClick={downloadCanvasImage} color='primary'>下载链接</Button>
        </div>
    );
}

export default CanvasFontSize;
