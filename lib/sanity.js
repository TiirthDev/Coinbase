import sanityClient from "@sanity/client";

export const client = sanityClient({
    projectId: '5e4mdjzc',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skNCKfj1AnFjsuDMQH2is5PVgZm7qKdUmysTARpzDpUeu9ogAbwC8cZU30mxscGXznLLW4UXbaGUsnD58dGA2typLuPQj9y0wYGoieDo8UTA9XhV6oSVIlaaFYXs7reItOOgdS5lb4XiUuylof02c42LCb5lfomDpN2hkUlb3hR5aV8smV79',
    useCDN: false
})