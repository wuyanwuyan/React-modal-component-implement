import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import style from './modal.scss';
import classNames from 'classnames';

export default class Modal extends Component {
    static defaultProps = {
        open: false
    };

    constructor(props){
        super(props);
        this.state = {
            open:false
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.open === this.state.open)
            return;
        this.setState({
            ...this.state,
            open:nextProps.open
        })
        this._renderModal(nextProps.open);
    }

    _renderModal(open){
        this.node || this._firstInit();

        var wrapperClassName = classNames(style.modal_wrapper);
        if(open){
            wrapperClassName = classNames(style.modal_wrapper,style.in);
        }

        this.modal = (
            <div className={wrapperClassName} onClick={this.onMaskClickHandler.bind(this)}>
                <div className={style.modal_container} onClick={this.onModalClickHandler.bind(this)}>
                    {this.props.children}
                </div>
            </div>
        )

        ReactDOM.render(this.modal, this.node)
    }

    _firstInit(){
        this.node = document.createElement('div');
        this.node.className = 'ReactModal';
        document.body.appendChild(this.node);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate",nextProps, nextState,this.state);
        if(nextState.open == this.state.open){
            return false;
        }

        this._renderModal(nextState.open);
        return true;

    }

    onMaskClickHandler(){
        this.setState({
            ...this.state,
            open:false
        })
    }

    onModalClickHandler(event){
        event.stopPropagation()
        event.nativeEvent.stopPropagation();
    }

    defaultComfirmHandler(){
        this.setState({
            ...this.state,
            open:false
        })
    }

    defaultCancelHandler(){
        this.setState({
            ...this.state,
            open:false
        })
    }

    render() {
        return null;
    }
}