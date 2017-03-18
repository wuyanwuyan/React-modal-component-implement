import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends Component {
    static defaultProps = {
        open: false
    };
    componentWillReceiveProps(nextProps) {
        if (nextProps.open && !this.props.open) {
            this.node = document.createElement('div');
            this.node.className = 'ReactModal';
            document.body.appendChild(this.node);
            const style = require('./style.scss');
            const {children, ...rest} = nextProps;
            let modal = (
                <div >
                    <div  {...rest}></div>
                    {nextProps.children}
                </div>
            );

            let allClass = document.getElementsByClassName('ReactModal');
            ReactDOM.render(modal, allClass[allClass.length - 1])

        }
        if (this.props.open && !nextProps.open) {
            ReactDOM.unmountComponentAtNode(this.node)   }
    }
    render() {
        return null;
    }
}