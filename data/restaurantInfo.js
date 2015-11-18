var restraunts = [
    {
        "id": "1",
        "rest_name": "우사미",
        "pic": "a1.png",
        "menu": [
            {"name": "소고기보신탕", "price": "5,000"},
            {"name": "뚝배기불고기", "price": "5,000"},
            {"name": "한우육회비빔밥", "price": "5,000"}
        ]
    },
    {
        "id": "2",
        "rest_name": "고미고미",
        "pic": "a2.jpg",
        "menu": [
            {"name": "잔치국수", "price": "4,000"},
            {"name": "돌솥비빔밥", "price": "6,000"},
            {"name": "만두국밥", "price": "6,000"},
            {"name": "순두부찌개", "price": "5,500"},
            {"name": "된장찌개", "price": "5,500"},
            {"name": "찐만두", "price": "3,000"}
        ]
    },
    {
        "id": "3",
        "rest_name": "나라 돈가스",
        "pic": "a3.png",
        "menu": [
            {"name": "로스까스", "price": "6,500"},
            {"name": "히레까스", "price": "7,500"},
            {"name": "생선까스", "price": "7,500"},
            {"name": "치킨까스", "price": "7,500"},
            {"name": "로스까지정식", "price": "7,500"},
            {"name": "히레까스정식", "price": "8,500"}
        ]
    },
    {
        "id": "4",
        "rest_name": "육대장",
        "pic": "a4.jpg",
        "menu": [
            {"name": "옛날전통육개장", "price": "8,000"},
            {"name": "육개장설렁탕", "price": "8,000"},
            {"name": "육개장전골", "price": "25,000"}
        ]
    },
    {
        "id": "5",
        "rest_name": "라히노카레",
        "pic": "a5.jpg",
        "menu": [
            {"name": "기본카레", "price": "6,000"},
            {"name": "돈가스카레", "price": "7,000"},
            {"name": "왕새우카레", "price": "8,000"},
            {"name": "고로케카레", "price": "6,500"},
            {"name": "소세지카레", "price": "7,000"},
            {"name": "라히노카레", "price": "9,500"}
        ]
    }
];

exports.get = function (id) {
    return get(id);
};

exports.getRandom = function () {
    var id = randomRange(1, restraunts.length);
    return get(String(id));
}

var randomRange = function (n1, n2) {
    return Math.floor((Math.random() * (n2 - n1 + 1)) + n1);
}

var get = function (id) {
    for (var i = 0; i < restraunts.length; i++) {
        console.log(restraunts[i].id + ", req id : " + id);
        if (restraunts[i].id === id) {
            console.log(restraunts[i])
            return restraunts[i];
        }
    }
    return "";
}


