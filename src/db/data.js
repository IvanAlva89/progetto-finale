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
            images: []
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
            ]
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
            ]
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
    ]
}