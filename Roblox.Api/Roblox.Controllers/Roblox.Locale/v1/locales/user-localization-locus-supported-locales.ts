/*
	FileName: LoadPlaceInfo.ashx.ts
	Written By: Nikita Nikolaevich Petko
	File Type: Module
	Description: Load Place info script
			
	All commits will be made on behalf of mfd-co to https://github.com/mfd-core/sitetest4.robloxlabs.com

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

export default {
	method: 'all',
	func: (_req, res): void => {
		return res.send({
			signupAndLogin: {
				id: 1,
				locale: 'en_us',
				name: 'English(US)',
				nativeName: 'English',
				language: { id: 41, name: 'English', nativeName: 'English', languageCode: 'en' },
			},
			generalExperience: {
				id: 1,
				locale: 'en_us',
				name: 'English(US)',
				nativeName: 'English',
				language: { id: 41, name: 'English', nativeName: 'English', languageCode: 'en' },
			},
			ugc: {
				id: 1,
				locale: 'en_us',
				name: 'English(US)',
				nativeName: 'English',
				language: { id: 41, name: 'English', nativeName: 'English', languageCode: 'en' },
			},
		});
	},
};
