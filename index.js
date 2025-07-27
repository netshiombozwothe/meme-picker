
import {catsData} from '/data.js'

const emotionRadios = document.getElementById('emotion-radios')

renderEmotionRadios()

function renderEmotionRadios(){

    for (let cats of catsData){
        for (let emotions of cats.emotionTags){
             emotionRadios.innerHTML +=
                  `<div class="radio" id="radio">
                  <label for="${emotions}">${emotions}</label>
                  <input type="radio" class="change-color" id="${emotions}"></input>

                 </div>`
        }

    }
}
