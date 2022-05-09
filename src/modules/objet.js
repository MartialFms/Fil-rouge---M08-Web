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



//test
articleList.forEach (articles => console.log(articles));

articleList.forEach (article => {
    let articles = document.querySelector('.article_list');
    let targetArticle = document.createElement('div');
    targetArticle.classList.add(`article_list`);
    targetArticle.classList.add(`product-${article.id}`)
    targetArticle.innerHTML = 
    `
    <div class="article_list p-2">
        <div class="flex bg-green-200 shadow rounded items-center space-x-6 p-4 rounded-lg w-[700px] relative">
            <div class="w-16 h-16 rounded-full bg-yellow-200 overflow-hidden">
                <img src="">
            </div>
            <div class="flex">
                <div class="flex flex-col">
                    <p class="font-bold text-gray-900 text-lg">${article.name}</p>
                    <p class="text-gray-400 font-semibold">${article.desc}</p>

                </div>
                <div class="flex flex-col">
                    <p class="text-gray-400 font-semibold">${article.unitaryPrice} €</p>
                </div>
                <div class="absolute bottom-2 right-2 flex items-center">
                    <button onclick="ATest()" class="px-4 py-2 bg-red-600 text-white font-bold rounded-l-lg">-</button>
                    <span class="px-4 py-2 bg-gray-100 text-white font-bold font-bold text-xl text-indigo-500">${article.quantity}</span>
                      <button onclick="ATest()" class="px-4 py-2 bg-blue-600 text-white font-bold rounded-r-lg">+</button>
                </div>
            </div>
            </div>
    </div>
    `
    articles.appendChild(targetArticle);
});

const ArticleUp = (article) => {

        var value = parseInt(document.getElementById(this.quantity));
        value ++;
        document.getElementById(document.getElementById(this.quantity)).value = value;

        articleList.forEach (articles => console.log(articles));
}

const ArticleDown = (article) => {

    var value = parseInt(document.getElementById(this.quantity));

    if(value>0) {
        value --;
        document.getElementById(document.getElementById(this.quantity)).value = value;
    
        articleList.forEach (articles => console.log(articles));
    }
}
