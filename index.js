import {catsData} from '/myData.js'

const emotionRadios  = document.getElementById('emotion-radios')

renderEmotionRadios(catsData)
emotionRadios.addEventListener('change' , highlightCheckedOption)

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

function renderEmotionRadios(){
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