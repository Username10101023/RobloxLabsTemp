/*
	FileName: loginV2.ts
	Written By: Nikita Nikolaevich Petko
	File Type: Module
	Description: https://api.sitetest1.mfdlabs.com/auth/v2/login,
				 deprecated for https://www.sitetest1.mfdlabs.com/Authorization/Login.fxhx

	All commits will be made on behalf of mfd-co to https://github.com/mfd-core/mfdlabs.com

	***

	Copyright 2015-2020 MFD

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

import filestream from 'fs';
import crypto from 'crypto';
import { _dirname } from '../../modules/constants/directories';

/**
 * @deprecated
 * */
export default {
	dir: '/auth/v2/login',
	method: 'ALL',
	func: (
		request: {
			method: 'POST' | 'OPTIONS';
			protocol: string;
			body: { [x: string]: any; username: any; password: any };
			headers: { [x: string]: string };
		},
		response: {
			status: (
				arg0: number,
			) => {
				(): any;
				new (): any;
				send: { (arg0: { code: number; message: string; userfacingmessage?: string }): any; new (): any };
				cookie: {
					(arg0: string, arg1: string, arg2: { domain: string; expires: Date; httpOnly: boolean }): {
						send: (arg3: any) => void;
					};
					new (): any;
				};
			};
		},
	) => {
		const settings = JSON.parse(filestream.readFileSync(_dirname + '\\global\\settings.json', 'ascii'));
		if (!settings['useAuthorizationV2'])
			return response
				.status(503)
				.send({ code: 503, message: 'The server cannot handle the request (because it is overloaded or down for maintenance)' });
		if (request.method === 'OPTIONS') return response.status(200).send({ code: 200, message: '' });
		if (request.protocol !== 'https') return response.status(403).send({ code: 403, message: 'HTTPS Required.' });
		if (request.method !== 'POST')
			return response.status(405).send({
				code: 405,
				message: `The requested resource does not support http method '${request.method}.'`,
				userfacingmessage: 'Something went wrong.',
			});
		const data = JSON.parse(filestream.readFileSync(_dirname + '/lib/env.json', { encoding: 'utf-8' }));
		if (
			JSON.stringify(request.body) === '{}' ||
			JSON.stringify(request.body) === '' ||
			request.body === null ||
			request.body === undefined
		)
			return response.status(400).send({ code: 400, message: 'Body was null.', userfacingmessage: 'Something went wrong.' });
		if (request.headers['content-type'] !== 'application/json')
			return response.status(400).send({
				code: 400,
				message: 'Request body was given but no/incorrect Content-Type was given.',
				userfacingmessage: 'Something went wrong.',
			});

		const username = request.body.username;
		const password = request.body.password;
		if (!username || !password)
			return response.status(400).send({
				code: 400,
				message: 'The body provided was invalid.',
				userfacingmessage: "A required credential wasn't supplied.",
			});
		let user: { username: string; password: string; secret: object; userId: string; sessionId: string };
		for (const authKey of Object.keys(data.userIds)) {
			if (authKey === '0' || authKey === undefined) continue;
			if (data.userIds[authKey].username !== request.body['username'])
				return response.status(404).send({
					code: 404,
					message: 'User not found.',
					userfacingmessage: 'Incorrect username or password.',
				});
			else user = data.userIds[authKey];
			break;
		}
		if (password !== user.password)
			return response.status(401).send({
				code: 401,
				message: 'Authorization has been denied for this request.',
				userfacingmessage: 'Incorrect username or password',
			});
		const authId = crypto.createHash('sha256').update(crypto.randomBytes(100)).digest('hex');
		for (const aid of Object.keys(data['userIds'])) {
			if (aid === user.userId && data['userIds'][aid].loggedOn !== true) {
				console.log(true);
				data['userIds'][aid].loggedOn = true;
				break;
			}
		}

		user['sessionId'] = authId;
		filestream.writeFile(_dirname + '/lib/env.json', JSON.stringify(data), () => {
			response
				.status(200)
				.cookie('authId', authId, {
					domain: '.sitetest1.mfdlabs.com',
					expires: new Date('2050'),
					httpOnly: false,
				})
				.send({
					success: true,
					message: 'Success',
				});
		});
	},
};
