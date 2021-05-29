import { BaseURL } from '../../../Common/Client/Roblox.Common.Client/BaseUrl';
import { ApiKeys } from '../../../Common/Client/Roblox.Common.Client/Api/ApiKeys';
import { ServiceClient } from '../../../Http/ServiceClient/Roblox.Http.ServiceClient/Implementation/HttpClient';
import { HttpRequestMethodEnum } from '../../../Http/ServiceClient/Roblox.Http.ServiceClient/Enumeration/HttpRequestMethodEnum';
import { Task } from '../../../../System/Threading/Task';
import { IUser } from '../../../Platform/Membership/Roblox.Platform.Membership/IUser';
import { IUniverse } from '../../../Platform/Universes/Roblox.Platform.Universes/IUniverse';

export class PointsClient {
	/**
	 * This method checks the status of the api service.
	 * @param isRequestSecure Request via a secure Url.
	 * @returns {Task<[Boolean, Number, String]>} Returns a task that describes the status.
	 */
	public static async CheckHealth(isRequestSecure: boolean = true): Task<[Boolean, Number, String, String]> {
		return new Promise<[Boolean, Number, String, String]>(async (resumeFunction) => {
			const CheckHealthUrl = BaseURL.ConstructServicePathFromSubDomainSimple('points.api', 'checkhealth', isRequestSecure);
			const Client = new ServiceClient.HttpClient({
				Url: CheckHealthUrl,
				QueryString: {
					ApiKey: ApiKeys.PointsApi,
				},
				AdditionalHeaders: {},
				Payload: '',
				Method: HttpRequestMethodEnum.GET,
			});
			const [Success, Response] = await Client.ExecuteAsync();
			return resumeFunction([Success, Response.StatusCode, Response.StatusMessage, CheckHealthUrl]);
		});
	}

	/**
	 * Get the alltime points for the given IUser in the given IUniverse.
	 * @param {IUser} user The user to check.
	 * @param {IUniverse} universe The universe to check.
	 * @param {boolean} isRequestSecure Is the request secure
	 * @returns {Task<[Boolean, Number, String]>} Returns a Task the checks if the response was successful or not.
	 */
	public static async GetUserAllTimePoints(
		user: IUser,
		universe: IUniverse,
		isRequestSecure: boolean = true,
	): Task<[Boolean, Number, any, Error]> {
		return new Promise<[Boolean, Number, any, Error]>(async (resumeFunction) => {
			const Url = BaseURL.ConstructServicePathFromSubDomainSimple('points.api', 'v1/GetUserAllTimePoints', isRequestSecure);
			const Payload = {
				universe,
				user,
			};
			const Client = new ServiceClient.HttpClient({
				Url: Url,
				QueryString: {
					ApiKey: ApiKeys.PointsApi,
				},
				AdditionalHeaders: { 'Content-Type': 'application/json' },
				Payload: JSON.stringify(Payload),
				Method: HttpRequestMethodEnum.POST,
				FailedMessage: `Error getting the alltime points for the user ${user.Id} in the universe ${universe.Id}`,
			});
			const [Success, Response, Error] = await Client.ExecuteAsync();
			return resumeFunction([Success, Response.StatusCode, Response.ResponsePayload, Error]);
		});
	}
}
