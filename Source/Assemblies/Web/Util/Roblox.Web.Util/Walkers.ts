import filestream from 'fs';
import path from 'path';

export namespace Walkers {
	export function WalkDirectory(directoryName: string, paths?: string[]) {
		const directory = filestream.readdirSync(directoryName);
		paths = paths || [];

		directory.forEach((directoryOrFile) => {
			const directoryNameV2 = directoryName + '/' + directoryOrFile;
			if (filestream.statSync(directoryNameV2).isDirectory()) {
				paths = WalkDirectory(directoryNameV2, paths);
			} else {
				paths.push(path.join(directoryName, '/', directoryOrFile));
			}
		});

		return paths;
	}

	/**
	 * Walks thru the file until it finds the IController
	 * Returns NULL if none found.
	 */
	export function WalkClassMap<TClass extends any = null>(data: any): TClass {
		if (!(data instanceof Object)) return null;
		const classMap = new Map<string, any>(Object.entries(data));
		let hasFound = false;
		classMap.forEach((newClass) => {
			if (hasFound) return;
			if ((!newClass || !newClass.IsController) && newClass.length !== 0) {
				data = WalkClassMap(newClass);
			} else {
				hasFound = true;
				data = newClass;
			}
		});
		return data;
	}
}
