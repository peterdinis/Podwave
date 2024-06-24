const authConfig = {
    providers: [
        {
            domain: process.env.NEXT_PUBLIC_CONVEX_DOMAIN as unknown as string,
            applicationID: 'convex',
        },
    ],
};

export default authConfig;
