import React from 'react';
import Utils from '../../helpers';

var MainPicture = React.createClass({
    render: function() {
        return (
            <div className="component component-main-picture">
                <img src={this.props.mainImageSrc} className={this.props.cssClass + ' main__picture'}/>
            </div>

        )
    }
});



export default MainPicture;