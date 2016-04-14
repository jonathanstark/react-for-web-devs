import React from 'react';
import u from '../helpers';

var FoodForm = React.createClass({
    handleSubmit: function(event) {
        event.preventDefault();

        var credentials = {
            email: this.refs.email.value,
            password: this.refs.password.value
        }; 

        this.props.authenticateUser(credentials);
    },
    render: function() {
        return (
            <div className="add-food-form">
                <form ref="form" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Email</label><br />
                        <input type="email" ref="email" placeholder="bladicito@yahoo.com" />
                    </div>
                    <div>
                        <label>Password</label><br />
                        <input type="password" ref="password" />
                    </div>
                    <div>
                        <input className="button block" type="submit" name="action" value="Save" />
                    </div>
                </form>
            </div>
        )
    }
});

export default FoodForm;