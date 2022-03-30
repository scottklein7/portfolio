export interface Post {
    _id: string,
    _createdAt: string,
    title: string,
    author: {
        name: string,
        image: string
    },
    // comments: [Comment],
    description: string,
    mainImage: {
        asset: {
            url: string
        },
    }
    slug: {
        current: string
    },
    body: [object]
}

export interface Project {
    _id: string,
    name: string,
    description: string,
    slug: {
        current: string
    },
    image: {
        asset: {
            url: string
        },
    }
    blockContent: [object]
}
