import { User } from '../Assemblies/Platform/Membership/Roblox.Platform.Membership/User';

(async () => {
	const user = await User.Get(2);
	console.log(user);
	const userByCookie = await User.GetByCookie('TEST');
	console.log(userByCookie);
})();