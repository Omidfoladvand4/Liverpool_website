const $ = document
const advertisementImagesContainerElm = $.querySelector('.advertisement-image')
const newsContainer = $.querySelector('.news-container')
const womenNewsContainer =  $.querySelector('.women-section')


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