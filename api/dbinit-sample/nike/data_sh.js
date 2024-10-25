async function getProducts(clientId) {
    return [
        {   // 상품 PC0301
            _id: await nextSeq('product'),
            seller_id: 2,
            price: 139000, // 1
            show: true,
            active: true,
            name: '나이키 에어 포스 1 LV8', // 1
            quantity: 9999,
            buyQuantity: 0,
            mainImages: [
                {
                    path: `/files/${clientId}/NIKE_AIR_FORCE_01.png`,
                    name: 'NIKE_AIR_FORCE_01.png',
                    originalname: 'NIKE_AIR_FORCE_01.png',
                },
                {
                    path: `/files/${clientId}/NIKE_AIR_FORCE_02.png`,
                    name: 'NIKE_AIR_FORCE_02.png',
                    originalname: 'NIKE_AIR_FORCE_02.png',
                },
                {
                    path: `/files/${clientId}/NIKE_AIR_FORCE_03.png`,
                    name: 'NIKE_AIR_FORCE_03.png',
                    originalname: 'NIKE_AIR_FORCE_03.png',
                },
                {
                    path: `/files/${clientId}/NIKE_AIR_FORCE_04.png`,
                    name: 'NIKE_AIR_FORCE_04.png',
                    originalname: 'NIKE_AIR_FORCE_04.png',
                },
                {
                    path: `/files/${clientId}/NIKE_AIR_FORCE_05.png`,
                    name: 'NIKE_AIR_FORCE_05.png',
                    originalname: 'NIKE_AIR_FORCE_05.png',
                },
                {
                    path: `/files/${clientId}/NIKE_AIR_FORCE_06.png`,
                    name: 'NIKE_AIR_FORCE_06.png',
                    originalname: 'NIKE_AIR_FORCE_06.png',
                },
                {
                    path: `/files/${clientId}/NIKE_AIR_FORCE_07.png`,
                    name: 'NIKE_AIR_FORCE_07.png',
                    originalname: 'NIKE_AIR_FORCE_07.png',
                },
                {
                    path: `/files/${clientId}/NIKE_AIR_FORCE_08.png`,
                    name: 'NIKE_AIR_FORCE_08.png',
                    originalname: 'NIKE_AIR_FORCE_08.png',
                }  
            ],
            content: `40여 년 전 처음 출시되었을 때와 마찬가지로 오늘날에도 멋진 AF1은 믿을 수 있는 클래식 아이템입니다. 이 신발은 내구성 좋은 인조 가죽, 편안한 나이키 에어 쿠셔닝, 그립력이 좋은 밑창 덕분에 매일 착용해도 좋습니다. 그리고 메쉬에 오버레이된 견고한 캔버스에 농구에서 영감을 받은 마감을 더해, 코트 밖에서도 빛나는 스타일을 선사합니다.`,
            createdAt: getTime(-41, -60 * 60 * 2),
            updatedAt: getTime(-40, -60 * 15),
            extra: {
                isNew: true,
                isBest: false,
                category: ['PC03', 'PC0301'], // 1
                size: [200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250], // 1
                color: '서밋 화이트/카키/코코넛 밀크/서밋 화이트', // 1
                styleNo: 'HF6924-100', // 1
                gender: 'kids',
            },
        },
        {   // 상품 PC0302
            _id: await nextSeq('product'),
            seller_id: 2,
            price: 109000,  //1
            show: true,
            active: true,
            name: '테이텀 3',   //1
            quantity: 9999,
            buyQuantity: 0,
            mainImages: [
                {
                    path: `/files/${clientId}/JORDAN_TATUM_3_01.png`,
                    name: 'JORDAN_TATUM_3_01.png',
                    originalname: 'JORDAN_TATUM_3_01.png',
                },
                {
                    path: `/files/${clientId}/JORDAN_TATUM_3_02.png`,
                    name: 'JORDAN_TATUM_3_02.png',
                    originalname: 'JORDAN_TATUM_3_02.png',
                },
                {
                    path: `/files/${clientId}/JORDAN_TATUM_3_03.png`,
                    name: 'JORDAN_TATUM_3_03.png',
                    originalname: 'JORDAN_TATUM_3_03.png',
                },
                {
                    path: `/files/${clientId}/JORDAN_TATUM_3_04.png`,
                    name: 'JORDAN_TATUM_3_04.png',
                    originalname: 'JORDAN_TATUM_3_04.png',
                },
                {
                    path: `/files/${clientId}/JORDAN_TATUM_3_05.png`,
                    name: 'JORDAN_TATUM_3_05.png',
                    originalname: 'JORDAN_TATUM_3_05.png',
                },
                {
                    path: `/files/${clientId}/JORDAN_TATUM_3_06.png`,
                    name: 'JORDAN_TATUM_3_06.png',
                    originalname: 'JORDAN_TATUM_3_06.png',
                },
                {
                    path: `/files/${clientId}/JORDAN_TATUM_3_07.png`,
                    name: 'JORDAN_TATUM_3_07.png',
                    originalname: 'JORDAN_TATUM_3_07.png',
                },
                {
                    path: `/files/${clientId}/JORDAN_TATUM_3_08.png`,
                    name: 'JORDAN_TATUM_3_08.png',
                    originalname: 'JORDAN_TATUM_3_08.png',
                },
                {
                    path: `/files/${clientId}/JORDAN_TATUM_3_09.png`,
                    name: 'JORDAN_TATUM_3_09.png',
                    originalname: 'JORDAN_TATUM_3_09.png',
                }
            ],
            content: `경기를 위해 끊임없이 움직이는 사람들을 위해 탄생한 테이텀 3는 경량 디자인으로 발에 꼭 맞는 핏을 제공하기 때문에 가장 수월한 방식으로 경기를 지배할 수 있습니다. 친숙하게 들리시나요? 강력하면서도 유연한 갑피가 빠른 컷 동작과 역동적인 움직임에 필요한 고정력과 신축성을 제공하기 때문에, 챔피언인 테이텀처럼 동작을 자유자재로 전환하는 플레이를 펼칠 수 있습니다. 어떤 압박감도 없이 경기를 즐겨보세요.`,
            createdAt: getTime(-41, -60 * 60 * 2),
            updatedAt: getTime(-40, -60 * 15),
            extra: {
                isNew: true,
                isBest: false,
                category: ['PC03', 'PC0302'], // 1
                size: [225, 230, 235, 240, 245, 250], // 1
                color: '씨폼/스프루스 아우라/아틱 오렌지/애프리캇 아게이트', // 1
                styleNo: 'HF3136-002', // 1
                gender: 'kids',
            },
        },
        {   // 상품 PC0303
            _id: await nextSeq('product'),
            seller_id: 2,
            price: 139000,  //1
            show: true,
            active: true,
            name: '에어 조던 4RM',  //1
            quantity: 9999,
            buyQuantity: 0,
            mainImages: [
                {
                    path: `/files/${clientId}/AIR_JORDAN_4RM_A_01.png`,
                    name: 'AIR_JORDAN_4RM_A_01.png',
                    originalname: 'AIR_JORDAN_4RM_A_01.png',
                }
            ],
            content: `온종일 즐겁게 놀려면 튼튼한 신발이 필요합니다. 끊임없이 움직이는 일상을 위해 제작된 이 신발은 편안함과 내구성에 중점을 두고 AJ4의 장점을 재해석했습니다. 맥스 에어가 걸을 때마다 쿠셔닝을 제공하죠. 또한 신발을 감싸는 튼튼하고 유연한 케이지에 갑피의 일부가 어우러진 디자인이 일상 속 놀이에 필요한 견고함을 더합니다.`,
            createdAt: getTime(-41, -60 * 60 * 2),
            updatedAt: getTime(-40, -60 * 15),
            extra: {
                depth:1,
                isNew: true,
                isBest: false,
                category: ['PC03', 'PC0303'], //1
                gender: 'kids',
            },
        },
        {   // 상품 PC0303_A
            _id: await nextSeq('product'),
            seller_id: 2,
            price: 139000,  //1
            show: true,
            active: true,
            name: '에어 조던 4RM', //1
            quantity: 9999,
            buyQuantity: 0,
            mainImages: [
                {
                    path: `/files/${clientId}/AIR_JORDAN_4RM_A_01.png`,
                    name: 'AIR_JORDAN_4RM_A_01.png',
                    originalname: 'AIR_JORDAN_4RM_A_01.png',
                },
                {
                    path: `/files/${clientId}/AIR_JORDAN_4RM_A_02.png`,
                    name: 'AIR_JORDAN_4RM_A_02,png',
                    originalname: 'AIR_JORDAN_4RM_A_02.png',
                },
                {
                    path: `/files/${clientId}/AIR_JORDAN_4RM_A_03.png`,
                    name: 'AIR_JORDAN_4RM_A_03.png',
                    originalname: 'AIR_JORDAN_4RM_A_03.png',
                },
                {
                    path: `/files/${clientId}/AIR_JORDAN_4RM_A_04.png`,
                    name: 'AIR_JORDAN_4RM_A_04.png',
                    originalname: 'AIR_JORDAN_4RM_A_04.png',
                },
                {
                    path: `/files/${clientId}/AIR_JORDAN_4RM_A_05.png`,
                    name: 'AIR_JORDAN_4RM_A_05.png',
                    originalname: 'AIR_JORDAN_4RM_A_05.png',
                },
                {
                    path: `/files/${clientId}/AIR_JORDAN_4RM_A_06.png`,
                    name: 'AIR_JORDAN_4RM_A_06.png',
                    originalname: 'AIR_JORDAN_4RM_A_06.png',
                },
                {
                    path: `/files/${clientId}/AIR_JORDAN_4RM_A_07.png`,
                    name: 'AIR_JORDAN_4RM_A_07.png',
                    originalname: 'AIR_JORDAN_4RM_A_07.png',
                },
                {
                    path: `/files/${clientId}/AIR_JORDAN_4RM_A_08.png`,
                    name: 'AIR_JORDAN_4RM_A_08.png',
                    originalname: 'AIR_JORDAN_4RM_A_08.png',
                },
                {
                    path: `/files/${clientId}/AIR_JORDAN_4RM_A_09.png`,
                    name: 'AIR_JORDAN_4RM_A_09.png',
                    originalname: 'AIR_JORDAN_4RM_A_09.png',
                }, 
                {
                    path: `/files/${clientId}/AIR_JORDAN_4RM_A_010.png`,
                    name: 'AIR_JORDAN_4RM_A_010.png',
                    originalname: 'AIR_JORDAN_4RM_A_010.png',
                } 
            ],
            content: `에어 조던 4RM 블랙/화이트`,
            createdAt: getTime(-41, -60 * 60 * 2),
            updatedAt: getTime(-40, -60 * 15),
            extra: {
                depth: 2,
                parent: 1,
                size: [225, 230, 235, 240, 245, 250], // 1
                color: '블랙/화이트', // 1
                styleNo: 'FQ7938-004', // 1
            },
        },
        {   // 상품 PC0303_B
            _id: await nextSeq('product'),
            seller_id: 2,
            price: 139000,  //1
            show: true,
            active: true,
            name: '에어 조던 4RM', //1
            quantity: 9999,
            buyQuantity: 0,
            mainImages: [
                {
                    path: `/files/${clientId}/AIR_JORDAN_4RM_B_01.png`,
                    name: 'AIR_JORDAN_4RM_B_01.png',
                    originalname: 'AIR_JORDAN_4RM_B_01.png',
                },
                {
                    path: `/files/${clientId}/AIR_JORDAN_4RM_B_02.png`,
                    name: 'AIR_JORDAN_4RM_B_02.png',
                    originalname: 'AIR_JORDAN_4RM_B_02.png',
                },
                {
                    path: `/files/${clientId}/AIR_JORDAN_4RM_B_03.png`,
                    name: 'AIR_JORDAN_4RM_B_03.png',
                    originalname: 'AIR_JORDAN_4RM_B_03.png',
                },
                {
                    path: `/files/${clientId}/AIR_JORDAN_4RM_B_04.png`,
                    name: 'AIR_JORDAN_4RM_B_04.png',
                    originalname: 'AIR_JORDAN_4RM_B_04.png',
                },
                {
                    path: `/files/${clientId}/AIR_JORDAN_4RM_B_05.png`,
                    name: 'AIR_JORDAN_4RM_B_05.png',
                    originalname: 'AIR_JORDAN_4RM_B_05.png',
                },
                {
                    path: `/files/${clientId}/AIR_JORDAN_4RM_B_06.png`,
                    name: 'AIR_JORDAN_4RM_B_06.png',
                    originalname: 'AIR_JORDAN_4RM_B_06.png',
                },
                {
                    path: `/files/${clientId}/AIR_JORDAN_4RM_B_07.png`,
                    name: 'AIR_JORDAN_4RM_B_07.png',
                    originalname: 'AIR_JORDAN_4RM_B_07.png',
                },
                {
                    path: `/files/${clientId}/AIR_JORDAN_4RM_B_08.png`,
                    name: 'AIR_JORDAN_4RM_B_08.png',
                    originalname: 'AIR_JORDAN_4RM_B_08.png',
                },
                {
                    path: `/files/${clientId}/AIR_JORDAN_4RM_B_09.png`,
                    name: 'AIR_JORDAN_4RM_B_09.png',
                    originalname: 'AIR_JORDAN_4RM_B_09.png',
                }, 
                {
                    path: `/files/${clientId}/AIR_JORDAN_4RM_B_010.png`,
                    name: 'AIR_JORDAN_4RM_B_010.png',
                    originalname: 'AIR_JORDAN_4RM_B_010.png',
                } 
            ],
            content: `에어 조던 4RM 블랙/다크 그레이/라이트 본`,
            createdAt: getTime(-41, -60 * 60 * 2),
            updatedAt: getTime(-40, -60 * 15),
            extra: {
                depth: 2,
                parent: 1,
                size: [230, 235, 240, 245], // 1
                color: '블랙/다크 그레이/라이트 본', // 1
                styleNo: 'FQ7938-001', // 1
            },
        },
        {   // 상품 PC0304
            _id: await nextSeq('product'),
            seller_id: 2,
            price: 89000, // 1
            show: true,
            active: true,
            name: '나이키 코트 버로우 미드 2', // 1
            quantity: 9999,
            buyQuantity: 0,
            mainImages: [
                {
                    path: `/files/${clientId}/NIKE_COURT_BOROUGH_MID_01.png`,
                    name: 'NIKE_COURT_BOROUGH_MID_01.png',
                    originalname: 'NIKE_COURT_BOROUGH_MID_01.png',
                },
                {
                    path: `/files/${clientId}/NIKE_COURT_BOROUGH_MID_02.png`,
                    name: 'NIKE_COURT_BOROUGH_MID_02.png',
                    originalname: 'NIKE_COURT_BOROUGH_MID_02.png',
                },
                {
                    path: `/files/${clientId}/NIKE_COURT_BOROUGH_MID_03.png`,
                    name: 'NIKE_COURT_BOROUGH_MID_03.png',
                    originalname: 'NIKE_COURT_BOROUGH_MID_03.png',
                },
                {
                    path: `/files/${clientId}/NIKE_COURT_BOROUGH_MID_04.png`,
                    name: 'NIKE_COURT_BOROUGH_MID_04.png',
                    originalname: 'NIKE_COURT_BOROUGH_MID_04.png',
                },
                {
                    path: `/files/${clientId}/NIKE_COURT_BOROUGH_MID_05.png`,
                    name: 'NIKE_COURT_BOROUGH_MID_05.png',
                    originalname: 'NIKE_COURT_BOROUGH_MID_05.png',
                },
                {
                    path: `/files/${clientId}/NIKE_COURT_BOROUGH_MID_06.png`,
                    name: 'NIKE_COURT_BOROUGH_MID_06.png',
                    originalname: 'NIKE_COURT_BOROUGH_MID_06.png',
                },
                {
                    path: `/files/${clientId}/NIKE_COURT_BOROUGH_MID_07.png`,
                    name: 'NIKE_COURT_BOROUGH_MID_07.png',
                    originalname: 'NIKE_COURT_BOROUGH_MID_07.png',
                },
                {
                    path: `/files/${clientId}/NIKE_COURT_BOROUGH_MID_08.png`,
                    name: 'NIKE_COURT_BOROUGH_MID_08.png',
                    originalname: 'NIKE_COURT_BOROUGH_MID_08.png',
                }, 
                {
                    path: `/files/${clientId}/NIKE_COURT_BOROUGH_MID_09.png`,
                    name: 'NIKE_COURT_BOROUGH_MID_09.png',
                    originalname: 'NIKE_COURT_BOROUGH_MID_09.png',
                }  
            ],
            content: `나이키 코트 보로 미드 2로 올스타처럼 코트 위를 누비세요. 내구성이 우수한 가죽으로 제작된 클래식한 미드탑 디자인이 고급스러운 룩과 느낌을 선사합니다. 설포와 발목에 패딩을 더해 더욱 편안합니다.`,
            createdAt: getTime(-41, -60 * 60 * 2),
            updatedAt: getTime(-40, -60 * 15),
            extra: {
                isNew: true,
                isBest: false,
                category: ['PC03', 'PC0304'], // 1
                size: [225, 230, 235, 240, 245, 250], // 1
                color: '유니버시티 레드/화이트/블랙', // 1
                styleNo: 'CD7782-602', // 1
                gender: 'kids',
            },
        },
        {   // 상품 PC0305
            _id: await nextSeq('product'),
            seller_id: 2,
            price: 119000, // 1
            show: true,
            active: true,
            name: '에어맥스 1', // 1
            quantity: 9999,
            buyQuantity: 0,
            mainImages: [
                {
                    path: `/files/${clientId}/AIR_MAX_A_01.png`,
                    name: 'AIR_MAX_A_01.png',
                    originalname: 'AIR_MAX_A_01.png',
                }
            ],
            content: `여유로운 라인과 헤리티지 트랙 룩은 물론, 투명 에어 쿠셔닝이 돋보이는 나이키 에어맥스 1은 어떤 룩이든 완벽하게 마무리해 줍니다. 혼합 소재가 깊이감을 더하며 가볍고 내구성이 좋아 매일 착용할 수 있습니다.`,
            createdAt: getTime(-41, -60 * 60 * 2),
            updatedAt: getTime(-40, -60 * 15),
            extra: {
                depth:1,
                isNew: true,
                isBest: false,
                category: ['PC03', 'PC0305'], // 1
                gender: 'kids',
            },
        },
        {   // 상품 PC0305_A
            _id: await nextSeq('product'),
            seller_id: 2,
            price: 119000,  //1
            show: true,
            active: true,
            name: '에어맥스 1', //1
            quantity: 9999,
            buyQuantity: 0,
            mainImages: [
                {
                    path: `/files/${clientId}/AIR_MAX_A_01.png`,
                    name: 'AIR_MAX_A_01.png',
                    originalname: 'AIR_MAX_A_01.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_A_02.png`,
                    name: 'AIR_MAX_A_02,png',
                    originalname: 'AIR_MAX_A_02.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_A_03.png`,
                    name: 'AIR_MAX_A_03.png',
                    originalname: 'AIR_MAX_A_03.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_A_04.png`,
                    name: 'AIR_MAX_A_04.png',
                    originalname: 'AIR_MAX_A_04.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_A_05.png`,
                    name: 'AIR_MAX_A_05.png',
                    originalname: 'AIR_MAX_A_05.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_A_06.png`,
                    name: 'AIR_MAX_A_06.png',
                    originalname: 'AIR_MAX_A_06.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_A_07.png`,
                    name: 'AIR_MAX_A_07.png',
                    originalname: 'AIR_MAX_A_07.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_A_08.png`,
                    name: 'AIR_MAX_A_08.png',
                    originalname: 'AIR_MAX_A_08.png',
                },
            ],
            content: `에어맥스 1 스모크 그레이/울프 그레이/옵시디언/레이서 블루`,
            createdAt: getTime(-41, -60 * 60 * 2),
            updatedAt: getTime(-40, -60 * 15),
            extra: {
                depth: 2,
                parent: 1,
                size: [200, 205, 210, 220, 225, 230, 235, 240, 245, 250], // 1
                color: '스모크 그레이/울프 그레이/옵시디언/레이서 블루', // 1
                styleNo: 'DZ3307-007', // 1
            },
        },
        {   // 상품 PC0305_B
            _id: await nextSeq('product'),
            seller_id: 2,
            price: 119000,  //1
            show: true,
            active: true,
            name: '에어맥스 1', //1
            quantity: 9999,
            buyQuantity: 0,
            mainImages: [
                {
                    path: `/files/${clientId}/AIR_MAX_B_01.png`,
                    name: 'AIR_MAX_B_01.png',
                    originalname: 'AIR_MAX_B_01.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_B_02.png`,
                    name: 'AIR_MAX_B_02,png',
                    originalname: 'AIR_MAX_B_02.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_B_03.png`,
                    name: 'AIR_MAX_B_03.png',
                    originalname: 'AIR_MAX_B_03.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_B_04.png`,
                    name: 'AIR_MAX_B_04.png',
                    originalname: 'AIR_MAX_B_04.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_B_05.png`,
                    name: 'AIR_MAX_B_05.png',
                    originalname: 'AIR_MAX_B_05.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_B_06.png`,
                    name: 'AIR_MAX_B_06.png',
                    originalname: 'AIR_MAX_B_06.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_B_07.png`,
                    name: 'AIR_MAX_B_07.png',
                    originalname: 'AIR_MAX_B_07.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_B_08.png`,
                    name: 'AIR_MAX_B_08.png',
                    originalname: 'AIR_MAX_B_08.png',
                },
            ],
            content: `에어맥스 1 페일 아이보리/화이트/바이코스털/빈티지 그린`,
            createdAt: getTime(-41, -60 * 60 * 2),
            updatedAt: getTime(-40, -60 * 15),
            extra: {
                depth: 2,
                parent: 1,
                size: [200, 205, 210, 220, 225, 230, 235, 240, 245, 250], // 1
                color: '페일 아이보리/화이트/바이코스털/빈티지 그린', // 1
                styleNo: 'DZ3307-113', // 1
            },
        },
        {   // 상품 PC0305_C
            _id: await nextSeq('product'),
            seller_id: 2,
            price: 119000,  //1
            show: true,
            active: true,
            name: '에어맥스 1', //1
            quantity: 9999,
            buyQuantity: 0,
            mainImages: [
                {
                    path: `/files/${clientId}/AIR_MAX_C_01.png`,
                    name: 'AIR_MAX_C_01.png',
                    originalname: 'AIR_MAX_C_01.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_C_02.png`,
                    name: 'AIR_MAX_C_02,png',
                    originalname: 'AIR_MAX_C_02.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_C_03.png`,
                    name: 'AIR_MAX_C_03.png',
                    originalname: 'AIR_MAX_C_03.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_C_04.png`,
                    name: 'AIR_MAX_C_04.png',
                    originalname: 'AIR_MAX_C_04.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_C_05.png`,
                    name: 'AIR_MAX_C_05.png',
                    originalname: 'AIR_MAX_C_05.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_C_06.png`,
                    name: 'AIR_MAX_C_06.png',
                    originalname: 'AIR_MAX_C_06.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_C_07.png`,
                    name: 'AIR_MAX_C_07.png',
                    originalname: 'AIR_MAX_C_07.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_C_08.png`,
                    name: 'AIR_MAX_C_08.png',
                    originalname: 'AIR_MAX_C_08.png',
                },
            ],
            content: `에어맥스 1 서밋 화이트/울프 그레이/화이트/다크`,
            createdAt: getTime(-41, -60 * 60 * 2),
            updatedAt: getTime(-40, -60 * 15),
            extra: {
                depth: 2,
                parent: 1,
                size: [200, 205, 210, 220, 225, 230, 235, 240, 245, 250], // 1
                color: '서밋 화이트/울프 그레이/화이트/다크', // 1
                styleNo: 'DZ3307-115', // 1
            },
        },
        {   // 상품 PC0305_D
            _id: await nextSeq('product'),
            seller_id: 2,
            price: 107100,  //1
            show: true,
            active: true,
            name: '에어맥스 1', //1
            quantity: 9999,
            buyQuantity: 0,
            mainImages: [
                {
                    path: `/files/${clientId}/AIR_MAX_D_01.png`,
                    name: 'AIR_MAX_D_01.png',
                    originalname: 'AIR_MAX_D_01.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_D_02.png`,
                    name: 'AIR_MAX_D_02,png',
                    originalname: 'AIR_MAX_D_02.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_D_03.png`,
                    name: 'AIR_MAX_D_03.png',
                    originalname: 'AIR_MAX_D_03.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_D_04.png`,
                    name: 'AIR_MAX_D_04.png',
                    originalname: 'AIR_MAX_D_04.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_D_05.png`,
                    name: 'AIR_MAX_D_05.png',
                    originalname: 'AIR_MAX_D_05.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_D_06.png`,
                    name: 'AIR_MAX_D_06.png',
                    originalname: 'AIR_MAX_D_06.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_D_07.png`,
                    name: 'AIR_MAX_D_07.png',
                    originalname: 'AIR_MAX_D_07.png',
                },
                {
                    path: `/files/${clientId}/AIR_MAX_D_08.png`,
                    name: 'AIR_MAX_D_08.png',
                    originalname: 'AIR_MAX_D_08.png',
                },
            ],
            content: `에어맥스 1 스모크 팬텀/라이트 오어우드 브라운/블랙/카키`,
            createdAt: getTime(-41, -60 * 60 * 2),
            updatedAt: getTime(-40, -60 * 15),
            extra: {
                depth: 2,
                parent: 1,
                size: [200, 205, 210, 220, 225, 230, 235, 240, 245, 250], // 1
                color: '스모크 팬텀/라이트 오어우드 브라운/블랙/카키', // 1
                styleNo: 'DZ3307-006', // 1
            },
        },
        {   // 상품 PC0306
            _id: await nextSeq('product'),
            seller_id: 2,
            price: 119000, // 1
            show: true,
            active: true,
            name: '나이키 덩크 로우', // 1
            quantity: 9999,
            buyQuantity: 0,
            mainImages: [
                {
                    path: `/files/${clientId}/NIKE_DUNK_LOW_01.png`,
                    name: 'NIKE_DUNK_LOW_01.png',
                    originalname: 'NIKE_DUNK_LOW_01.png',
                },
                {
                    path: `/files/${clientId}/NIKE_DUNK_LOW_02.png`,
                    name: 'NIKE_DUNK_LOW_02.png',
                    originalname: 'NIKE_DUNK_LOW_02.png',
                },
                {
                    path: `/files/${clientId}/NIKE_DUNK_LOW_03.png`,
                    name: 'NIKE_DUNK_LOW_03.png',
                    originalname: 'NIKE_DUNK_LOW_03.png',
                },
                {
                    path: `/files/${clientId}/NIKE_DUNK_LOW_04.png`,
                    name: 'NIKE_DUNK_LOW_04.png',
                    originalname: 'NIKE_DUNK_LOW_04.png',
                },
                {
                    path: `/files/${clientId}/NIKE_DUNK_LOW_05.png`,
                    name: 'NIKE_DUNK_LOW_05.png',
                    originalname: 'NIKE_DUNK_LOW_05.png',
                },
                {
                    path: `/files/${clientId}/NIKE_DUNK_LOW_06.png`,
                    name: 'NIKE_DUNK_LOW_06.png',
                    originalname: 'NIKE_DUNK_LOW_06.png',
                },
                {
                    path: `/files/${clientId}/NIKE_DUNK_LOW_07.png`,
                    name: 'NIKE_DUNK_LOW_07.png',
                    originalname: 'NIKE_DUNK_LOW_07.png',
                },
                {
                    path: `/files/${clientId}/NIKE_DUNK_LOW_08.png`,
                    name: 'NIKE_DUNK_LOW_08.png',
                    originalname: 'NIKE_DUNK_LOW_08.png',
                }  
            ],
            content: `올드스쿨 농구를 좋아한다면 이 나이키 덩크도 마음에 쏙 들 거예요. 80년대의 농구 아이콘에 튼튼한 인조 가죽과 과감한 스타일링을 더해 클래식한 코트 감성을 전달합니다. 농구계의 아이콘을 기념하는 이 신발은 학교, 공원 등 어디서든 쉽게 착용할 수 있는 디자인입니다.`,
            createdAt: getTime(-41, -60 * 60 * 2),
            updatedAt: getTime(-40, -60 * 15),
            extra: {
                isNew: true,
                isBest: false,
                category: ['PC03', 'PC0306'], // 1
                size: [225, 230, 235, 240, 245, 250], // 1
                color: '짐 레드/화이트/블랙', // 1
                styleNo: 'HF9980-600', // 1
                gender: 'kids',
            },
        },
        {   // 상품 PC0307
            _id: await nextSeq('product'),
            seller_id: 2,
            price: 129000, // 1
            show: true,
            active: true,
            name: '나이키 덩크 로우 SE', // 1
            quantity: 9999,
            buyQuantity: 0,
            mainImages: [
                {
                    path: `/files/${clientId}/NIKE_DUNK_LOW_SE_01.png`,
                    name: 'NIKE_DUNK_LOW_SE_01.png',
                    originalname: 'NIKE_DUNK_LOW_SE_01.png',
                },
                {
                    path: `/files/${clientId}/NIKE_DUNK_LOW_SE_02.png`,
                    name: 'NIKE_DUNK_LOW_SE_02.png',
                    originalname: 'NIKE_DUNK_LOW_SE_02.png',
                },
                {
                    path: `/files/${clientId}/NIKE_DUNK_LOW_SE_03.png`,
                    name: 'NIKE_DUNK_LOW_SE_03.png',
                    originalname: 'NIKE_DUNK_LOW_SE_03.png',
                },
                {
                    path: `/files/${clientId}/NIKE_DUNK_LOW_SE_04.png`,
                    name: 'NIKE_DUNK_LOW_SE_04.png',
                    originalname: 'NIKE_DUNK_LOW_SE_04.png',
                },
                {
                    path: `/files/${clientId}/NIKE_DUNK_LOW_SE_05.png`,
                    name: 'NIKE_DUNK_LOW_SE_05.png',
                    originalname: 'NIKE_DUNK_LOW_SE_05.png',
                },
                {
                    path: `/files/${clientId}/NIKE_DUNK_LOW_SE_06.png`,
                    name: 'NIKE_DUNK_LOW_SE_06.png',
                    originalname: 'NIKE_DUNK_LOW_SE_06.png',
                },
                {
                    path: `/files/${clientId}/NIKE_DUNK_LOW_SE_07.png`,
                    name: 'NIKE_DUNK_LOW_SE_07.png',
                    originalname: 'NIKE_DUNK_LOW_SE_07.png',
                },
                {
                    path: `/files/${clientId}/NIKE_DUNK_LOW_SE_08.png`,
                    name: 'NIKE_DUNK_LOW_SE_08.png',
                    originalname: 'NIKE_DUNK_LOW_SE_08.png',
                }  
            ],
            content: `보다 쉽게 멋스러운 룩을 연출하고 싶으신가요? 1980년대의 아이콘이었던 나이키 덩크가 매일 신어도 좋은 클래식한 스타일로 돌아왔습니다. 이 스페셜 에디션 버전은 프리미엄 소재에 가벼운 무게의 쿠셔닝과 그립력이 우수한 평평한 밑창을 더해 오랫동안 편안한 착화감을 선사합니다.`,
            createdAt: getTime(-41, -60 * 60 * 2),
            updatedAt: getTime(-40, -60 * 15),
            extra: {
                isNew: true,
                isBest: false,
                category: ['PC03', 'PC0307'], // 1
                size: [225, 230, 235, 240, 245, 250], // 1
                color: '세일/화이트/게임 로얄/세일', // 1
                styleNo: 'FV7472-100', // 1
                gender: 'kids',
            },
        },
        {   // 상품 PC0308
            _id: await nextSeq('product'),
            seller_id: 2,
            price: 119000, // 1
            show: true,
            active: true,
            name: '루카 3 포토 피니시', // 1
            quantity: 9999,
            buyQuantity: 0,
            mainImages: [
                {
                    path: `/files/${clientId}/LUKA_3_PHOTO_FINISH_01.png`,
                    name: 'LUKA_3_PHOTO_FINISH_01.png',
                    originalname: 'LUKA_3_PHOTO_FINISH_01.png',
                },
                {
                    path: `/files/${clientId}/LUKA_3_PHOTO_FINISH_02.png`,
                    name: 'LUKA_3_PHOTO_FINISH_02.png',
                    originalname: 'LUKA_3_PHOTO_FINISH_02.png',
                },
                {
                    path: `/files/${clientId}/LUKA_3_PHOTO_FINISH_03.png`,
                    name: 'LUKA_3_PHOTO_FINISH_03.png',
                    originalname: 'LUKA_3_PHOTO_FINISH_03.png',
                },
                {
                    path: `/files/${clientId}/LUKA_3_PHOTO_FINISH_04.png`,
                    name: 'LUKA_3_PHOTO_FINISH_04.png',
                    originalname: 'LUKA_3_PHOTO_FINISH_04.png',
                },
                {
                    path: `/files/${clientId}/LUKA_3_PHOTO_FINISH_05.png`,
                    name: 'LUKA_3_PHOTO_FINISH_05.png',
                    originalname: 'LUKA_3_PHOTO_FINISH_05.png',
                },
                {
                    path: `/files/${clientId}/LUKA_3_PHOTO_FINISH_06.png`,
                    name: 'LUKA_3_PHOTO_FINISH_06.png',
                    originalname: 'LUKA_3_PHOTO_FINISH_06.png',
                },
                {
                    path: `/files/${clientId}/LUKA_3_PHOTO_FINISH_07.png`,
                    name: 'LUKA_3_PHOTO_FINISH_07.png',
                    originalname: 'LUKA_3_PHOTO_FINISH_07.png',
                },
                {
                    path: `/files/${clientId}/LUKA_3_PHOTO_FINISH_08.png`,
                    name: 'LUKA_3_PHOTO_FINISH_08.png',
                    originalname: 'LUKA_3_PHOTO_FINISH_08.png',
                },
                {
                    path: `/files/${clientId}/LUKA_3_PHOTO_FINISH_09.png`,
                    name: 'LUKA_3_PHOTO_FINISH_09.png',
                    originalname: 'LUKA_3_PHOTO_FINISH_09.png',
                }  
            ],
            content: `부드럽고 유연하게 디자인된 루카 3는 발걸음에 가벼운 마법을 더해줍니다. 발 아래에 탄력 있는 폼이 있어 코트에서 공간을 쉽게 확보할 수 있고, 경량 디자인 덕분에 움직이기 편합니다. 그리고 자동차에 대한 루카의 애정에서 영감을 받아 디자인에 속도감 있는 스타일을 적용해 근사한 모습으로 수비수를 제칠 수 있습니다.`,
            createdAt: getTime(-41, -60 * 60 * 2),
            updatedAt: getTime(-40, -60 * 15),
            extra: {
                isNew: true,
                isBest: false,
                category: ['PC03', 'PC0308'], // 1
                size: [230, 235, 240, 245, 250], // 1
                color: '화이트/볼트 글로우/그린 글로우/블랙', // 1
                styleNo: 'HQ5058-107', // 1
                gender: 'kids',
            },
        },
        {   // 상품 PC0309
            _id: await nextSeq('product'),
            seller_id: 2,
            price: 79000, // 1
            show: true,
            active: true,
            name: '나이키 주니어 팬텀 GX 2 아카데미', // 1
            quantity: 9999,
            buyQuantity: 0,
            mainImages: [
                {
                    path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_01.png`,
                    name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_01.png',
                    originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_01.png',
                }
            ],
            content: `멋진 패스로 동료에게 기회를 주었든, 환상적인 플레이를 펼쳤든 득점에 기여한 것입니다. 자, 득점을 이어 나가세요. 신발 끈이 없는 디자인의 이 축구화는 공을 가장 세게 차는 부분에 점착력 있는 텍스처가 적용되어 있어 슛을 날릴 수 있는 공간에 들어섰을 때 볼을 컨트롤할 수 있도록 도와줍니다. 득점을 염두에 두고 제작된 제품이죠.`,
            createdAt: getTime(-41, -60 * 60 * 2),
            updatedAt: getTime(-40, -60 * 15),
            extra: {
                depth:1,
                isNew: true,
                isBest: false,
                category: ['PC03', 'PC0309'], // 1
                gender: 'kids',
            },
        },
        {   // 상품 PC0309_A
            _id: await nextSeq('product'),
            seller_id: 2,
            price: 79000,  //1
            show: true,
            active: true,
            name: '나이키 주니어 팬텀 GX 2 아카데미', //1
            quantity: 9999,
            buyQuantity: 0,
            mainImages: [
                {
                    path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_01.png`,
                    name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_01.png',
                    originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_01.png',
                },
                {
                    path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_02.png`,
                    name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_02,png',
                    originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_02.png',
                },
                {
                    path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_03.png`,
                    name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_03.png',
                    originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_03.png',
                },
                {
                    path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_04.png`,
                    name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_04.png',
                    originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_04.png',
                },
                {
                    path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_05.png`,
                    name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_05.png',
                    originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_05.png',
                },
                {
                    path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_06.png`,
                    name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_06.png',
                    originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_06.png',
                },
                {
                    path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_07.png`,
                    name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_07.png',
                    originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_07.png',
                },
                {
                    path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_08.png`,
                    name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_08.png',
                    originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_08.png',
                },
            ],
            content: `나이키 주니어 팬텀 GX 2 아카데미 메탈릭 실버/볼트/블랙`,
            createdAt: getTime(-41, -60 * 60 * 2),
            updatedAt: getTime(-40, -60 * 15),
            extra: {
                depth: 2,
                parent: 1,
                size: [200, 205, 210, 220, 225, 230, 235, 240], // 1
                color: '메탈릭 실버/볼트/블랙', // 1
                styleNo: 'FJ2608-003', // 1
            },
        },
        {   // 상품 PC0309_B
            _id: await nextSeq('product'),
            seller_id: 2,
            price: 71100,  //1
            show: true,
            active: true,
            name: '나이키 주니어 팬텀 GX 2 아카데미', //1
            quantity: 9999,
            buyQuantity: 0,
            mainImages: [
                {
                    path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_01.png`,
                    name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_01.png',
                    originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_01.png',
                },
                {
                    path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_02.png`,
                    name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_02,png',
                    originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_02.png',
                },
                {
                    path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_03.png`,
                    name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_03.png',
                    originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_03.png',
                },
                {
                    path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_04.png`,
                    name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_04.png',
                    originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_04.png',
                },
                {
                    path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_05.png`,
                    name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_05.png',
                    originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_05.png',
                },
                {
                    path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_06.png`,
                    name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_06.png',
                    originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_06.png',
                },
                {
                    path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_07.png`,
                    name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_07.png',
                    originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_07.png',
                },
                {
                    path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_08.png`,
                    name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_08.png',
                    originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_08.png',
                },
            ],
            content: `나이키 주니어 팬텀 GX 2 아카데미 블루 퓨리/화이트`,
            createdAt: getTime(-41, -60 * 60 * 2),
            updatedAt: getTime(-40, -60 * 15),
            extra: {
                depth: 2,
                parent: 1,
                size: [200, 205, 210, 220, 225, 230, 235, 240], // 1
                color: '블루 퓨리/화이트', // 1
                styleNo: 'FJ2608-400', // 1
            },
        },
        {   // 상품 PC03010
            _id: await nextSeq('product'),
            seller_id: 2,
            price: 109000, // 1
            show: true,
            active: true,
            name: '나이키 마노아', // 1
            quantity: 9999,
            buyQuantity: 0,
            mainImages: [
                {
                    path: `/files/${clientId}/NIKE_MANOA_01.png`,
                    name: 'NIKE_MANOA_01.png',
                    originalname: 'NIKE_MANOA_01.png',
                },
                {
                    path: `/files/${clientId}/NIKE_MANOA_02.png`,
                    name: 'NIKE_MANOA_02.png',
                    originalname: 'NIKE_MANOA_02.png',
                },
                {
                    path: `/files/${clientId}/NIKE_MANOA_03.png`,
                    name: 'NIKE_MANOA_03.png',
                    originalname: 'NIKE_MANOA_03.png',
                },
                {
                    path: `/files/${clientId}/NIKE_MANOA_04.png`,
                    name: 'NIKE_MANOA_04.png',
                    originalname: 'NIKE_MANOA_04.png',
                },
                {
                    path: `/files/${clientId}/NIKE_MANOA_05.png`,
                    name: 'NIKE_MANOA_05.png',
                    originalname: 'NIKE_MANOA_05.png',
                },
                {
                    path: `/files/${clientId}/NIKE_MANOA_06.png`,
                    name: 'NIKE_MANOA_06.png',
                    originalname: 'NIKE_MANOA_06.png',
                },
                {
                    path: `/files/${clientId}/NIKE_MANOA_07.png`,
                    name: 'NIKE_MANOA_07.png',
                    originalname: 'NIKE_MANOA_07.png',
                },
                {
                    path: `/files/${clientId}/NIKE_MANOA_08.png`,
                    name: 'NIKE_MANOA_08.png',
                    originalname: 'NIKE_MANOA_08.png',
                },
                {
                    path: `/files/${clientId}/NIKE_MANOA_09.png`,
                    name: 'NIKE_MANOA_09.png',
                    originalname: 'NIKE_MANOA_09.png',
                }  
            ],
            content: `나이키 마노아를 신으면 다음 모험을 바로 시작할 수 있습니다. 튼튼한 가죽과 오래가는 디자인이 내구성을 더해 줍니다. 부드러운 폼 쿠셔닝과 견고한 접지력 덕분에 춥고 비 오는 날에도 거뜬합니다.`,
            createdAt: getTime(-41, -60 * 60 * 2),
            updatedAt: getTime(-40, -60 * 15),
            extra: {
                isNew: true,
                isBest: false,
                category: ['PC03', 'PC03010'], // 1
                size: [200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250], // 1
                color: '휘트/블랙/휘트', // 1
                styleNo: 'HF0750-700', // 1
                gender: 'kids',
            },
        },
    ];
}
