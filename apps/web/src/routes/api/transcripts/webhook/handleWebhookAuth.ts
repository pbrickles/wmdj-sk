export const handleWebhookAuth = (headers: Headers, authValue: string) => {
	const headerAuth = headers.get("authorization");
	if (!headerAuth) {
		return {
			error: "Missing webhook auth header"
		};
	}
	if (headerAuth !== authValue) {
		console.log(headerAuth);
		return {
			error: "Invalid webhook auth header"
		};
	}
	return null;
};
