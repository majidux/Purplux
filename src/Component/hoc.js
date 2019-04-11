import React from 'react';
let initialData = {
    data:'Purplux',
    creator:''
};
export const connectToHoc = HOC => class extends React.Component {
    componentDidMount() {
        this.setState({data:initialData.data});
        this.setState({creator:initialData.creator});
    }
    render(){
        return <HOC {...this.props} {...this.state}/>
    }
};
