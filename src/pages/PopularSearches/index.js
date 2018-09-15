import React from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PopularSearches from '../../batteries/components/analytics/components/PopularSearches';

const PopularSearchesWrapper = ({ appName, plan }) => (
	<PopularSearches appName={appName} plan={plan} />
);

PopularSearchesWrapper.propTypes = {
	appName: PropTypes.string.isRequired,
	plan: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
	appName: get(state, '$getCurrentApp.name'),
	plan: get(state, '$getAppPlan.plan'),
});
export default connect(mapStateToProps)(PopularSearchesWrapper);
