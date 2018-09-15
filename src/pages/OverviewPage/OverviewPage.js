import React from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FreeUserOverview from './FreeUserOverview';
import PaidUserOverview from './PaidUserOverview';

const OverviewPage = ({ plan }) => {
	if (!plan || plan === 'free') {
		return <FreeUserOverview />;
	}
	return <PaidUserOverview />;
};

OverviewPage.propTypes = {
	plan: PropTypes.string.isRequired,
};
const mapStateToProps = state => ({
	plan: get(state, '$getAppPlan.plan'),
});
export default connect(mapStateToProps)(OverviewPage);
