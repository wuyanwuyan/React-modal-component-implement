import React from 'react';
import style from './modal.scss';

export default class ModalHeader extends React.Component {
    render(){
        return (<div className={style.modal_header}>
            {this.props.title}
            <button type="button" className={style.close} onClick={()=>{this.props.cancelHandler && this.props.cancelHandler()}}>
                ×
            </button>
        </div>);


        // <div className={style.modal_footer}>
        //     <button onClick={this.comfirmlHandler.bind(this)} className={style.modal_comfirm_btn}> comfirm </button>
        //     <button onClick={this.cancelHandler.bind(this)} className={style.modal_comfirm_btn}> close </button>
        // </div>
        // </div>
    }

}
