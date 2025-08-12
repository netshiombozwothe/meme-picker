import {catsData} from '/myData.js'

const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal')
const memeModalCloseBtn = document.getElementById('meme-modal-close-btn')


renderEmotionRadios(catsData)
emotionRadios.addEventListener('change' , highlightCheckedOption)
getImageBtn.addEventListener('click', renderCat)
memeModalCloseBtn.addEventListener('click', closeModal)

function getEmotionTagsArray(){
const emotionsArray = []

for(let cats of catsData){
    for(let emotions of cats.emotionTags){
        if (!emotionsArray.includes(emotions)){
        emotionsArray.push(emotions)
        }
    }
}
return emotionsArray
}

function renderEmotionRadios(catsData){
    let radioItems = ''
    const emotions = getEmotionTagsArray()

    for (let emotion of emotions){
        radioItems += `
        <div class="radio">
        <label for="${emotion}">${emotion}</label>
        <input type="radio"
        id="${emotion}"
        name="emotions"
        value="${emotion}"
        >
        </div>
        `
    }
    emotionRadios.innerHTML = radioItems
}
function highlightCheckedOption(event){
    const radios = document.getElementsByClassName('radio')
     for (let radio of radios){
        radio.classList.remove('highlight')
    }
        document.getElementById(event.target.id).parentElement.classList.add('highlight')

}
function renderCat(){
    const catObject = getSingleCatObject()
    memeModalInner.innerHTML  = `
    <img class="cat-img" 
        src="./images/${catObject.image}"
        alt="${catObject.alt}"
        >`
    memeModal.style.display = 'flex'

}

function getSingleCatObject(){
    const catsArray = getMatchingCatsArray()

    if(catsArray.length === 1){
        return catsArray[0]
    }else{
        const randomNumber = Math.floor(Math.random() * catsArray.length)
        return catsArray[randomNumber]
    }
}
function getMatchingCatsArray(){
    if(document.querySelector('input[type="radio"]:checked')){
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        const isGif = gifsOnlyOption.checked

        const matchingCatsArray = catsData.filter(function(cat){
            if(isGif){
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif
            }
            else{
                return cat.emotionTags.includes(selectedEmotion)
            }            
        })
        return matchingCatsArray 
    }  
}

function closeModal(){
    memeModal.style.display = 'none'
}
