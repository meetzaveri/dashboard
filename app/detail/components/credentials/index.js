import React, { Component } from 'react';
import { appbaseService } from '../../../service/AppbaseService';
import PermissionCard from './PermissionCard';
import NewPermission from './NewPermission';

export default class CredentialsPage extends Component {
	constructor(props, context) {
		super(props);
		this.state = {
			info: null
		};
		this.getInfo = this.getInfo.bind(this);
		this.newPermission = this.newPermission.bind(this);
	}

	componentWillMount() {
		this.stopUpdate = false;
		this.initialize(this.props);
	}

	componentWillUnmount() {
		this.stopUpdate = true;
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.appName != this.appName) {
			this.initialize(nextProps);
		}
	}

	initialize(props) {
		this.appName = props.appName;
		this.appId = appbaseService.userInfo.body.apps[this.appName];
		this.getInfo();
	}

	getInfo() {
		this.info = {};
		appbaseService.getPermission(this.appId).then((data) => {
			this.info.permission = data;
			if(!this.stopUpdate) {
				this.setState({ info: this.info });
			}
		});
	}

	newPermission(request) {
		appbaseService.newPermission(this.appId, request).then((data) => {
			this.getInfo();
		});
	}

	renderElement(method) {
		let element = null;
		switch(method) {
			case 'permissions':
				if(this.state.info && this.state.info.permission) {
					element = this.state.info.permission.body.map((permissionInfo, index) => {
						return (
							<PermissionCard 
								appId={this.appId} 
								key={index} 
								permissionInfo={permissionInfo}
								getInfo={this.getInfo}
							/>
						);
					})
				}
			break;
		}
		return element;
	}

	render() {
		return (
			<div className="ad-detail-page ad-dashboard row">
				<header className="ad-detail-page-header col-xs-12">
					<h2 className="ad-detail-page-title">Credentials</h2>
					<aside className="ad-detail-page-header-sidebar">
						<NewPermission newPermission={this.newPermission} />
					</aside>
				</header>
				<main className="ad-detail-page-body col-xs-12">
					<div className="page-body col-xs-12">
						<section className="ad-detail-page-body-card">
							<header className="ad-detail-page-body-card-title with-border">
								Personal Keys
							</header>
							<main className="ad-detail-page-body-card-body row">
								{this.renderElement('permissions')}
							</main>
						</section>
					</div>
				</main>
			</div>
		);
	}
}
