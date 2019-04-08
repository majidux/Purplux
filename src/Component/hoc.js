import React from 'react';
let initialData = {
    data:'HOC Test'
};
export let karim = Karim => class extends React.Component {
    componentDidMount(): void {
        this.setState({
            data:initialData.data
        })
    }
    render(){
        return <Karim {...this.props} {...this.state}/>
    }
};
