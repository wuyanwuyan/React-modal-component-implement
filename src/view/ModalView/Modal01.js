import React from 'react';
import Modal from '../../component/Modal/Modal'
import ModalInner from './ModalInner';
import style from './modal.scss';
export default class Modal01 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            innerOpen: false
        }
    }

    componentWillReceiveProps(){
        this.setState({
            innerOpen: false
        });
    }

    onInnerBtnClick = () => {
        this.setState({
            innerOpen: true
        });
    }

    render() {
        return (
            <div style={{width: "500px", padding: "15px"}}>
                <button onClick={this.onInnerBtnClick} className={style.plain_btn}>
                    打开另一个模态框
                </button>
                <Modal open={this.state.innerOpen} title="dialog Name2">
                    <ModalInner/>
                </Modal>
            </div>

        )
    }

}
