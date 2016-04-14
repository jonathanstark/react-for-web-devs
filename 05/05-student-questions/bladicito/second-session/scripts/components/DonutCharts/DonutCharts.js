import React from 'react';


var DonutChart = React.createClass({

    componentDidMount : function() {

        var clubStats = this.gamesStats(this.props.seasonMatchesData),
            matchsWithPiza = this.gamesstatsWithPiza(this.props.seasonMatchesData),
            matchesWithoutPiza = this.gamesstatsWithoutPiza(this.props.seasonMatchesData)
        ;

        this.startChartGeneral(clubStats);
        this.startChartWithPiza(matchsWithPiza);
        this.startChartWithoutPiza(matchesWithoutPiza);

    },
    startChartGeneral : function(clubStats) {
        google.charts.setOnLoadCallback(drawChart);
        var _this = this;


        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Won',   clubStats.won],
                ['Lost',  clubStats.lost],
                ['Draw',  clubStats.draw]
            ]);

            var options = {
                title: 'Games in current season for ' + _this.props.currentClub,
                pieHole: 0.4,
                backgroundColor: _this.props.currentClubColors.main,
                legend : {
                    position: 'bottom'
                }
            };

            var chart = new google.visualization.PieChart(document.getElementById('donut-chart-general'));
            chart.draw(data, options);
        }
    },

    gamesStats : function(seasonData) {

        var _this = this,
            result,
            matchesStats = {
                draw: 0,
                lost: 0,
                won:0,
                amountGames: 0
            };

        Object.keys(seasonData).map(function(currentValue) {
            var currentGame = seasonData[currentValue];




            result = currentGame.result.split(':');

            console.log(_this.props.currentClub);

            if (currentGame.home === _this.props.currentClub) {
                if (parseInt(result[0]) > parseInt(result[1])) {
                    matchesStats.won++;
                }
                if (parseInt(result[0]) < parseInt(result[1])) {
                    matchesStats.lost++;

                } if (parseInt(result[0]) === parseInt(result[1])) {
                    matchesStats.draw++;
                }
            }

            if (currentGame.away === _this.props.currentClub) {
                if (parseInt(result[0]) < parseInt(result[1])) {
                    matchesStats.won++;
                }
                if (parseInt(result[0]) > parseInt(result[1])) {
                    matchesStats.lost++;

                } if (parseInt(result[0]) === parseInt(result[1])) {
                    matchesStats.draw++;
                }
            }
            matchesStats.amountGames++;
        });

        console.log(matchesStats);

        return matchesStats;

    },

    gamesstatsWithPiza : function(seasonData) {
        var _this = this,
            result,
            matchesStats = {
                draw: 0,
                lost: 0,
                won:0,
                amountGames: 0
            };

        Object.keys(seasonData).map(function(currentValue) {
            var currentGame = seasonData[currentValue];

            if (currentGame.playedMinutes !== '') {


                result = currentGame.result.split(':');
                if (currentGame.home === _this.props.currentClub) {
                    if (parseInt(result[0]) > parseInt(result[1])) {
                        matchesStats.won++;
                    }
                    if (parseInt(result[0]) < parseInt(result[1])) {
                        matchesStats.lost++;

                    } if (parseInt(result[0]) === parseInt(result[1])) {
                        matchesStats.draw++;
                    }
                }

                if (currentGame.away === _this.props.currentClub) {
                    if (parseInt(result[0]) < parseInt(result[1])) {
                        matchesStats.won++;
                    }
                    if (parseInt(result[0]) > parseInt(result[1])) {
                        matchesStats.lost++;

                    } if (parseInt(result[0]) === parseInt(result[1])) {
                        matchesStats.draw++;
                    }
                }
                matchesStats.amountGames++;
            }
        });

        return matchesStats;

    },

    gamesstatsWithoutPiza : function(seasonData) {
        var _this = this,
            result,
            matchesStats = {
                draw: 0,
                lost: 0,
                won:0,
                amountGames: 0
            };

        Object.keys(seasonData).map(function(currentValue) {
            var currentGame = seasonData[currentValue];

            if (currentGame.playedMinutes === '') {


                result = currentGame.result.split(':');
                if (currentGame.home === _this.props.currentClub) {
                    if (parseInt(result[0]) > parseInt(result[1])) {
                        matchesStats.won++;
                    }
                    if (parseInt(result[0]) < parseInt(result[1])) {
                        matchesStats.lost++;

                    } if (parseInt(result[0]) === parseInt(result[1])) {
                        matchesStats.draw++;
                    }
                }

                if (currentGame.away === _this.props.currentClub) {
                    if (parseInt(result[0]) < parseInt(result[1])) {
                        matchesStats.won++;
                    }
                    if (parseInt(result[0]) > parseInt(result[1])) {
                        matchesStats.lost++;

                    } if (parseInt(result[0]) === parseInt(result[1])) {
                        matchesStats.draw++;
                    }
                }
                matchesStats.amountGames++;
            }
        });

        return matchesStats;

    },


    startChartWithPiza : function(matchesStats) {
        google.charts.setOnLoadCallback(drawChart);
        var _this = this;

        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Won',  matchesStats.won],
                ['Lost', matchesStats.lost],
                ['Draw', matchesStats.draw]
            ]);

            var options = {
                title: 'Season ' + _this.props.currentSeasonYear + ' for ' + _this.props.currentClub + ' with Pizarro on the pitch',
                pieHole: 0.4,
                legend : {
                    position: 'bottom'
                },
                backgroundColor : {
                    stroke: '#f2f2f2',
                    fill: _this.props.currentClubColors.main,
                    strokeWidth: 0
                },
                chartArea: {
                    backgroundColor: {
                        stroke: 'purple',
                        strokeWidth: 10
                    }
                },
                height: 200,

            };

            var chart = new google.visualization.PieChart(document.getElementById('donut-chart-with-piza'));
            chart.draw(data, options);

        }
    },

    startChartWithoutPiza : function(matchesStats) {
        google.charts.setOnLoadCallback(drawChart);
        var _this = this;

        function drawChart() {

            var data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Won',  matchesStats.won],
                ['Lost', matchesStats.lost],
                ['Draw', matchesStats.draw]
            ]);

            var options = {
                title: 'Games in current season for ' + _this.props.currentClub + ' without Pizarro',
                pieHole: 0.4,
                backgroundColor: _this.props.currentClubColors.main,
                legend : {
                    position: 'bottom'
                }
            };

            var chart = new google.visualization.PieChart(document.getElementById('donut-chart-without-piza'));
            chart.draw(data, options);
        }

    },
    

    render: function() {
        return (
            <div className={'component component-donutchart ' + this.props.currentClubCss}>
                <div className="container">
                    <h2>How did Claudio and the team do during season {this.props.currentSeasonYear} ?</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="chart chart__donut" id="donut-chart-general"></div>
                        </div>
                        <div className="col-md-4">
                            <div className="chart chart__donut" id="donut-chart-with-piza"></div>
                        </div>
                        <div className="col-md-4">
                            <div className="chart chart__donut" id="donut-chart-without-piza"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});



export default DonutChart;