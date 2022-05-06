// Ajoute un élément au panier ou incrémente la quantité
const addIteminCart = (article) => {
    if(localStorage.getItem('product-' + article.id) === null) {
        let total = Math.round(((article.quantity * article.unitaryPrice) * 100) / 100);
        let totalPrice = { totalAmount: total };
        let newItem = Object.assign(article, totalPrice);
        localStorage.setItem('product-' + article.id, JSON.stringify(newItem));
        createElementCart(newItem);
    } else {
        let item = JSON.parse(localStorage.getItem('product-' + article.id));
        console.log(item.totalAmount);
        item.quantity += article.quantity;
        let total = Math.round((((article.quantity * article.unitaryPrice) * 100) / 100)) + item.totalAmount;
        console.log(total);
        item.totalAmount = item.totalAmount + (article.quantity * article.price);
        localStorage.setItem('product-' + item.id, JSON.stringify(item));
        updateElementCart(item);
    }
}

// Supprime un élément du panier ou décrémente sa quantité
const deleteItemInCart = (article) => {
    if(localStorage.getItem('product-' + article.id) != null) {
        let item = JSON.parse(localStorage.getItem('product-' + article.id));
        if(item.quantity - article.quantity <= 0) {
            localStorage.removeItem('product-' + article.id);
        } else {
            item.quantity -= article.quantity;
            localStorage.setItem('product-' + article.id, JSON.stringify(item))
        }
    }
}

// Vide complètement le panier
const clearCart = () => {
    localStorage.clear();
}


// Renvoi la liste des articles dans le panier
const getItemsInCart = () => {
    let articles = [];
    for(let i = 0; i < localStorage.length; i++) {
        articles.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    return articles;
}
