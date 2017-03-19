import React from 'react';

import style from './modal.scss';
export default class Modal01 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            innerOpen:false
        }
    }

    onInnerBtnClick(){
        this.setState = {
            innerOpen : true
        }
    }

    render(){
        return(
                <div style={{width:"500px",padding:"15px"}}>
                    <button onClick={this.onInnerBtnClick.bind(this)} className={style.plain_btn}>
                        打开另一个模态框
                    </button>
                </div>

        )
    }

}
