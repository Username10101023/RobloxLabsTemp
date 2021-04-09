import { Task } from '../../../../Http/Types/Roblox.Http.Types/Task';
import { ApiKeys } from '../../../../Common/Client/Roblox.Common.Client/Api/ApiKeys';
import { BaseURL } from '../../../../Common/Client/Roblox.Common.Client/BaseUrl';
import { ServiceClient } from '../../../../Http/ServiceClient/Roblox.Http.ServiceClient/Implementation/HttpClient';
import { HttpRequestMethodEnum } from '../../../../Http/ServiceClient/Roblox.Http.ServiceClient/Enumeration/HttpRequestMethodEnum';
export namespace GamePersistenceClient {
	/**
	 * Try enroll the current IEntrollments.
	 * @param {Number} universeId The universeId to fetch from.
	 * @param {String} UserAuthToken The Authentication Token for the user being validated.
	 * @param {Boolean} requireSecureUri Should the ApiClient request with a HTTPS Uri
	 * @returns {Task<[Boolean, String, Number]>} Returns a Task to be awaited for response.
	 */
	export async function TryFetchTheDataStoresForThisUniverse(
		universeId: Number,
		UserAuthToken: String,
		requireSecureUri: Boolean,
	): Task<[Boolean, String, Number | null]> {
		return new Promise<[Boolean, String, Number | null]>(async (resumeFunction) => {
			const GamePersistenceGetTheStoresForThisUniverseUrl = `${(requireSecureUri
				? BaseURL.GetSecureBaseURL()
				: BaseURL.GetBaseURL()
			).replace(/www/, 'gamepersistence.api')}/v4/datastores/fetch-this-universe`;
			const postData = { universeId };
			const Client = new ServiceClient.HttpClient({
				Url: GamePersistenceGetTheStoresForThisUniverseUrl,
				QueryString: {
					ApiKey: ApiKeys.GamePersistenceApi,
					'Content-Type': 'application/json',
				},
				AdditionalHeaders: { Cookie: `.ROBLOSECURITY=${UserAuthToken || ''}` },
				Payload: JSON.stringify(postData),
				Method: HttpRequestMethodEnum.POST,
			});
			const [Success, Response] = await Client.execute();
			return resumeFunction([Success, Response.ResponsePayload, Response.StatusCode]);
		});
	}
}
