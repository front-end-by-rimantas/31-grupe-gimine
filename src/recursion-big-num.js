const numbers = [
    7,
    8,
    [
        -77,
        14,
        [
            -8, 12, 777, -88,
        ],
        -88,
    ],
    -9,
    [
        -8, 12, -777, -88,
    ],
    2,
    15,
    0,
];

function recBiggestNumber(list) {
    let biggest = -Infinity;

    if (typeof list === 'number') {
        if (list > biggest) {
            biggest = list;
        }
    } else {
        for (const item of list) {
            const rez = recBiggestNumber(item);
            if (rez > biggest) {
                biggest = rez;
            }
        }
    }

    return biggest;
}

function recBiggestNumber2(data) {
    let biggest = -Infinity;

    if (Array.isArray(data)) {
        for (const item of data) {
            const rez = recBiggestNumber2(item);
            if (rez > biggest) {
                biggest = rez;
            }
        }
    } else {
        return data;
    }

    return biggest;
}

const ats = recBiggestNumber2(numbers);

console.log(ats);