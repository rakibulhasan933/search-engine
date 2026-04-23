export type BlogAuthor = {
    name?: string;
    title?: string;
    avatar?: string;
};

export type HomepageCategoryInfo = {
    name: string;
    slug: string;
};

export type HomepagePostItem = {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    publishedDate: string;
    readTime: string;
    category: string;
    categoryId: string | null;
    categories?: HomepageCategoryInfo | null;
    image: string;
    author: BlogAuthor | null;
};

export type HomepageWebinarItem = {
    id: string;
    title: string;
    description: string;
    webinarDate: string;
    webinarTime: string;
    category: string;
    categoryId?: string | null;
    categories?: HomepageCategoryInfo | null;
    status: string;
    image: string;
    speaker: {
        name?: string;
        title?: string;
    } | null;
};

export type HomepagePayload = {
    hero: {
        label: string;
        title: string;
        description: string;
        image: string;
        categories: HomepageCategoryInfo;
        slug: string;
        author: {
            name: string;
            role: string;
            readTime: string;
            avatar: string;
        };
    };
    actionableStrategies: {
        categories: HomepageCategoryInfo;
        items: Array<{
            title: string;
            description: string;
            date: string;
            read: string;
            slug: string;
            image: string;
        }>;
    };
    webinars: {
        title: string;
        items: Array<{
            id: string;
            title: string;
            description: string;
            date: string;
            time: string;
            duration: string;
            attendees: number;
            categories: HomepageCategoryInfo;
            speaker: {
                name: string;
                title: string;
            };
            image: string;
        }>;
    };
    contentSections: Array<{
        categories: HomepageCategoryInfo;
        articles: Array<{
            title: string;
            slug: string;
            date: string;
            description: string;
            image: string;
            categories: HomepageCategoryInfo;
        }>;
        sidebar: Array<{
            name: string;
            title: string;
            label: string;
            image: string;
            slug: string;
        }>;
    }>;
};

export type HomepageBuilderConfig = {
    heroPostId: string | null;
    actionableCategoryId: string | null;
    actionablePostIds: string[];
    webinarIds: string[];
    contentSections: Array<{
        category: string;
        categoryId: string;
        articlePostId: string | null;
        sidebarPostId: string | null;
    }>;
};
