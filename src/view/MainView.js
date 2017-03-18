import React from 'react';

export default class MainView extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <button>
                    show modal
                </button>
                <Modal/>
            </div>
        )
    }

}
