import React from 'react';
import Modal01 from './ModalView/Modal01';
import Modal from '../component/Modal/Modal'
export default class MainView extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            open:false
        }
    }

    onBtnClick(){
        this.setState({
            open:true
        });

    }

    render(){
        return(
            <div>
                <button onClick={()=>(this.onBtnClick())}>
                    show modal
                </button>
                <Modal open={this.state.open}>
                    <Modal01/>
                </Modal>
            </div>
        )
    }

}
