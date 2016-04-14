import React from 'react';
import Shield from '../Shield/Shield';
import Helpers from '../../helpers';

var EntryTableRow = React.createClass({
    nameToImageShield : function(name) {
        var pathToImage = Helpers.nameToImageShield(name);
        return (
            <Shield imageSource={'build/svg/'+pathToImage} altText={name}/>
        )
    },


    render: function() {
        var entry = this.props.entry;

        return (
            <tr className="component component-entry-table-row data__row">
                <td className="data__cell data__cell--date">{entry.date}</td>
                <td className="data__cell data__cell--home">{this.nameToImageShield(entry.home)}</td>
                <td className="data__cell data__cell--visit">{this.nameToImageShield(entry.away)}</td>
                <td className="data__cell data__cell--result">{entry.result}</td>
                <td className="data__cell data__cell--goals">{entry.goals}</td>
                <td className="data__cell data__cell--assists">{entry.assists}</td>
                <td className="data__cell data__cell--cards-y">{entry.yellowCard}</td>
                <td className="data__cell data__cell--cards-ry">{entry.doubleYellowCard}</td>
                <td className="data__cell data__cell--cards-r">{entry.redCard}</td>
                <td className="data__cell data__cell--played-mins">{entry.playedMinutes}</td>
                <td className="data__cell data__cell--in-min-in">{entry.inGameOnMin}</td>
                <td className="data__cell data__cell--in-min-out">{entry.outGameOnMin}</td>
            </tr>
        )
    }
});

export default EntryTableRow;