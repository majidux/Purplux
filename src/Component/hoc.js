import React from 'react';
let initialData = {
    data:'Purplux'
};
export const connectToHoc = HOC => class extends React.Component {
    componentDidMount() {
        this.setState({
            data:initialData.data
        })
    }
    render(){
        return <HOC {...this.props} {...this.state}/>
    }
};
