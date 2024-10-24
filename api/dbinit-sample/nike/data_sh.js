async function getProducts(clientId) {
    return [
        {   // 상품 PC0301
            _id: await nextSeq('product'),
            seller_id: 2,
            price: 139000,
            shippingFees: 3000,
            show: true,
            active: true,
            name: '나이키 에어 포스 1 LV8',
            quantity: 9999,
            buyQuantity: 0,
            mainImages: [
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/NIKE_AIR_FORCE_01.png`,
                    name: 'NIKE_AIR_FORCE_01.png',
                    originalname: 'NIKE_AIR_FORCE_01.png',
                }
            ],
            content: `40여 년 전 처음 출시되었을 때와 마찬가지로 오늘날에도 멋진 AF1은 믿을 수 있는 클래식 아이템입니다. 이 신발은 내구성 좋은 인조 가죽, 편안한 나이키 에어 쿠셔닝, 그립력이 좋은 밑창 덕분에 매일 착용해도 좋습니다. 그리고 메쉬에 오버레이된 견고한 캔버스에 농구에서 영감을 받은 마감을 더해, 코트 밖에서도 빛나는 스타일을 선사합니다.`,
            createdAt: getTime(-41, -60 * 60 * 2),
            updatedAt: getTime(-40, -60 * 15),
            extra: {
                depth: 1,
                size: [200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250],
                color: '서밋 화이트/카키/코코넛 밀크/서밋 화이트',
                styleNo: 'HF6924-100',
                isNew: true,
                isBest: false,
                category: ['PC03', 'PC0301'], // kids > 신발
                gender: 'women',
            },
        },
        {   // 사진 묶음 NIKE_AIR_FORCE_01~08
            _id: await nextSeq('product'),
            seller_id: 2,
            price: 125100,
            shippingFees: 3000,
            show: true,
            active: true,
            name: '나이키 에어 포스 1 LV8',
            quantity: 20,
            buyQuantity: 10,
            mainImages: [
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/NIKE_AIR_FORCE_01.png`,
                    name: 'NIKE_AIR_FORCE_01.png',
                    originalname: 'NIKE_AIR_FORCE_01.png',
                },
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/NIKE_AIR_FORCE_02.png`,
                    name: 'NIKE_AIR_FORCE_02.png',
                    originalname: 'NIKE_AIR_FORCE_02.png',
                },
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/NIKE_AIR_FORCE_03.png`,
                    name: 'NIKE_AIR_FORCE_03.png',
                    originalname: 'NIKE_AIR_FORCE_03.png',
                },
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/NIKE_AIR_FORCE_04.png`,
                    name: 'NIKE_AIR_FORCE_04.png',
                    originalname: 'NIKE_AIR_FORCE_04.png',
                },
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/NIKE_AIR_FORCE_05.png`,
                    name: 'NIKE_AIR_FORCE_05.png',
                    originalname: 'NIKE_AIR_FORCE_05.png',
                },
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/NIKE_AIR_FORCE_06.png`,
                    name: 'NIKE_AIR_FORCE_06.png',
                    originalname: 'NIKE_AIR_FORCE_06.png',
                },
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/NIKE_AIR_FORCE_07.png`,
                    name: 'NIKE_AIR_FORCE_07.png',
                    originalname: 'NIKE_AIR_FORCE_07.png',
                },
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/NIKE_AIR_FORCE_08.png`,
                    name: 'NIKE_AIR_FORCE_08.png',
                    originalname: 'NIKE_AIR_FORCE_08.png',
                }  
            ],
        },
        {   // 상품 PC0302
            _id: await nextSeq('product'),
            seller_id: 2,
            price: 109000,
            shippingFees: 3000,
            show: true,
            active: true,
            name: '테이텀 3',
            quantity: 9999,
            buyQuantity: 0,
            mainImages: [
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/JORDAN_TATUM_3_01.png`,
                    name: 'JORDAN_TATUM_3_01.png',
                    originalname: 'JORDAN_TATUM_3_01.png',
                }
            ],
            content: `경기를 위해 끊임없이 움직이는 사람들을 위해 탄생한 테이텀 3는 경량 디자인으로 발에 꼭 맞는 핏을 제공하기 때문에 가장 수월한 방식으로 경기를 지배할 수 있습니다. 친숙하게 들리시나요? 강력하면서도 유연한 갑피가 빠른 컷 동작과 역동적인 움직임에 필요한 고정력과 신축성을 제공하기 때문에, 챔피언인 테이텀처럼 동작을 자유자재로 전환하는 플레이를 펼칠 수 있습니다. 어떤 압박감도 없이 경기를 즐겨보세요.`,
            createdAt: getTime(-41, -60 * 60 * 2),
            updatedAt: getTime(-40, -60 * 15),
            extra: {
                depth: 1,
                size: [225, 230, 235, 240, 245, 250],
                color: '씨폼/스프루스 아우라/아틱 오렌지/애프리캇 아게이트',
                styleNo: 'HF3136-002',
                isNew: true,
                isBest: false,
                category: ['PC03', 'PC0302'], // kids > 신발
                gender: 'women',
            },
        },
        {   // 사진 묶음 JORDAN_TATUM_3_01~09
            _id: await nextSeq('product'),
            seller_id: 2,
            price: 125100,
            shippingFees: 3000,
            show: true,
            active: true,
            name: '나이키 에어 포스 1 LV8',
            quantity: 20,
            buyQuantity: 10,
            mainImages: [
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/JORDAN_TATUM_3_01.png`,
                    name: 'JORDAN_TATUM_3_01.png',
                    originalname: 'JORDAN_TATUM_3_01.png',
                },
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/JORDAN_TATUM_3_02.png`,
                    name: 'JORDAN_TATUM_3_02.png',
                    originalname: 'JORDAN_TATUM_3_02.png',
                },
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/JORDAN_TATUM_3_03.png`,
                    name: 'JORDAN_TATUM_3_03.png',
                    originalname: 'JORDAN_TATUM_3_03.png',
                },
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/JORDAN_TATUM_3_04.png`,
                    name: 'JORDAN_TATUM_3_04.png',
                    originalname: 'JORDAN_TATUM_3_04.png',
                },
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/JORDAN_TATUM_3_05.png`,
                    name: 'JORDAN_TATUM_3_05.png',
                    originalname: 'JORDAN_TATUM_3_05.png',
                },
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/JORDAN_TATUM_3_06.png`,
                    name: 'JORDAN_TATUM_3_06.png',
                    originalname: 'JORDAN_TATUM_3_06.png',
                },
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/JORDAN_TATUM_3_07.png`,
                    name: 'JORDAN_TATUM_3_07.png',
                    originalname: 'JORDAN_TATUM_3_07.png',
                },
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/JORDAN_TATUM_3_08.png`,
                    name: 'JORDAN_TATUM_3_08.png',
                    originalname: 'JORDAN_TATUM_3_08.png',
                },
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/JORDAN_TATUM_3_09.png`,
                    name: 'JORDAN_TATUM_3_09.png',
                    originalname: 'JORDAN_TATUM_3_09.png',
                }  
            ],
        },
        {   // 상품 PC0303
            _id: await nextSeq('product'),
            seller_id: 2,
            price: 139000,
            shippingFees: 3000,
            show: true,
            active: true,
            name: '에어 조던 4RM',
            quantity: 9999,
            buyQuantity: 0,
            mainImages: [
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/AIR_JORDAN_4RM_01.png`,
                    name: 'AIR_JORDAN_4RM_01.png',
                    originalname: 'AIR_JORDAN_4RM_01.png',
                }
            ],
            content: `온종일 즐겁게 놀려면 튼튼한 신발이 필요합니다. 끊임없이 움직이는 일상을 위해 제작된 이 신발은 편안함과 내구성에 중점을 두고 AJ4의 장점을 재해석했습니다. 맥스 에어가 걸을 때마다 쿠셔닝을 제공하죠. 또한 신발을 감싸는 튼튼하고 유연한 케이지에 갑피의 일부가 어우러진 디자인이 일상 속 놀이에 필요한 견고함을 더합니다.`,
            createdAt: getTime(-41, -60 * 60 * 2),
            updatedAt: getTime(-40, -60 * 15),
            extra: {
                depth: 1,
                size: [225, 230, 235, 240, 245, 250],
                color: '블랙/화이트',
                styleNo: 'FQ7938-004',
                isNew: true,
                isBest: false,
                category: ['PC03', 'PC0303'], // kids > 신발
                gender: 'women',
            },
        },
        {   // 사진 묶음 AIR_JORDAN_4RM_01~010
            _id: await nextSeq('product'),
            seller_id: 2,
            price: 139000,
            shippingFees: 3000,
            show: true,
            active: true,
            name: '에어 조던 4RM',
            quantity: 20,
            buyQuantity: 10,
            mainImages: [
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/AIR_JORDAN_4RM_01.png`,
                    name: 'AIR_JORDAN_4RM_01.png',
                    originalname: 'AIR_JORDAN_4RM_01.png',
                },
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/AIR_JORDAN_4RM_02.png`,
                    name: 'AIR_JORDAN_4RM_02.png',
                    originalname: 'AIR_JORDAN_4RM_02.png',
                },
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/AIR_JORDAN_4RM_03.png`,
                    name: 'AIR_JORDAN_4RM_03.png',
                    originalname: 'AIR_JORDAN_4RM_03.png',
                },
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/AIR_JORDAN_4RM_04.png`,
                    name: 'AIR_JORDAN_4RM_04.png',
                    originalname: 'AIR_JORDAN_4RM_04.png',
                },
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/AIR_JORDAN_4RM_05.png`,
                    name: 'AIR_JORDAN_4RM_05.png',
                    originalname: 'AIR_JORDAN_4RM_05.png',
                },
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/AIR_JORDAN_4RM_06.png`,
                    name: 'AIR_JORDAN_4RM_06.png',
                    originalname: 'AIR_JORDAN_4RM_06.png',
                },
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/AIR_JORDAN_4RM_07.png`,
                    name: 'AIR_JORDAN_4RM_07.png',
                    originalname: 'AIR_JORDAN_4RM_07.png',
                },
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/AIR_JORDAN_4RM_08.png`,
                    name: 'AIR_JORDAN_4RM_08.png',
                    originalname: 'AIR_JORDAN_4RM_08.png',
                },
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/AIR_JORDAN_4RM_09.png`,
                    name: 'AIR_JORDAN_4RM_09.png',
                    originalname: 'AIR_JORDAN_4RM_09.png',
                }, 
                {
                    path: `/api/dbinit-sample/nike/uploadFiles/AIR_JORDAN_4RM_010.png`,
                    name: 'AIR_JORDAN_4RM_010.png',
                    originalname: 'AIR_JORDAN_4RM_010.png',
                }  
            ],
        },
    ];
}
