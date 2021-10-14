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
    console.log(list);
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

const ats = recBiggestNumber(numbers);

console.log(ats);