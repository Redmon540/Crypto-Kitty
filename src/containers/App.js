import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import { setSearchField, requestUsers } from '../actions.js';

const mapStateToProps = state => {
	return {
		searchField: state.searchKitties.searchField,
		kitties: state.requestUsers.users,
		isPending: state.requestUsers.isPending,
		error: state.requestUsers.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestUsers: () => dispatch(requestUsers())
	}
}

class App extends Component {
	componentDidMount() {
		this.props.onRequestUsers();
	}

	render () {
		const { searchField, onSearchChange, kitties, isPending } = this.props;
		const filteredKitties = kitties.filter(kitty => {
			return kitty.username.toLowerCase().includes(searchField.toLowerCase());
		}) 
		return isPending ?
		// if !isPending ?, will display Loading Page
		<h1 className='f1'>Loading Page</h1> : 
		(
			<div className='tc'>
				<h1 className='f1'>My Little Kitties</h1>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList kitties={filteredKitties} />
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);