// Ajoute un élément au panier ou incrémente la quantité
const addIteminCart = (article) => {
    if(localStorage.getItem('product-' + article.id) === null) {
        localStorage.setItem('product-' + article.id, JSON.stringify(article));
    } else {
        let item = JSON.parse(localStorage.getItem('product-' + article.id));
        item.quantity += article.quantity;
        localStorage.setItem('product-' + item.id, JSON.stringify(item));
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
