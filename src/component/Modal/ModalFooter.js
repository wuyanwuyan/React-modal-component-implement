import React from 'react';
import style from './modal.scss';

export default class ModalFooter extends React.Component {
    constructor(props){
        super(props)
    }

    _comfirmlHandler(){
        this.props.comfirmHandler && this.props.comfirmHandler();
    }

    _cancelHandler(){
        this.props.cancelHandler && this.props.cancelHandler();
    }

    render(){
        return (
            <div className={style.modal_footer}>
                <button onClick={this._comfirmlHandler.bind(this)} className={style.modal_comfirm_btn}> comfirm </button>
                <button onClick={this._cancelHandler.bind(this)} className={style.modal_comfirm_btn}> close </button>
            </div>);



    }

}
