const $ = document
const advertisementImagesContainerElm = $.querySelector('.advertisement-image')
const newsContainer = $.querySelector('.news-container')
const womenNewsContainer =  $.querySelector('.women-section')
const tabList = $.querySelectorAll('.shop-list-item')
const productsContainer = $.querySelector('.products-container')


const advertisementImages = [
    './images/ad-image.png', './images/ad-image3.gif', 
]
const newsData = [
    {id:1 , name : "news" , dateTitle : "news-date" , newsTitle : 'newsTitle' , title : "Luis Diaz reveals the Premier League record he wants to break" , date : '17 hours ago' , imageSrc: './images/luis-diaz-liverpool-fc-.webp' },
    {id:2 , name : "news" , dateTitle : "news-date" , newsTitle : 'newsTitle' , title : "Compilation: Watch Liverpool's 101 goals so far this season" , date : '13 hours ago' , imageSrc: './images/101-goals-compilation.webp' },
    {id:3 , name : "news" , dateTitle : "news-date" , newsTitle : 'newsTitle' , title : "Voting open for Liverpool's Men's Player of the Month in February" , date : '19 hours ago' , imageSrc: './images/february-potm-vote.webp' },
    {id:4 , name : "news" , dateTitle : "news-date" , newsTitle : 'newsTitle' , title :  "Improve your LFC experience by joining MyLFC for exclusive offers, rewards and content.", date : '2 days ago' , imageSrc: './images/mac-allister-ipswich-team.webp' },
    {id:5 , name : "news" , dateTitle : "news-date" , newsTitle : 'newsTitle' , title : "Four Premier League fixture changes for Liverpool in April" , date : '2 days ago' , imageSrc: './images/premier-league-ball-feb2025.webp' },
    {id:6 , name : "news" , dateTitle : "news-date" , newsTitle : 'newsTitle' , title : "LFC announces financial results for the 2023-24 season" , date : '23 hours ago' , imageSrc: './images/anfield-statement.webp' },
]
const WomenNewsData = [
    {id:1 , name : "women-news" , dateTitle : "womenNews-date" , newsTitle : 'womenNewsTitle' , title : "Amber Whiteley interview: Admiration for Matt Beard and Crystal Palace trip" , date : '20 hours ago' , imageSrc: './images/amber-whiteley-liverpool-fc.webp' },
    {id:2 , name : "women-news" , dateTitle : "womenNews-date" , newsTitle : 'womenNewsTitle' , title : "Training photos: Liverpool prepare for WSL resumption at Crystal Palace" , date : '1 days ago' , imageSrc: './images/LFCW-training-main.webp' },
    {id:3 , name : "women-news" , dateTitle : "womenNews-date" , newsTitle : 'womenNewsTitle' , title : "Liverpool FC parts company with Matt Beard" , date : ' 2 weeks ago' , imageSrc: './images/matt-beard-thank-you.webp' },
]
const products = [
    {id:1 , name: 'product' , image: './images/product-1.jpg' , label: 'OFF TO WEMBLEY' ,  title :'LFC Walk On Mug'  , price : '$12.22'},
    {id:2 , name: 'product' , image: './images/product-2.jpg' , label: 'OFF TO WEMBLEY' ,  title :'LFC Adults This Is Anfield South Tee Black'  , price : '$25.22'},
    {id:3 , name: 'product' , image: './images/product-3.jpg' , label: 'OFF TO WEMBLEY' ,  title :'LFC Juniors This Is Anfield South Tee Black'  , price : '$18.22'},

    {id:4 , name: 'product' , image: './images/product-4.jpg' , label: '24-25| HOME KIT' ,  title :'LFC Nike Mens 24/25 Home Stadium Jersey'  , price : '$80.00'},
    {id:5 , name: 'product' , image: './images/product-5.jpg' , label: '24-25| HOME KIT' ,  title :'LFC Nike Little Kids 24/25 Home Kit'  , price : '$41.00'},
    {id:6 , name: 'product' , image: './images/product-6.jpg' , label: '24-25| HOME KIT' ,  title :'LFC Nike Mens 24/25 Home Match Jersey'  , price : '$110.00'},
    {id:7 , name: 'product' , image: './images/product-7.jpg' , label: '24-25| HOME KIT' ,  title :'LFC Nike Youth 24/25 Home Stadium Jersey'  , price : '$60.00'},
    {id:8 , name: 'product' , image: './images/product-8.jpg' , label: '24-25| HOME KIT' ,  title :'LFC Nike Infants 24/25 Home Kit'  , price : '$37.00'},

    {id:9 , name: 'product' , image: './images/product-9.jpg' , label: 'YOU MAY LIKE' ,  title :'LFC Nike Youth 24/25 Strike Drill Top Black'  , price : '$50.00'},
    {id:10 , name: 'product' , image: './images/product-10.jpg' , label: 'YOU MAY LIKE' ,  title :'LFC Nike Mens Therma-FIT Winter Repel Top Teal'  , price : '$140.00'},
    {id:11, name: 'product' , image: './images/product-11.jpg' , label: 'YOU MAY LIKE' ,  title :'LFC Quarter Zip Fleece'  , price : '$40.00'},


]



const tabListHandler = (e) => {
    productsContainer.innerHTML = ""
    tabList.forEach(tabItem => {
        tabItem.classList.remove('active')
    })
    e.target.classList.add('active')
    const labelTabList = e.target.innerText
    const filteredProducts = products.filter(product => product.label === labelTabList);
    
    filteredProducts.forEach(product => {
        productsContainer.insertAdjacentHTML('beforeend' , `
               <div class="${product.name}">
                       <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-title">${product.title}</div>
                <div class="product-price">${product.price}</div>
                 <div class="product-button">BUY NOW</div>
            </div>

            `)
    })
    

}

const advertisementSlider = () => {
    let count = 0
    setInterval(() => {
        count++
        if(count === advertisementImages.length){
            count = 0
        }
        advertisementImagesContainerElm.src = advertisementImages[count]
    } , 3500)
    
}

advertisementSlider()

const generateNewsItems = (items , container) => {
    items.forEach((item) => {
        container.insertAdjacentHTML('beforeend' , `
               <div class=${item.name}>
                <img src=${item.imageSrc} alt="">
                <div class= ${item.dataTitle}>${item.date}</div>
                <div class=${item.newsTitle}>
                    ${item.title}
                </div>
            `)
    })
}


generateNewsItems(newsData ,newsContainer )
generateNewsItems(WomenNewsData ,womenNewsContainer)
tabList.forEach(tabItem  => {
    tabItem.addEventListener('click' , tabListHandler)
})