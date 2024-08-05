document.querySelector('.burger-menu').addEventListener('click', function() {
    document.querySelector('.header__menu').classList.toggle('open');
});

// Объект products хранит информацию о продуктах, разделенных по категориям: Франция, Германия, Англия.
const products = {
    france: [
        {
            imgSrc: './assets/images/cards/france/oxota-amura.jpg',
            alt:
                'Изображение товара Охота Амура',
            author:
                'Марсель Руссо',
            title:
                'Охота Амура',
            description:
                'Холст, масло (50х80)',
            price:
                '14 500 руб'
        }
        ,
        {
            imgSrc: './assets/images/cards/france/dama-s-sobachkoy.jpg',
            alt:
                'Изображение товара Дама с собачкой',
            author:
                'Анри Селин',
            title:
                'Дама с собачкой',
            description:
                'Акрил, бумага (50х80)',
            price:
                '16 500 руб'
        }
        ,
        {
            imgSrc: './assets/images/cards/france/procedura.jpg',
            alt:
                'Изображение товара Процедура',
            author:
                'Франсуа Дюпон',
            title:
                'Процедура',
            description:
                'Цветная литография (40х60)',
            price:
                '20 000 руб'
        }
        ,
        {
            imgSrc: './assets/images/cards/france/roza.jpg',
            alt:
                'Изображение товара Роза',
            author:
                'Луи Детуш',
            title:
                'Роза',
            description:
                'Бумага, акрил (50х80)',
            price:
                '12 000 руб'
        }
        ,
        {
            imgSrc: './assets/images/cards/france/ptichiya-trapeza.jpg',
            alt:
                'Изображение товара Птичья трапеза',
            author:
                'Франсуа Дюпон',
            title:
                'Птичья трапеза',
            description:
                'Цветная литография (40х60)',
            price:
                '22 500 руб'
        }
        ,
        {
            imgSrc: './assets/images/cards/france/peizash-s-riboy.jpg',
            alt:
                'Изображение товара Пейзаж с рыбой',
            author:
                'Пьер Моранж',
            title:
                'Пейзаж с рыбой',
            description:
                'Цветная литография (40х60)',
            price:
                '20 000 руб'
        }
    ],
    germany: [
        {
            imgSrc: './assets/images/cards/germany/germany1.jpg',
            alt:
                'Изображение товара Над городом',
            author:
                'Курт Вернер',
            title:
                'Над городом',
            description:
                'Цветная литография (40х60)',
            price:
                '16 000 руб'
        }
        ,
        {
            imgSrc: './assets/images/cards/germany/germany2.jpg',
            alt:
                'Изображение товара Птенцы',
            author:
                'Курт Вернер',
            title:
                'Птенцы',
            description:
                'Холст, масло (50х80)',
            price:
                '14 500 руб'
        }
        ,
        {
            imgSrc: './assets/images/cards/germany/germany3.jpg',
            alt:
                'Изображение товара Среди листьев',
            author:
                'Мартин Майер',
            title:
                'Среди листьев',
            description:
                'Цветная литография (40х60)',
            price:
                '20 000 руб'
        }
        ,
        {
            imgSrc: './assets/images/cards/germany/germany4.jpg',
            alt:
                'Изображение товара Яркая птица',
            author:
                'Яркая птица',
            title:
                'Птенцы',
            description:
                'Цветная литография (40х60)',
            price:
                '13 000 руб'
        }
        ,
        {
            imgSrc: './assets/images/cards/germany/germany4.jpg',
            alt:
                'Изображение товара Дятлы',
            author:
                'Вульф Бауэр',
            title:
                'Птенцы',
            description:
                'Бумага, акрил (50х80)',
            price:
                '20 000 руб'
        }
        ,
        {
            imgSrc: './assets/images/cards/germany/germany4.jpg',
            alt:
                'Изображение товара Большие воды',
            author:
                'Вальтер Хартманн',
            title:
                'Большие воды',
            description:
                'Бумага, акрил (50х80)',
            price:
                '23 000 руб'
        }
    ],
    england: [
        {
            imgSrc: './assets/images/cards/england/england1.jpg',
            alt:
                'Изображение товара Дикий зверь',
            author:
                'Пол Смит',
            title:
                'Дикий зверь',
            description:
                'Акварель, бумага (50х80)',
            price:
                '19 500 руб'
        }
        ,
        {
            imgSrc: './assets/images/cards/england/england2.jpg',
            alt:
                'Изображение товара Скалистый берег',
            author:
                'Джон Уайт',
            title:
                'Скалистый берег',
            description:
                'Цветная литография (40х60)',
            price:
                '17 500 руб'
        }
        ,
        {
            imgSrc: './assets/images/cards/england/england3.jpg',
            alt:
                'Изображение товара Река и горы',
            author:
                'Джим Уотсон',
            title:
                'Река и горы',
            description:
                'Акварель, бумага (50х80)',
            price:
                '20 500 руб'
        }
        ,
        {
            imgSrc: './assets/images/cards/england/england4.jpg',
            alt:
                'Изображение товара Белый попугай',
            author:
                'Юджин Зиллион',
            title:
                'Белый попугай',
            description:
                'Цветная литография (40х60)',
            price:
                '15 500 руб'
        }
        ,
        {
            imgSrc: './assets/images/cards/england/england5.jpg',
            alt:
                'Изображение товара Ночная рыба',
            author:
                'Эрик Гиллман',
            title:
                'Ночная рыба',
            description:
                'Бумага, акрил (50х80)',
            price:
                '12 500 руб'
        }
        ,
        {
            imgSrc: './assets/images/cards/england/england6.jpg',
            alt:
                'Изображение товара Рыжий кот',
            author:
                'Альфред Барр',
            title:
                'Ночная рыба',
            description:
                'Цветная литография (40х60)',
            price:
                '21 000 руб'
        }
    ]
};

// Получаем элементы контейнера и меню
const container = document.getElementById('product-cards');
const menu = document.getElementById('category-menu');

/**
 * Функция для отображения продуктов выбранной категории.
 */
function renderProducts(category) {
    // Очищаем контейнер перед добавлением новых карточек
    container.innerHTML = '';

    // Получаем продукты выбранной категории или пустой массив, если категория не найдена
    const productsToDisplay = products[category] || [];

    // Проходим по каждому продукту и создаем HTML-код карточки продукта
    productsToDisplay.forEach(product => {
        const card = `
                    <div class="product-card">
                        <img class="product-card__img" src="${product.imgSrc}" alt="${product.alt}">
                        <div class="product-card__info">
                            <p class="product-card__author">${product.author}</p>
                            <h3 class="product-card__title">${product.title}</h3>
                            <p class="product-card__description">${product.description}</p>
                            <p class="product-card__price">${product.price}</p>
                        </div>
                        <button class="product-card__button">В корзину</button>
                    </div>
                `;
        // Добавляем карточку продукта в контейнер
        container.innerHTML += card;
    });
}

// Добавляем обработчик события клика на элементы меню
menu.addEventListener('click', event => {
    event.preventDefault(); // чтобы после выбора страны ( категории ) не скроллился экран вверх
    const category = event.target.closest('li').getAttribute('data-category'); // получаем выбранную категорию
    renderProducts(category); // высветить карточки выбранной категории
});

renderProducts('france'); // по умолчанию высвечиваются карточки франции