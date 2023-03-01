const names = [
    'GROUP 1',
    'GROUP 2',
    'GROUP 3',
    'GROUP 4',
    'GROUP 5',
    'GROUP 6',
    'GROUP 7',
    'GROUP 8'
]


const randomBtn = document.querySelector('.randomBtn') 
const student = document.querySelector('.student') 
let soundEffects = new Audio('click.wav')
//Randomizing the names
for (let i = 0; i < names.length; i++) {
    const randomPosition = Math.floor((names.length - i) * Math.random())
    const randomItem = names.splice(randomPosition, 1)
    
    names.push(...randomItem)
}

function getRandomName (){
    if(names.length !== 0){
        // student.innerText = names.pop() 
        student.innerText = names.pop() 
        soundEffects.play()
        console.log(names)
        }
    }

randomBtn.addEventListener('click', getRandomName)

