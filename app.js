const $ = document
const advertisementImagesContainerElm = $.querySelector('.advertisement-image')


const advertisementImages = [
    './images/ad-image.png', './images/ad-image3.gif', 
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