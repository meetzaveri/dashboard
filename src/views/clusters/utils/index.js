import { ACC_API } from '../../../../config';

export function getClusters() {
	return new Promise((resolve, reject) => {
		fetch(`${ACC_API}/v1/clusters`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then((data) => {
				resolve(data.clusters);
			})
			.catch((e) => {
				reject(e);
			});
	});
}

export function getClustersData(clusters) {
	const promises = clusters.map(cluster => new Promise((resolve, reject) => {
			fetch(`${ACC_API}/v1/_status/${cluster.id}`, {
				method: 'GET',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then(res => res.json())
				.then((data) => {
					resolve(data);
				})
				.catch((e) => {
					reject(e);
				});
		}));

	return Promise.all(promises);
}

export function deployCluster(cluster) {
	const body = JSON.stringify(cluster);
	return new Promise((resolve, reject) => {
		fetch(`${ACC_API}/v1/_deploy`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body,
		})
			.then(res => res.json())
			.then((data) => {
				if (data.error) {
					reject(data.error);
				}
				if (data.body && data.body.response_info.failures.length) {
					reject(data.body.response_info.failures);
				}
				resolve();
			})
			.catch((e) => {
				reject(e);
			});
	});
}