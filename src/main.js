let product = {
    id: 1,
    name: "Ecran",
    desc: "lorem",
    categorie: "Mobile",
    unitaryPrice: 29.99,
    quantity: 3
};

let product1 = {
    id: 2,
    name: "MSI",
    quantity: 2,
    desc: "lorem",
    categorie: "Laptop",
    unitaryPrice: 299.99,
    quantity: 3
};

let product3 = {
    id: 3,
    name: "Samsung",
    quantity: 2,
    desc: "lorem",
    categorie: "Phone",
    unitaryPrice: 99.99,
    quantity: 3
};

const addArticle = () => {
    // Add item to localStorage
    addIteminCart(product3);
}

const deleteArticle = () => {
    deleteItemInCart(product1)
}

window.addEventListener('load', () => {
    initCart();
})

const initCart = () => {
    if(getItemsInCart() != null) {
        let articles = getItemsInCart();

        articles.forEach(el => {
            createElementCart(el);
        })
    }
}

const updateElementCart = (article) => {
    if(document.querySelector(`.product-${article.id}`) != null) {
        document.querySelector(`.product-${article.id}`).innerHTML = `
        <div class="flex items-center space-x-6 p-4 rounded-lg w-80 relative">
        <div class="w-16 h-16 rounded-full bg-yellow-200 overflow-hidden">
            <img src="https://cap.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fcap.2F2022.2F05.2F03.2F6c0f1d2c-add0-4300-8fef-d054fddf0c8b.2Ejpeg/1200x630/background-color/ffffff/quality/70/cr/wqkgU2Ftc3VuZyAvIENBUElUQUw%3D/samsung-galaxy-s21-fe-amazon-propose-le-smartphone-a-un-prix-fou-1435478.jpg" alt="" class="w-full h-full object-cover">
        </div>
        <div class="flex">
            <div class="flex flex-col">
                <p class="font-bold text-gray-900 text-lg">${article.name}</p>
                <p class="text-gray-400 font-semibold">quantité : ${article.quantity}</p>
            </div>
            <div class="absolute bottom-2 right-2">
                <span class="font-bold text-xl text-indigo-500">${article.totalAmount}€</span>
            </div>
        </div>
        </div>
        `
        console.log('Update');
    }
}

const createElementCart = (article) => {
    let cartBloc = document.querySelector('.cart__items');
    let element = document.createElement('div');
    element.classList.add(`cart__item`);
    element.classList.add(`product-${article.id}`)
    element.innerHTML = `
    <div class="flex items-center space-x-6 p-4 rounded-lg w-80 relative">
    <div class="w-16 h-16 rounded-full bg-yellow-200 overflow-hidden">
        <img src="https://cap.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fcap.2F2022.2F05.2F03.2F6c0f1d2c-add0-4300-8fef-d054fddf0c8b.2Ejpeg/1200x630/background-color/ffffff/quality/70/cr/wqkgU2Ftc3VuZyAvIENBUElUQUw%3D/samsung-galaxy-s21-fe-amazon-propose-le-smartphone-a-un-prix-fou-1435478.jpg" alt="" class="w-full h-full object-cover">
    </div>
    <div class="flex">
        <div class="flex flex-col">
            <p class="font-bold text-gray-900 text-lg">${article.name}</p>
            <p class="text-gray-400 font-semibold">quantité : ${article.quantity}</p>
        </div>
        <div class="absolute bottom-2 right-2">
            <span class="font-bold text-xl text-indigo-500">${article.totalAmount}€</span>
        </div>
    </div>
    </div>
    `
    cartBloc.appendChild(element);
}