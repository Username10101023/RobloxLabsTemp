import { Response } from 'express';
import { MetricsType } from '../../../../ApiSites/Roblox.Metrics.Api/Enumeration/MetricsType';
import { MeasurementRequest } from '../../../../ApiSites/Roblox.Metrics.Api/MeasurementRequest';
import { Convert } from '../../../../System/Convert';
import { CountersClientV2 } from '../../../ApiClients/Roblox.Counters.Client/Implementation/CountersClient';
import { Task } from '../../../../System/Threading/Task';
import { SanitizeData } from '../../Parsers/Roblox.Web.Parsers/SanitizeData';
import { ApiEmptyResponseModel } from '../../WebAPI/ApiEmptyResponseModel';

export class MetricsRequestProcessor {
	public async SendMeasurement(request: MeasurementRequest, response?: Response<ApiEmptyResponseModel>) {
		const featureName = SanitizeData(request.featureName) || 'UnknownFeature';
		const measureName = SanitizeData(request.measureName) || 'UnknownMeasurement';
		const value = parseFloat(SanitizeData(request.value)) || 1;
		const excludeCountry = Convert.ToBoolean(request.excludeCountry, false);
		const metricsType = MetricsType[SanitizeData(request.metricsType)] || MetricsType.Sequence;

		const key = `${featureName}_${measureName}${!excludeCountry ? '_US' : ''}`;

		switch (metricsType) {
			case MetricsType.Counter:
				await CountersClientV2.IncrementCounter(key, value);
				break;
			case MetricsType.Sequence:
				await CountersClientV2.BatchAddToSequences([{ Key: key, Value: value }]);
				break;
		}

		return response ? response.send({}) : null;
	}

	public async BatchSendMeasurements(request: MeasurementRequest[]): Task<void> {
		return new Promise((resumeFunction, errorFunction) => {
			request.forEach(async (measurement, index) => {
				if (index === request.length + 1) {
					resumeFunction();
					return false;
				}
				try {
					await this.SendMeasurement(measurement, null);
				} catch (e) {
					errorFunction(e);
					return;
				}
				return;
			});
		});
	}
}
