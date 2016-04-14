import React from 'react';


var Shield = React.createClass({
    render: function() {
        return (
            <img src={this.props.imageSource} className="shield__mini" alt={this.props.altText}/>
        )
    }
});

export default Shield;