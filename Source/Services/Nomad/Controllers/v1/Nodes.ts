import { Request, Response } from 'express';

export default {
	method: 'all',
	func: async (request: Request, response: Response) => {
		if (request.query && request.query.index && parseInt(request.query.index.toString()) > 1) return;

		return response
			.header({ 'X-Nomad-Index': 7, 'X-Nomad-Knownleader': true, 'X-Nomad-Lastcontact': 0 })
			.status(200)
			.send([
				{
					Address: '64.124.125.5',
					ID: '4a559254-8e70-418d-9900-874458f05c5f',
					Datacenter: 'ark-1773.eu-west',
					Name: 'base3-omv-eu-west.1773.arkcdn-client',
					NodeClass: '',
					Version: '1.0.4',
					Drain: false,
					SchedulingEligibility: 'eligible',
					Status: 'ready',
					StatusDescription: '',
					Drivers: {
						docker: {
							Attributes: {
								'driver.docker.os_type': 'linux',
								'driver.docker': 'true',
								'driver.docker.version': '20.10.6',
								'driver.docker.runtimes': 'io.containerd.runc.v2,io.containerd.runtime.v1.linux,runc',
							},
							Detected: true,
							Healthy: true,
							HealthDescription: 'Healthy',
							UpdateTime: '2021-05-01T00:07:34.959927261Z',
						},
						raw_exec: {
							Attributes: null,
							Detected: false,
							Healthy: false,
							HealthDescription: 'disabled',
							UpdateTime: '2021-05-01T00:07:34.824246116Z',
						},
						exec: {
							Attributes: { 'driver.exec': 'true' },
							Detected: true,
							Healthy: true,
							HealthDescription: 'Healthy',
							UpdateTime: '2021-05-01T00:07:34.824552642Z',
						},
						qemu: {
							Attributes: null,
							Detected: false,
							Healthy: false,
							HealthDescription: '',
							UpdateTime: '2021-05-01T00:07:34.824748542Z',
						},
						java: {
							Attributes: null,
							Detected: false,
							Healthy: false,
							HealthDescription: '',
							UpdateTime: '2021-05-01T00:07:34.825005129Z',
						},
					},
					HostVolumes: null,
					NodeResources: null,
					ReservedResources: null,
					CreateIndex: 7,
					ModifyIndex: 7,
				},
				{
					Address: '64.124.125.3',
					ID: 'fe02d075-5504-4b75-ba72-3193004b2362',
					Datacenter: 'ark-25162.eu-east',
					Name: 'base3-omv-eu-east.25162.arkcdn-client',
					NodeClass: '',
					Version: '1.0.4',
					Drain: false,
					SchedulingEligibility: 'eligible',
					Status: 'ready',
					StatusDescription: '',
					Drivers: {
						docker: {
							Attributes: {
								'driver.docker.os_type': 'linux',
								'driver.docker': 'true',
								'driver.docker.version': '20.10.6',
								'driver.docker.runtimes': 'io.containerd.runc.v2,io.containerd.runtime.v1.linux,runc',
							},
							Detected: true,
							Healthy: true,
							HealthDescription: 'Healthy',
							UpdateTime: '2021-05-01T00:07:34.959927261Z',
						},
						raw_exec: {
							Attributes: null,
							Detected: false,
							Healthy: false,
							HealthDescription: 'disabled',
							UpdateTime: '2021-05-01T00:07:34.824246116Z',
						},
						exec: {
							Attributes: { 'driver.exec': 'true' },
							Detected: true,
							Healthy: true,
							HealthDescription: 'Healthy',
							UpdateTime: '2021-05-01T00:07:34.824552642Z',
						},
						qemu: {
							Attributes: null,
							Detected: false,
							Healthy: false,
							HealthDescription: '',
							UpdateTime: '2021-05-01T00:07:34.824748542Z',
						},
						java: {
							Attributes: null,
							Detected: false,
							Healthy: false,
							HealthDescription: '',
							UpdateTime: '2021-05-01T00:07:34.825005129Z',
						},
					},
					HostVolumes: null,
					NodeResources: null,
					ReservedResources: null,
					CreateIndex: 7,
					ModifyIndex: 7,
				},
				{
					Address: '64.124.125.8',
					ID: 'fe02d075-5504-4b75-ba72-3193004b2362',
					Datacenter: 'ark-6623.eu-east',
					Name: 'base3-omv-eu-east.6623.arkcdn-client',
					NodeClass: '',
					Version: '1.0.4',
					Drain: false,
					SchedulingEligibility: 'eligible',
					Status: 'ready',
					StatusDescription: '',
					Drivers: {
						docker: {
							Attributes: {
								'driver.docker.os_type': 'linux',
								'driver.docker': 'true',
								'driver.docker.version': '20.10.6',
								'driver.docker.runtimes': 'io.containerd.runc.v2,io.containerd.runtime.v1.linux,runc',
							},
							Detected: true,
							Healthy: true,
							HealthDescription: 'Healthy',
							UpdateTime: '2021-05-01T00:07:34.959927261Z',
						},
						raw_exec: {
							Attributes: null,
							Detected: false,
							Healthy: false,
							HealthDescription: 'disabled',
							UpdateTime: '2021-05-01T00:07:34.824246116Z',
						},
						exec: {
							Attributes: { 'driver.exec': 'true' },
							Detected: true,
							Healthy: true,
							HealthDescription: 'Healthy',
							UpdateTime: '2021-05-01T00:07:34.824552642Z',
						},
						qemu: {
							Attributes: null,
							Detected: false,
							Healthy: false,
							HealthDescription: '',
							UpdateTime: '2021-05-01T00:07:34.824748542Z',
						},
						java: {
							Attributes: null,
							Detected: false,
							Healthy: false,
							HealthDescription: '',
							UpdateTime: '2021-05-01T00:07:34.825005129Z',
						},
					},
					HostVolumes: null,
					NodeResources: null,
					ReservedResources: null,
					CreateIndex: 7,
					ModifyIndex: 7,
				},
				{
					Address: '64.124.125.3',
					ID: 'fe02d075-5504-4b75-ba72-3193004b2362',
					Datacenter: 'ark-25162.eu-east',
					Name: 'base3-omv-eu-east.25162.arkcdn-client',
					NodeClass: '',
					Version: '1.0.4',
					Drain: false,
					SchedulingEligibility: 'eligible',
					Status: 'ready',
					StatusDescription: '',
					Drivers: {
						docker: {
							Attributes: {
								'driver.docker.os_type': 'linux',
								'driver.docker': 'true',
								'driver.docker.version': '20.10.6',
								'driver.docker.runtimes': 'io.containerd.runc.v2,io.containerd.runtime.v1.linux,runc',
							},
							Detected: true,
							Healthy: true,
							HealthDescription: 'Healthy',
							UpdateTime: '2021-05-01T00:07:34.959927261Z',
						},
						raw_exec: {
							Attributes: null,
							Detected: false,
							Healthy: false,
							HealthDescription: 'disabled',
							UpdateTime: '2021-05-01T00:07:34.824246116Z',
						},
						exec: {
							Attributes: { 'driver.exec': 'true' },
							Detected: true,
							Healthy: true,
							HealthDescription: 'Healthy',
							UpdateTime: '2021-05-01T00:07:34.824552642Z',
						},
						qemu: {
							Attributes: null,
							Detected: false,
							Healthy: false,
							HealthDescription: '',
							UpdateTime: '2021-05-01T00:07:34.824748542Z',
						},
						java: {
							Attributes: null,
							Detected: false,
							Healthy: false,
							HealthDescription: '',
							UpdateTime: '2021-05-01T00:07:34.825005129Z',
						},
					},
					HostVolumes: null,
					NodeResources: null,
					ReservedResources: null,
					CreateIndex: 7,
					ModifyIndex: 7,
				},
				{
					Address: '64.124.125.8',
					ID: '929cfb56-41c8-4626-a62c-1ec56124d35b',
					Datacenter: 'ark-6623.eu-east',
					Name: 'base3-omv-eu-east.6623.arkcdn-client',
					NodeClass: '',
					Version: '1.0.4',
					Drain: false,
					SchedulingEligibility: 'eligible',
					Status: 'ready',
					StatusDescription: '',
					Drivers: {
						docker: {
							Attributes: {
								'driver.docker.os_type': 'linux',
								'driver.docker': 'true',
								'driver.docker.version': '20.10.6',
								'driver.docker.runtimes': 'io.containerd.runc.v2,io.containerd.runtime.v1.linux,runc',
							},
							Detected: true,
							Healthy: true,
							HealthDescription: 'Healthy',
							UpdateTime: '2021-05-01T00:07:34.959927261Z',
						},
						raw_exec: {
							Attributes: null,
							Detected: false,
							Healthy: false,
							HealthDescription: 'disabled',
							UpdateTime: '2021-05-01T00:07:34.824246116Z',
						},
						exec: {
							Attributes: { 'driver.exec': 'true' },
							Detected: true,
							Healthy: true,
							HealthDescription: 'Healthy',
							UpdateTime: '2021-05-01T00:07:34.824552642Z',
						},
						qemu: {
							Attributes: null,
							Detected: false,
							Healthy: false,
							HealthDescription: '',
							UpdateTime: '2021-05-01T00:07:34.824748542Z',
						},
						java: {
							Attributes: null,
							Detected: false,
							Healthy: false,
							HealthDescription: '',
							UpdateTime: '2021-05-01T00:07:34.825005129Z',
						},
					},
					HostVolumes: null,
					NodeResources: null,
					ReservedResources: null,
					CreateIndex: 7,
					ModifyIndex: 7,
				},
				{
					Address: '64.124.125.3',
					ID: '24b2f838-91c2-4d76-a622-d5a5e0fd47e7',
					Datacenter: 'ark-8231.us-central',
					Name: 'base3-omv-us-central.25162.arkcdn-client',
					NodeClass: '',
					Version: '1.0.4',
					Drain: false,
					SchedulingEligibility: 'eligible',
					Status: 'ready',
					StatusDescription: '',
					Drivers: {
						docker: {
							Attributes: {
								'driver.docker.os_type': 'linux',
								'driver.docker': 'true',
								'driver.docker.version': '20.10.6',
								'driver.docker.runtimes': 'io.containerd.runc.v2,io.containerd.runtime.v1.linux,runc',
							},
							Detected: true,
							Healthy: true,
							HealthDescription: 'Healthy',
							UpdateTime: '2021-05-01T00:07:34.959927261Z',
						},
						raw_exec: {
							Attributes: null,
							Detected: false,
							Healthy: false,
							HealthDescription: 'disabled',
							UpdateTime: '2021-05-01T00:07:34.824246116Z',
						},
						exec: {
							Attributes: { 'driver.exec': 'true' },
							Detected: true,
							Healthy: true,
							HealthDescription: 'Healthy',
							UpdateTime: '2021-05-01T00:07:34.824552642Z',
						},
						qemu: {
							Attributes: null,
							Detected: false,
							Healthy: false,
							HealthDescription: '',
							UpdateTime: '2021-05-01T00:07:34.824748542Z',
						},
						java: {
							Attributes: null,
							Detected: false,
							Healthy: false,
							HealthDescription: '',
							UpdateTime: '2021-05-01T00:07:34.825005129Z',
						},
					},
					HostVolumes: null,
					NodeResources: null,
					ReservedResources: null,
					CreateIndex: 7,
					ModifyIndex: 7,
				},
			]);
	},
};
