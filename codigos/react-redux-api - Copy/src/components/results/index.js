import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import getAllResults from '../../redux/actions/getAllResults';

class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.goTo = this.goTo.bind(this);
    }
    componentDidMount() {
		const {
            getAllResults,
			results
        } = this.props;

        getAllResults();
	}
    goTo(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <Page
                results={this.props.results}
                goTo={this.goTo}
            />
        );
    }
}

const mapStateToProps = state => ({
    results: state.results,
});
const mapDispatchToProps = {
    getAllResults,
};
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Results)
);
