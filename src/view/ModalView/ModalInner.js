import React from 'react';

import style from './modal.scss';

export default class ModalInner extends React.Component{
    render(){
        return(
                <div style={{width:"600px",padding:"50px"}}>
                    <em>
                        第二个模态框
                    </em>
                </div>

        )
    }

}
