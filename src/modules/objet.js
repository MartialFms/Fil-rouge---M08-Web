// constructeur

class Article{
    constructor(id, name, desc, categorie, unitaryPrice, quantity){
        this.id= id;
        this.name = name;
        this.desc = desc;
        this.categorie= categorie;
        this.unitaryPrice= unitaryPrice;
        this.quantity= quantity;
    }
    }

    //creation
    let S9 = new Article('1', 'Galaxy S9', 'Samsung Galaxy S9 en 64 Go de couleur noir', 'Smartphone', 179, 0);
    let Iphone13 = new Article('2', 'Iphone 13', 'Iphone 13 Pro Max 128 Go couleur or/argent', 'Smartphone', 995.90, 0);
    let Imac = new Article('3', 'iMac Mi-2017', 'Apple iMac 2017, Core i5 2,6 Ghz, HDD 1To, RAM 8 Go', 'Desktop', 995.90, 0);
    let AcAspire = new Article('4', 'Acer XC-830', 'Acer Aspire - SFF XC-830, Pentium Silver J5040', 'Desktop', 995.90, 0);
    let MacBook = new Article('5', 'MacBook Pro Retina 2015', 'Apple MacBook Pro 13" Retina 2015, Core i5 2,7 Ghz, SSD 1 To', 'Portable', 560.99 , 0);
    let Lenovo = new Article('6', 'Lenovo P50S', 'Lenovo Thinkpad P50S, core i5 2,4 Ghz, 240 SSD, 16 Go RAM', 'Portable', 890.99, 0);
    let Huawei = new Article('7', 'Huawai P40', 'Huawei P40 Lite, ecran 6,4 pouce et couleur ambre', 'Portable', 199.99, 0);

    // mise de mise en variable
    //let articleA = S9.report();
    console.log(AcAspire);

    const articleList = [S9, Iphone13, Imac, AcAspire, MacBook,Huawei];
    export {articleList};


//test
const testArticleList =article_list.forEach (articles => console.log(articles));

 const showArticleList = article_list.forEach (targetArticle => {
    let articles = document.querySelector('.article_list');
    let targetArticle = document.createElement('div');
    targetArticle.classList.add(`.article_list`);
    targetArticle.innerHTML = 
    `
    <div class="flex items-center space-x-6 p-4 rounded-lg w-80 relative">
    <div class="w-16 h-16 rounded-full bg-yellow-200 overflow-hidden">
        <img src="https://cap.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fcap.2F2022.2F05.2F03.2F6c0f1d2c-add0-4300-8fef-d054fddf0c8b.2Ejpeg/1200x630/background-color/ffffff/quality/70/cr/wqkgU2Ftc3VuZyAvIENBUElUQUw%3D/samsung-galaxy-s21-fe-amazon-propose-le-smartphone-a-un-prix-fou-1435478.jpg" alt="" class="w-full h-full object-cover">
    </div>
    <div class="flex">
        <div class="flex flex-col">
            <p class="font-bold text-gray-900 text-lg">${article.name}</p>
            <p class="text-gray-400 font-semibold">quantité : ${article.desc}</p>
            <p class="text-gray-400 font-semibold">quantité : ${article.unitaryPrice}</p>
        </div>
        <div class="absolute bottom-2 right-2">
            <span class="font-bold text-xl text-indigo-500">${article.quantity}€</span>
        </div>
    </div>
    </div>
    `
    articles.appendChild(articles)
});



