import React from 'react';
import EntryTableRow from '../EntryTableRow/EntryTableRow'


var EntryTable = React.createClass({
    renderEntryTableRow: function(entry, index) {

        return (
            <EntryTableRow entry={this.props.seasonMatchesData[entry]} key={index}/>
        )
    },
    render: function() {
        var entries = this.props.seasonMatchesData.matches;
        return (
            <div className={'component component-entry-table ' + this.props.currentClubCss}>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th className="header__data header__data--date">Date</th>
                            <th className="header__data header__data--local">Local</th>
                            <th className="header__data header__data--visit">Visit</th>
                            <th className="header__data header__data--score">Score</th>
                            <th className="header__data header__data--goals"><img src="build/svg/ball.svg" className="icon icon--goal"/></th>
                            <th className="header__data header__data--assists"><img src="build/svg/goal-icon.svg" className="icon icon--assist"/></th>
                            <th className="header__data header__data--cards-y"><img src="build/svg/yellow-card.svg" className="icon icon--yellow-card"/></th>
                            <th className="header__data header__data--cards-ry"><img src="build/svg/yellow-red-card.svg" className="icon icon--yellow-card"/></th>
                            <th className="header__data header__data--cards-r"><img src="build/svg/red-card.svg" className="icon icon--yellow-card"/></th>
                            <th className="header__data header__data--played-mins"><i className="fa fa-clock-o"></i></th>
                            <th className="header__data header__data--in-min-in"><i className="fa fa-arrow-right"></i>&nbsp;<i className="fa fa-clock-o"></i></th>
                            <th className="header__data header__data--in-min-out"><i className="fa fa-arrow-left"></i>&nbsp;<i className="fa fa-clock-o"></i></th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.keys(this.props.seasonMatchesData).map(this.renderEntryTableRow)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
});

export default EntryTable;