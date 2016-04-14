import React from 'react';

import MainPicture from '../MainPicture/MainPicture';
import Controls from    '../controls/controls';
import Entries from     '../../entries';
import Helpers from '../../helpers'


var Summary = React.createClass({

    componentDidMount : function() {

    },

    getPicture : function(sourcePicture, cssClass, carpet) {
        return (
            <MainPicture mainImageSrc={carpet + sourcePicture} cssClass={cssClass}/>
        )
    },

    getControls : function(prevSeason, nextSeason) {
        return (
            <Controls prevSeason={prevSeason} nextSeason={nextSeason} updateDataSeason={this.props.updateDataSeason}/>
        )
    },

    render: function() {
        return (
            <div className={'component component-summary ' + this.props.currentClubCss}>
                <div className="summary__title">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Claudio Pizarro</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <h2>Season: {this.props.currentSeasonYear}</h2>

                            </div>
                            <div className="col-md-4">
                                <h2>Club: {this.props.currentClub}</h2>

                            </div>
                            <div className="col-md-4">
                                {this.getControls(this.props.prevSeason, this.props.nextSeason )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="summary__content">

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            {this.getPicture(this.props.mainImage, 'summary__image', '/build/img/')}
                        </div>
                        <div className="col-md-4">
                            <div className="summary__numbers">
                                <div className="summary__numbers__item summary__numbers__item--goals">
                                    <span className="summary__numbers__item--label">Goals</span> Scored: {this.props.goals}
                                </div>
                                <div className="summary__numbers__item  summary__numbers__item--assists">
                                    <span className="summary__numbers__item--label">Assists in season:</span> {this.props.assists}
                                </div>
                                <div className="summary__numbers__item  summary__numbers__item--yellow-cards">
                                    <span className="summary__numbers__item--label">Yellow cards in Season:</span> {this.props.yellowCards}
                                </div>
                                <div className="summary__numbers__item summary__numbers__item--red-cards">
                                    <span className="summary__numbers__item--label">Red cards in Season:</span> {this.props.redCards}
                                </div>
                                <div className="summary__numbers__item  summary__numbers__item--played-minutes">
                                    <span className="summary__numbers__item--label">Minutes played:</span> {this.props.playedMinutes}
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            {this.getPicture(Helpers.nameToImageShield(this.props.currentClub), 'summary-shield', '/build/svg/')}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});



export default Summary;