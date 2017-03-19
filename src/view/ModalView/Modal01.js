import React from 'react';

import style from './modal.scss';
import ModalHeader from './ModalHeader';
export default class Modal01 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            innerOpen:false
        }
    }

    comfirmlHandler(){
        this.props.comfirmlHandler && this.props.comfirmlHandler();
        console.log("自定义确定事件")
    }

    cancelHandler(){
        this.props.cancelHandler && this.props.cancelHandler();
        console.log("自定义取消事件")

    }

    onInnerBtnClick(){
        this.setState = {
            innerOpen : true
        }
    }

    render(){
        return(
            <div className={style.modalView01} style={{width:Math.random()*100 + 500}}>
              <ModalHeader title="dialogName" cancelHandler={this.cancelHandler.bind(this)}/>
                <div className={style.modal_cotent}>
                    <button onClick={this.onInnerBtnClick.bind(this)} className={style.plain_btn}>
                        打开另一个模态框
                    </button>
                </div>
                <div className={style.modal_footer}>
                    <button onClick={this.comfirmlHandler.bind(this)} className={style.modal_comfirm_btn}> comfirm </button>
                    <button onClick={this.cancelHandler.bind(this)} className={style.modal_comfirm_btn}> close </button>
                </div>
            </div>
        )
    }

}
