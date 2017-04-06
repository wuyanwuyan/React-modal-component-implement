import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import style from './modal.scss';
import classNames from 'classnames';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';

export default class Modal extends Component {
    static defaultProps = {
        open: false
    };

    constructor(props) {
        super(props);
        this.minimum = 0.2;
        this.state = {
            open: false,
            scale: this.minimum
        }
    }

    componentWillMount() {
        console.log("componentWillMount", arguments);
    }

    componentDidMount() {
        console.log("componentDidMount", arguments);
        // this._open();
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps", arguments);
        if (nextProps.open === this.state.open)
            return;
        nextProps.open ? this._open() : this._close();
    }

    _renderModal(open) {
        this.node || this._firstInit();

        var wrapperClassName = classNames(style.modal_wrapper, {[style.in]: open});

        var {scale} = this.state;
        var scaleStyle = {
            transform: `scale(${scale})`
        }

        this.modal = (
            <div className={wrapperClassName} onClick={this.onMaskClickHandler.bind(this)}>
                <div className={style.modal_container} onClick={this.onModalClickHandler.bind(this)} style={scaleStyle}>
                    <ModalHeader title={this.props.title} cancelHandler={this.defaultCancelHandler.bind(this)}/>
                    {this.props.children}
                    <ModalFooter comfirmHandler={this.defaultComfirmHandler.bind(this)}
                                 cancelHandler={this.defaultCancelHandler.bind(this)}/>
                </div>
            </div>
        )

        ReactDOM.render(this.modal, this.node)
    }

    _firstInit() {
        this.node = document.createElement('div');
        this.node.className = 'ReactModal';
        document.body.appendChild(this.node);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate", arguments);
        if (nextState.open == this.state.open) {
            return false;
        }

        this._renderModal(nextState.open);
        return true;

    }

    componentWillUpdate() {
        console.log("componentWillUpdate", arguments);
    }

    componentDidUpdate() {
        console.log("componentDidUpdate", arguments);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount", arguments);
    }

    onMaskClickHandler() {
        this._close();
    }

    onModalClickHandler(event) {
        event.stopPropagation()
        event.nativeEvent.stopPropagation();
    }

    defaultComfirmHandler() {
        this._close();
    }

    defaultCancelHandler() {
        this._close();
    }

    _open = () => {
        this.setState({
            scale: this.minimum,
            open: true
        })
        var id = setInterval(() => {
            var {scale} = this.state;
            if (scale < 1) {
                scale += 0.3;
                this.setState({
                    scale: scale
                })
            } else {
                this.setState({
                    scale: 1
                })

                clearInterval(id);
            }
            this._renderModal(true);
        }, 16)
    }

    _close = () => {
        var id = setInterval(() => {
            var {scale} = this.state;
            if (scale > this.minimum) {
                scale -= 0.3;
                this.setState({
                    scale: scale
                })
                this._renderModal(true);
            } else {
                this.setState({
                    scale: this.minimum,
                    open: false
                })
                this._renderModal(false);
                clearInterval(id);
            }
        }, 16)
    }

    render() {
        return null;
    }
}