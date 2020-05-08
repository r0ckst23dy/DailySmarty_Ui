import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import {withRouter} from 'react-router-dom';

class SearchBar extends Component {

    handleFormSubmission =function({query}) {
        this.props.onSubmit(query);
    }

    renderInput(field) {
        return <input type="text" placeholder="&#xf002; Search DailySmarty" {...field.input}/>
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmission.bind(this))}>
                <div className="search-bar-wrapper">
                    <Field name="query" component={this.renderInput} />
                    <p>Press return to search</p>                    
                </div>
            </form>

        )
    }
}
SearchBar = reduxForm({
    form: 'SearchBar'
})(SearchBar);

SearchBar = withRouter(SearchBar)

export default SearchBar;