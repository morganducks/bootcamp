import React, {useState} from 'react';

const Colors = (props) => {

    const {boxList,setBoxList} = props;


//need to create a box in css, and control the color value 



    return(
<div className="colorBoxRow">
        {
            boxList.map( (box,index) => {
                return(
                    <div key={index} style={{width: box.width, height: box.height, backgroundColor: box.color}}>

                    </div>
                )
            })
        }
</div>

    )
}

export default Colors;