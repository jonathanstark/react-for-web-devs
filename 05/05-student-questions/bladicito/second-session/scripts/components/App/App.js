import React from       'react';
import Summary from     '../Summary/Summary';
import EntryTable from  '../EntryTable/EntryTable';
import LineChart from  '../LineChart/LineChart';
import DonutCharts from  '../DonutCharts/DonutCharts';
import Utils from       '../../helpers';
import Entries from     '../../entries';


var App = React.createClass({
    getInitialState: function() {
        return {
            currentSeason       : 'season7',
            nextSeason          : 'season7',
            prevSeason          : 'season5'
        }
    },

    componentWillMount : function () {
        google.charts.load("current", {packages:["corechart"]});

        this.state.seasonData        = Entries[this.state.currentSeason];
        this.state.currentSeasonYear = Entries[this.state.currentSeason].year;
        this.state.mainImage         = Entries[this.state.currentSeason].mainImage;
        this.state.currentClub       = Entries[this.state.currentSeason].club;
        this.state.currentClubCss    = Entries[this.state.currentSeason].club.toLowerCase().replace(' ', '-');


        this.initSummary(this.state.seasonData);
        this.setState({
            mainImage :     this.state.mainImage,
            seasonData:     this.state.seasonData,
            defaultSeason:  this.state.defaultSeason,
            currentSeason:  this.state.currentSeason,
            currentClub:    this.state.currentClub,
            currentClubCss: this.state.currentClubCss
        });

    },

    initSummary : function(seasonData) {
        var assists         = 0,
            goals           = 0,
            yellowCards     = 0,
            redCards        = 0,
            playedMinutes   = 0,
            entries         = seasonData.matches
        ;


        Object.keys(entries).map(function(currentValue) {

            if(typeof(entries[currentValue].assists) !== 'undefined' && entries[currentValue].assists.trim() !== '') {
                assists += parseInt(entries[currentValue].assists)
            }
    
            if(typeof(entries[currentValue].goals) !== 'undefined' && entries[currentValue].goals.trim() !== '') {
                goals += parseInt(entries[currentValue].goals)
            }
    
            if(typeof(entries[currentValue].yellowCard) !== 'undefined' && entries[currentValue].yellowCard.trim() !== '') {
                yellowCards ++;
            }
    
            if(typeof(entries[currentValue].redCards) !== 'undefined' && entries[currentValue].redCards.trim() !== '') {
                redCards ++;
            }
    

    
            if(typeof(entries[currentValue].playedMinutes) !== 'undefined' && entries[currentValue].playedMinutes.trim() !== '') {
                playedMinutes += parseInt(entries[currentValue].playedMinutes)
            }
            
        });

        this.setState({
            assists         : assists,
            goals           : goals,
            yellowCards     : yellowCards,
            redCards        : redCards,
            playedMinutes   : playedMinutes
        });

    },

    componentDidMount: function() {


    },

    updateDataSeason : function(newSeason) {
        this.state.currentSeason        = newSeason;
        this.state.currentSeasonYear    = Entries[this.state.currentSeason].year;
        this.state.seasonData           = Entries[this.state.currentSeason];
        this.state.mainImage            = Entries[this.state.currentSeason].mainImage;
        this.state.currentClub          = Entries[this.state.currentSeason].club;
        this.state.currentClubCss       = Entries[this.state.currentSeason].club.toLowerCase().replace(' ', '-');
        this.initSummary(this.state.seasonData);


        this.setState({
            mainImage           : this.state.mainImage,
            seasonData          : this.state.seasonData,
            defaultSeason       : this.state.defaultSeason,
            currentSeason       : this.state.currentSeason,
            currentClub         : this.state.currentClub,
            currentClubCss      : this.state.currentClubCss,
            currentSeasonYear   : this.state.currentSeasonYear

        });

    },

    updateCharts : function() {
        DonutCharts.startChartGeneral();
        DonutCharts.startChartWithoutPiza();
        DonutCharts.startChartWithPiza();
    },
    


    render: function() {
        var seasonMatchesData = Entries[this.state.currentSeason].matches,
            clubColors        = Utils.getClubColors(this.state.currentClub);



        return (
            <div className="main-claudio-pizarro">
                <Summary goals             = {this.state.goals}
                         assists           = {this.state.assists}
                         yellowCards       = {this.state.yellowCards}
                         redCards          = {this.state.redCards}
                         playedMinutes     = {this.state.playedMinutes}
                         mainImage         = {this.state.mainImage}
                         season            = {this.state.season}
                         clubShieldPicture = {this.state.clubShieldPicture}
                         seasonData        = {this.state.seasonData}
                         currentSeason     = {this.state.currentSeason}
                         currentSeasonYear = {this.state.currentSeasonYear}
                         nextSeason        = {this.state.nextSeason}
                         prevSeason        = {this.state.prevSeason}
                         currentClub       = {this.state.currentClub}
                         currentClubCss    = {this.state.currentClubCss}
                         updateDataSeason  = {this.updateDataSeason}
                />
                <LineChart
                    seasonMatchesData ={seasonMatchesData}
                    currentClub       = {this.state.currentClub}
                    currentClubCss    = {this.state.currentClubCss}
                    currentSeason     = {this.state.currentSeason}
                    currentSeasonYear = {this.state.currentSeasonYear}
                    currentClubColors = {clubColors}
                />
                <DonutCharts
                    seasonMatchesData   = {seasonMatchesData}
                    currentClub         = {this.state.currentClub}
                    currentClubCss      = {this.state.currentClubCss}
                    currentSeasonYear   = {this.state.currentSeasonYear}
                    currentClubColors   = {clubColors}
                />
                <EntryTable seasonMatchesData={seasonMatchesData} currentClub={this.state.currentClub} currentClubCss={this.state.currentClubCss}/>
            </div>
        )
    }
});


export default App;