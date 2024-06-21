const authConfig = {
    providers: [
        {
            domain: process.env.CONVEX_DOMAIN as unknown as string,
            applicationID: 'convex',
        },
    ],
};

export default authConfig;
