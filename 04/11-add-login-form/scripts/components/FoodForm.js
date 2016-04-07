import React from 'react';
import u from '../helpers';

var FoodForm = React.createClass({
    handleSubmit: function(event) {
        event.preventDefault();
        var entry = {
            description: this.refs.description.value,
            calories: parseInt(this.refs.calories.value),
            date: this.refs.date.value,
            time: this.refs.time.value,
            type: 'Food'
        };
        this.props.addEntry(entry);
        this.refs.form.reset();
    },
    render: function() {
        return (
            <div className="add-food-form">
                <form ref="form" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Description</label><br />
                        <input type="text" ref="description" placeholder="e.g., 2 slices of toast" />
                    </div>
                    <div>
                        <label>Calories</label><br />
                        <input type="number" ref="calories" placeholder="e.g., 220" pattern="[0-9]*" />
                    </div>
                    <div>
                        <label>Date</label><br />
                        <input type="date" ref="date" defaultValue={this.props.date} />
                    </div>
                    <div>
                        <label>Time</label><br />
                        <input type="time" ref="time" step="1" defaultValue={this.props.time} />
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