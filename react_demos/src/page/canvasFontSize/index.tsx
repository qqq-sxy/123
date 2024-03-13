import React from 'react';

import CanvasFontSizeCom from './component/canvasFont';
import LoadCanvasImg from './component/loadCanvasImg/loadCanvasImg';

import nn from './assets/picture/11.png';

const CanvasFontSize = () => {

    return (
        <div>
            {/* <CanvasFontSizeCom
                text={'你好1'}
                backgroundImageSrc={'https://xiwang-inc.oss-cn-beijing.aliyuncs.com/guangong/school/admin/1699856999454.png'}
                x={100}
                y={100}
            /> */}
            <LoadCanvasImg
                text='你好我是宇雨鱼'
                backgroundImageSrc = 'https://ts1.cn.mm.bing.net/th/id/R-C.87ee5b432f47dcaf9390555f10199bcf?rik=%2f%2bR4%2bTSQ7fpXuQ&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn%2fw1920h1200%2f20180312%2fb0b9-fyscsmu5357009.jpg&ehk=crPfNey2wpLHlEONpCjpVB9R2WFJsXQ%2fkr%2blIdPOzMI%3d&risl=&pid=ImgRaw&r=0'
                textStyle={{position: 'absolute', top: '40px', left: '40px', color: 'red', fontSize: '40px'}}
            />
        </div>
    );
}

export default CanvasFontSize;