import react from 'react';

import ChildrenOne from './component/childrenOne/index'

const SetIntervalDemo = () => {

    return (
        <div>
            {
                [1,2,3].map((item, index) => {
                    return <ChildrenOne key={index+item} index={index}/>
                })
            }
        </div>
    )
}

export default SetIntervalDemo;