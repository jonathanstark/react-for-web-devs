import React from 'react';
import Firebase from 'firebase';
import Summary from './Summary';
import Controls from './Controls';
import EntryTable from './EntryTable';
import FoodForm from './FoodForm';
import LoginForm from './LoginForm';
import u from '../helpers';

var App = React.createClass({
    getInitialState: function() {
        return {
            date: u.currentDate(),
            email: '',
            uid: '',
            entries: {}
        }
    },
    authenticateUser: function(credentials) {
        var _this = this;
        var ref = u.getDbRef();
        ref.authWithPassword({
            email    : credentials.email,
            password : credentials.password
        }, function(error, authData) {
            if (error) {
                alert(error);
            } else {
                _this.setState({
                    email: authData.password.email,
                    uid: authData.uid
                }, function() {
                    this.getEntries();
                });
            }
        });
    },
    logout: function() {
        var ref = u.getDbRef();
        ref.unauth();
        this.setState({
            email: '',
            uid: ''
        });
    },
    addEntry(entry) {
        var entries = u.getDbRef('entries');
        entries.child(this.state.uid).child(this.state.date).push(entry);
    },
    deleteEntry: function(key) {
        var entries = u.getDbRef('entries');
        entries.child(this.state.uid).child(this.state.date).child(key).remove();
    },
    getEntries: function() {
        var _this = this;
        var entries = u.getDbRef('entries');
        var entriesForDate = entries.child(this.state.uid).child(this.state.date);
        entriesForDate.on('value', function(data){
            var entriesForDate = data.val() || {};
            _this.setState({'entries': entriesForDate});
        });
    },
    setDate: function(offset) {
        var date = new Date(this.state.date);
        date.setUTCDate(date.getUTCDate() + offset);
        this.state.date = u.storeDate(date);
        this.setState({
            date : this.state.date
        });
        this.getEntries();
    },
    componentDidMount: function() {
        var ref = u.getDbRef();
        var authData = ref.getAuth();
        if (authData) {
            this.setState({
                email: authData.password.email,
                uid: authData.uid
            }, function() {
                this.getEntries();
            });
        }
    },
    render: function() {
        var ref = u.getDbRef();
        var authData = ref.getAuth();
        if (!authData) {
            return (
                <section className="login">
                    <LoginForm authenticateUser={this.authenticateUser} />
                </section>
            )
        } else {
            var currentDate = u.currentDate();
            var currentTime = u.currentTime();
            return (
                <section className="home">
                    <Summary date={this.state.date} entries={this.state.entries} />
                    <Controls setDate={this.setDate} logout={this.logout} />
                    <EntryTable date={this.state.date} entries={this.state.entries} deleteEntry={this.deleteEntry} />
                    <FoodForm date={currentDate} time={currentTime} addEntry={this.addEntry} />
                </section>
            )
        }
    }
});

export default App;