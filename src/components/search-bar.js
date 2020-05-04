import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';

class SearchBar extends Component {

    handleFormSubmission =function({query}) {
        console.log("trying handle form submit query ", query);
        
    }

    renderInput(field) {
        return <input type="text" placeholder="Search DailySmarty" {...field.input}/>
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmission.bind(this))}>
                <Field name="query" component={this.renderInput} />
            </form>

        )
    }
}
SearchBar = reduxForm({
    form: 'SearchBar'
})(SearchBar);

export default SearchBar;