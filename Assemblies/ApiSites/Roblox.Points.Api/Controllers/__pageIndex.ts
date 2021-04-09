/*
	FileName: checkhealth.ts
	Written By: Nikita Nikolaevich Petko
	File Type: Module
	Description: The health page for points, essentially the same as index
			
	All commits will be made on behalf of mfd-co to https://github.com/mfd-core/sitetest4.robloxlabs.com

	***

	Copyright 2006-2021 ROBLOX

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	https://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.

	***
*/

import { Request, Response } from 'express';
import { RobloxLegacy } from '../../../RobloxLegacyWrapper';
import { PointsClient } from '../../../ApiClients/Roblox.Points.Client/Implementation/PointsClient';
import { ICustomError } from '../../../Platform/ErrorModels/Roblox.Platform.ErrorModels/CustomError';
import { Errors } from '../../../Web/Util/Roblox.Web.Util/Errors';

/**
 * This needs to be a controller, because it's checking the status
 */

// TODO: In the future, we should try and validate whether or not the apiService is alive, for services
// For this particular api, ping https://points.api.sitetest4.robloxlabs.com/checkhealth and check if the response is 200 or not
export default {
	method: 'all',
	func: async (request: Request, response: Response) => {
		if (request.method === 'POST' || request.method === 'PUT' || request.method === 'DELETE') {
			let cookie = request.headers.cookie;
			if (cookie === undefined) cookie = '';
			cookie = (cookie as string).split(';').find((AuthToken) => {
				return AuthToken.startsWith(' .ROBLOSECURITY') || AuthToken.startsWith('.ROBLOSECURITY');
			});
			if (cookie) cookie = cookie.split('=')[1];
			if (
				!RobloxLegacy.Api.Helpers.Helpers.Sessions.CreateOrGetXsrfSession(
					cookie,
					request.ip,
					request.headers['x-csrf-token'],
					response,
					false,
				)
			)
				return;
		}
		const [Success, StatusCode, StatusMessage, Url] = await PointsClient.CheckHealth(request.secure);
		if (Success && StatusCode === 200) {
			return response.send({ message: 'OK' });
		}
		const customErrors: ICustomError[] = [
			{
				code: <number>StatusCode,
				message:
					StatusCode === 503
						? StatusMessage.toString()
						: `Error checking health for Roblox.Points.Service:\r\n   \tStatus Code: ${StatusMessage} (${
								StatusCode || 'None'
						  })\r\n   \tUrl: ${Url}\r\n   \tResponse Machine Id: None`,
			},
		];
		return Errors.RespondWithCustomErrors(<number>StatusCode || 503, customErrors, response, true);
	},
};
