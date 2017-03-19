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
    }

}
