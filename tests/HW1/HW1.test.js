describe('HomeWork tasks', () => {
    // 1.	Если а – четное посчитать а*б, иначе а+б
    describe('getSumOrMultiByEven', () => {
        //Given
        const testData = [
            {
                a: 2,
                b: 3,
                expected: 6,
            },
            {
                a: 1,
                b: 4,
                expected: 5,
            },
            {
                a: 0,
                b: 1,
                expected: 0,
            }
        ];

        testData.forEach(data => {
            const { a, b, expected } = data;

            //When
            const actual = getSumOrMultiByEven(a, b);

            //Then
            it(`should return ${expected} when a = ${a} and b = ${b}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    //2.	Определить какой четверти принадлежит точка с координатами (х,у)
    describe('showPointQuarterCoordinate', () => {
    //Given
        const testData = [
            {
                x: 2,
                y: 3,
                expected: "I",
            },
            {
                x: -2,
                y: 3,
                expected: "II",
            },
            {
                x: 2,
                y: -3,
                expected: "IV",
            },
            {
                x: -2,
                y: -3,
                expected: "III",
            },
            {
                x: 0,
                y: 3,
                expected: "OY",
            },
            {
                x: 2,
                y: 0,
                expected: "OX",
            },
            {
                x: 0,
                y: 0,
                expected: "Coordinate center",
            }
        ];

        testData.forEach(data => {
            const {x, y, expected } = data;

            //When
            const actual = showPointQuarterCoordinate (x, y);

            //Then
            it (`should return ${expected} when x = ${x} and y = ${y}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    //3.	Найти суммы только положительных из трех чисел
    describe('getSumOnlyPositive', () => {
        //Given
        const testData = [
            {
                a: 6,
                b: 3,
                c: 4,
                expected: 13,
            },
            {
                a: 6,
                b: -3,
                c: 4,
                expected: 10,
            },
            {
                a: 6,
                b: -3,
                c: -4,
                expected: 6,
            },
            {
                a: -6,
                b: -3,
                c: -4,
                expected: 0,
            },
        ];
        testData.forEach(data => {
            const {a, b, c, expected } = data;

            //When
            const actual = getSumOnlyPositive(a, b, c);

            //Then
            it(`should return ${expected} when a = ${a} and b = ${b} and c = ${c}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    // 4.	Посчитать выражение макс(а*б*с, а+б+с)+3
    describe('getMaxByEven', () => {
        //
        const testData = [
            {
                a: 2,
                b: 4,
                c: 7,
                expected: 59,
            },
            {
                a: 1,
                b: 1,
                c: 1,
                expected: 6,
            }
        ];
        testData.forEach(data => {
            const {a, b, c, expected } = data;

            //When
            const actual = getMaxByEven(a, b, c);

            //Then
            it(`should return ${expected} when a = ${a} and b = ${b} and c = ${c}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });


    // 5.	Написать программу определения оценки студента по его рейтингу, на основе правил
    describe('getMarkByRating', () => {
        const testData = [
            {
                rating: 0,
                expected: 'Invalid argument provided!',
            },
            {
                rating: 1,
                expected: 'F',
            },
            {
                rating: 12,
                expected: 'F',
            },
            {
                rating: 19,
                expected: 'F',
            },
            {
                rating: 20,
                expected: 'E',
            },
            {
                rating: 21,
                expected: 'E',
            },
            {
                rating: 32,
                expected: 'E',
            },
            {
                rating: 39,
                expected: 'E',
            },
            {
                rating: 40,
                expected: 'D',
            },
            {
                rating: 41,
                expected: 'D',
            },
            {
                rating: 55,
                expected: 'D',
            },
            {
                rating: 59,
                expected: 'D',
            },
            {
                rating: 60,
                expected: 'C',
            },
            {
                rating: 61,
                expected: 'C',
            },
            {
                rating: 75,
                expected: 'B',
            },
            {
                rating: 89,
                expected: 'B',
            },
            {
                rating: 90,
                expected: 'A',
            },
            {
                rating: 99,
                expected: 'A',
            },
            {
                rating: 100,
                expected: 'A',
            },
        ];

        testData.forEach(data => {
            const { rating, expected } = data;

            const actual = getMarkByRating(rating);

            it(`should return ${expected} when rating = ${rating}`, () => {
                assert.strictEqual(actual, expected);
            });
        })
    });


    // Циклы
// 1.	Найти сумму четных чисел и их количество в диапазоне от 1 до 99
    describe('getSumAndQuantity', () => {
        //When
        const result = getSumAndQuantity();
        //Then
        it('should return sum and quantity of even nambers', function () {
            assert.deepEqual(result,{sum : 2450, quantity : 49});
        });
    });


// 2.	Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
// 3.	Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)


// 4.	Вычислить факториал числа n. n! = 1*2*…*n-1*n;!
    describe('factorial', () => {
        const testData = [
            {
                n: 3,
                expected: 6,
            },
            {
                n: 6,
                expected: 720,
            }
        ];
        testData.forEach(data => {
            const {n, expected} = data;

            //When
            const actual = factorial(n);

            //Then
            it(`should return ${expected} when a = ${n}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });


    // 5.	Посчитать сумму цифр заданного числа
    describe('getSumNumber', () => {
        //Given
        const testData = [
            {
                n: 122,
                expected: 5,
            },
            {
                n: 1112233,
                expected: 13,
            }
        ];

        testData.forEach(data => {
            const { n, expected } = data;

            //When
            const actual = getSumNumber(n);

            //Then
            it(`should return ${expected} when n = ${n}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });


// 6.	Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.
    describe('getMirrorNumber', () => {
        //Given
        const testData = [
            {
                x: 123,
                expected: 321,
            }
        ];

        testData.forEach(data => {
            const { x, expected } = data;

            //When
            const actual = getMirrorNumber(x);

            //Then
            it(`should return ${expected} when x = ${x}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });



//1.	Найти минимальный элемент массива
    describe('getMinIndex', () => {
        const testData = [
            {
                array: [],
                expected: -1,
            },
            {
                array: [5],
                expected: 0,
            },
            {
                array: [3, 2],
                expected: 1,
            },
            {
                array: [2, 5, 6, 0, 7],
                expected: 3,
            }
        ];

        testData.forEach(data => {
            const { array, expected } = data;

            const actual = getMinIndex(array);

            it(`should return ${expected} when array = [${array}]`, () => {
                assert.strictEqual(actual, expected);
            });
        })
    });

});