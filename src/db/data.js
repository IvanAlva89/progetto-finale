export const relations = {
    products: [
        {
            label: "category",
            collection: "categories",
            primary_key: "id"
        }, 
        {
            label: "seller",
            collection: "sellers",
            primary_key: "id"
        }
    ],
    cart_items: [
        {
            label: "cart",
            collection: "carts",
            primary_key: "id"
        }, 
        {
            label: "product",
            collection: "products",
            primary_key: "id"
        },
        {
            label: "user",
            collection: "users",
            primary_key: "id"
        }
    ],
    order_items: [
        {
            label: "product",
            collection: "products",
            primary_key: "id"
        },
        {
            label: "user",
            collection: "users",
            primary_key: "id"
        }
    ]
}

export default {
    users: [
        {
            id: "1",
            first_name: "Alessandro",
            last_name: "D'Antoni",
            email: "alexdant91@gmail.com",
            password: "1234",
            cart_id: "1",
        },
    ],
    sellers: [
        {
            id: "1",
            first_name: "Giovanni",
            last_name: "Rossi",
            name: "MediaTech",
            email: "mediatech@gmail.com",
            password: "1234",
        }
    ],
    categories: [
        {
            id: "1",
            name: "PC",
        },
        {
            id: "2",
            name: "Smartphone",
        },
        {
            id: "3",
            name: "Tablet",
        },
    ],
    products: [
        {
            id: "1",
            name: "Samsung Galaxy S24",
            price: 625,
            category: "2",
            seller: "1",
            cover_image: "https://www.phoneclick.it/img/catalogo/s24%20black.jpg",
            images: [],
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur."
        },
        {
            id: "2",
            name: "Desktop PC Gaming",
            price: 1200,
            category: "1",
            seller: "1",
            cover_image: "https://p1-ofp.static.pub/fes/cms/2022/12/14/z16zqgqe6i9ceelsp9rjjx777dtrb6720043.png",
            images: [
                "https://p3-ofp.static.pub/fes/cms/2022/12/02/8p3ejedwxmbaliechtzu8zu2d9v7zj058740.png",
                "https://p1-ofp.static.pub/fes/cms/2022/12/02/4l7tuehnri0hq03jcn3pcv16qv7eae774213.png"
            ],
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur."
        },
        {
            id: "3",
            name: "iPad Air 3",
            price: 879,
            category: "3",
            seller: "1",
            cover_image: "https://d2e6ccujb3mkqf.cloudfront.net/729e76d6-d466-410e-96bd-8dca7396e1f6-1_c8639aa3-9434-4b46-99eb-17233a87976c.jpg",
            images: [
                "https://d2e6ccujb3mkqf.cloudfront.net/729e76d6-d466-410e-96bd-8dca7396e1f6-4_59d4a2eb-a91d-4cbb-8ccd-a8ac02d2fd8e.jpg",
                "https://d2e6ccujb3mkqf.cloudfront.net/729e76d6-d466-410e-96bd-8dca7396e1f6-3_c3955bed-4d88-4f89-a9fb-8683c9eddf34.jpg"
            ],
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur."
        },
        {
            id: "4",
            name: "Samsung Galaxy S24 ultra",
            price: 1859,
            category: "2",
            seller: "1",
            cover_image: "https://images-ext-1.discordapp.net/external/8KmHr95CaD0Q8HqP3PGgqlMJVWPj0IRQS58bM9hMx_Y/https/www.tecnosell.com/media/catalog/product/cache/60c31028333b516fd0f8945d994bb7aa/g/r/grey_1.jpg?format=webp&width=629&height=629",
            images: ["https://images.samsung.com/is/image/samsung/assets/global/mkt/smartphones/galaxy-s24-ultra/gallery/galaxy-s24-ultra/S24Ultra-Color-Titanium_Blue_PC.jpg?imbypass=true",
                     "https://images-ext-1.discordapp.net/external/y26S_OGL844oaIlLYjkGR5GWNQieB8TuK6A-MOtjN_E/%3F%24FB_TYPE_A_JPG%24/https/images.samsung.com/is/image/samsung/p6pim/it/2401/feature/it-feature-galaxy-s24-ultra-539595862?format=webp&width=1191&height=670"
            ],
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur."
        },
        {
            id: "5",
            name: "iphone 15",
            price: 979,
            category: "2",
            seller: "1",
            cover_image: "https://cms-images.mmst.eu/hzxov1nxpus5/5oY2jkrSrFQ7Q14xn2yPWq/c9b3ec2044c38ad47890cf040e4150b6/iPhone_15_326x326.jpg?q=80",
            images: ["https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch_AV1?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2L2RJbmltQWhGZkQyVGNjT3IyemNOZWd2S3NaRzcrU0dmYjNHTUFiMnlsWFRocXAvNjVVaCtjTTZGTUNzOU8wNkc5RGRYNnhoUFdnYk5iSlJkSmMrbGk=&traceId=1",
                     "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch_AV2_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2K2ZRS0FSWjRiRDhheVpXa3k1dGZ5YXNCckZqMTMrS3dIUWFPL2dFWXJDTmhNQnJMcnc4RkxJd3ZMc3hKZVVFWHQ5d1RocDlPL1NoWExwV2Rld1hJdlBLTDM4aDlzb3pTZ1laMjJ3a3dFRktnPT0=&traceId=1",
                     "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2K0RJb2VmSm5pbnBEZEZKMHk0andGWlpGQnBBWVp4a3ZSd0Y4NzlDUVE4dUJUU08xVXZOQlVmeWYva2RCcG9vcVY3Njd1NXVCQVFkbkxDd1dhUTR5REFGN29HcklROUFEdzZtbjd5MEtXNzNnPT0=&traceId=1"
            ],
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur."
        },
        {
            id: "6",
            name: "iphone 15 plus",
            price: 1129,
            category: "2",
            seller: "1",
            cover_image: "https://images-ext-1.discordapp.net/external/iJZlHsA5CwB0ryS2DIhJ27ZnRXBeqRp7DyoJLoZWsAs/%3Fv%3D35a9d192/https/assets.swappie.com/cdn-cgi/image/width%3D600%2Cheight%3D600%2Cdpr%3D2%2Cfit%3Dcontain%2Cformat%3Dauto/swappie-iphone-15-plus-blue.png?format=webp&quality=lossless&width=670&height=670",
            images: ["https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-7inch_AV3?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2K2FOMk0rZGJwNEk4T2pBZFRQdHpDU2d2S3NaRzcrU0dmYjNHTUFiMnlsWFRocXAvNjVVaCtjTTZGTUNzOU8wNkg5b3NsbURZRXkycmM1akpTMU9KQnc=&traceId=1",
                    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-7inch_AV1?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2L1I3L1M0QlNtaE9Db2U5UFlybWQ0Smd2S3NaRzcrU0dmYjNHTUFiMnlsWFRocXAvNjVVaCtjTTZGTUNzOU8wNkdlaUZVSjA0eE1MS3ZKOHNlMndTQS8=&traceId=1",
                    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-7inch_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OE52ME9MWitvN2sxcU1HZHdUbkRtOVpGQnBBWVp4a3ZSd0Y4NzlDUVE4dUJUU08xVXZOQlVmeWYva2RCcG9vcVUyNWtnYldLcVJKSmpIN0lMZEhyVFc4UjhxVHhUbWEzbTBPaUdtakc2UzdnPT0=&traceId=1"
            ],
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur."
        },
        {
            id: "7",
            name: "MacBook Air M1",
            price: 949,
            category: "1",
            seller: "2",
            cover_image: "https://images-ext-1.discordapp.net/external/UPyOULobgf3j16EZHuOmgP8NQQ_x1Nmda88a1z15sdQ/%3Fwid%3D1144%26hei%3D1144%26fmt%3Djpeg%26qlt%3D90%26.v%3D1634145607000/https/store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-macbook-air-gold-m1-202010?format=webp&width=670&height=670",
            images: ["https://www.joojea.com/22271-large_default/macbook-air-2020-gold-m1-13-8gb-256gb-ssd.jpg",
                     "https://images-ext-1.discordapp.net/external/yIwIyaYue9QBcjn3ax9cY1l3XZGYFyYdlDET9F9SUWg/%3Fwid%3D1144%26hei%3D1144%26fmt%3Djpeg%26qlt%3D90%26.v%3D1634148570000/https/store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-macbook-air-gold-m1-202010_AV2?format=webp&width=670&height=670"
            ],
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur."
        },
        {
            id: "8",
            name: "HP victus 16",
            price: 1299,
            category: "1",
            seller: "2",
            cover_image:"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_142087612?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
            images: ["https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107381912?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402",
                     "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107381914?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402",
                     "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107381911?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402"
            ],
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur."
        },
        {
            id: "9",
            name: "MICROSOFT Surface Pro 9",
            price: 1329,
            category: "3",
            seller: "1",
            cover_image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_141399987?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
            images: ["https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98750347?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402",
                     "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98750348?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402",
                     "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98750346?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402"
            ],
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur."
        },
        {
            id: "10",
            name: "Lenovo Tab M10",
            price: 139,
            category: "3",
            seller: "1",
            cover_image: "https://p1-ofp.static.pub//fes/cms/2024/05/24/l00v181zmokewobpvy9j8uw8pw9wnl135377.png",
            images: ["https://images-ext-1.discordapp.net/external/Gl3VRYq4mb81zOjoQFR4DSVyo9rc5vZ_AJsnMIa1RWY/https/p4-ofp.static.pub/fes/cms/2023/02/22/6tq47f1v0lxg2bhvbqefq7wgngope9281905.png?format=webp&quality=lossless&width=953&height=536",
                     "https://p2-ofp.static.pub/fes/cms/2023/02/22/9zjdlkplrmk7yazlhb12cpsdg2r0wn183159.png"
            ],
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur."
        },
    ],
    cart_items: [
        {
            id: "1",
            cart: "1",
            product: "2",
            user: "1",
            qnt: 1,
        },
        {
            id: "2",
            cart: "1",
            product: "3",
            user: "1",
            qnt: 1,
        },
    ],
    order_items: [
        {
            id: "1",
            user: "1",
            product: "1",
            qnt: 2,
            created_at: new Date().toLocaleString("it-IT")
        },
        {
            id: "2",
            user: "1",
            product: "2",
            qnt: 2,
            created_at: new Date().toLocaleString("it-IT")
        },
    ]
}