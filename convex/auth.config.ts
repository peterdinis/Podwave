const authConfig = {
    providers: [
        {
            domain: process.env.NEXT_PUBLIC_CONVEX_DOMAIN!,
            applicationID: 'convex',
        },
    ],
};

export default authConfig;
