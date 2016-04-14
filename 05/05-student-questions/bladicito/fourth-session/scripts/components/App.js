import React from 'react';
import Firebase from 'firebase'
import Summary from './Summary';
import Controls from './Controls';
import EntryTable from './EntryTable';
import FoodForm from './FoodForm';
import LoginForm from './LoginForm';
import u from '../helpers';

var App = React.createClass({
    getInitialState: function() {
        return {
            date: '',
            entries: {},
            email:''
        }
    },

    authenticaUser : function(credentials) {

        var ref = u.getDbRef();
        var that = this;
        ref.authWithPassword({
            email: credentials.email,
            password: credentials.password
        }, function(error, authData) {
            if (error) {
                alert('error');
            } else {
                that.setState({
                    email: credentials.email
                }, function() {
                    that.getEntries();
                });
            }
        });
    },

    logout: function() {
        var ref = u.getDbRef();

        ref.unauth();
        this.state.email = '';
        this.setState({
            email: '',
            uid: ''
        });
    },



    addEntry(entry) {
        var entries = u.getDbRef('entries');
        entries.child(u.safeEmail(this.state.email)).child(this.state.date).push(entry);

    },
    deleteEntry: function(key) {
        var entry = u.getDbRef('entries');
        entry.child(this.state.email).child(this.state.date).child(key).remove();

    },

    setDate: function(offset) {
        var date          = new Date(this.state.date),
            newDate       = date.setUTCDate(date.getUTCDate() + offset),
            formattedDate = u.storeDate(new Date(newDate))
        ;

        this.state.date = formattedDate;
        this.setState({
            date: this.state.date
        });
    },

    getEntries : function() {
        var today = u.currentDate();
        this.state.date = today;
        this.setState({
            date: today
        });

        if(!this.state.email) {
            return;
        }

        var entries           = u.getDbRef('entries');
        var entriesForDate  = entries.child(u.safeEmail(this.state.email)).child(this.state.date);

        var that  = this;

        entriesForDate.on('value', function(data){
            that.setState({
                entries: data.val()
            });
        });

    },
    componentWillUpdate: function() {

    },
    componentDidMount: function() {

        var ref = u.getDbRef();
        var that = this;

        var authData = ref.getAuth();

        if(authData) {
            this.setState({
                email: authData.password.email,
                uid: authData.uid
            }, function() {
                that.getEntries();

            });
        }
    },
    render: function() {
        var currentDate = u.currentDate();
        var currentTime = u.currentTime();

        if(this.state.email ==='') {
            return (
                <div>
                    <LoginForm authenticateUser={this.authenticaUser}></LoginForm>
                </div>
            );

        } else {


        }

        return (
            <section className="home">
                <Summary    date={this.state.date} entries={this.state.entries} />
                <Controls   setDate={this.setDate} />
                <EntryTable date={this.state.date} entries={this.state.entries} deleteEntry={this.deleteEntry} />
                <FoodForm   date={currentDate} time={currentTime} addEntry={this.addEntry} />
            </section>
        )
    }
});

export default App;