import { app } from "./auth.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js";

if (localStorage.getItem("user") == "undefined") {
  window.location = "login.html";
}

<<<<<<< HEAD
let quesQuesHTML = []

const code = window.location.search.split('code=')[1]
const db = getFirestore(app)
const quizIdCol = collection(db, 'quiz')
const quizSnapshot = await getDocs(quizIdCol)
const quizObject = quizSnapshot.docs.map((doc) => doc.data())
const myQuiz = quizObject.filter((quiz) => quiz.quizId == code)
const title = myQuiz[0].title

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms)
    }, ms)
  })
}

document.getElementById('h1').innerText = title
Object.entries(myQuiz[0].ques).forEach((i) => {
  console.log(i)
  let optionsHTML = ''
  const options = i[1].option
  for (let j = 0; j < options.length; j++) {
    optionsHTML += `<label for="option${
      j + 1
    }"><input type="radio" name="options" value="${
      j + 1
    }" onclick="clickedOption(this, ${i[1].ans})"/>${options[j]}</label>`
  }
  quesQuesHTML.push({
    ques: `${i[1].question}`,
    optionsHTML: optionsHTML,
  })
})

console.log(quesQuesHTML)

for (let i = 0; i < quesQuesHTML.length; i++) {
  console.log(i)
  document.getElementById('ques').innerText = quesQuesHTML[i].ques
  document.getElementById('options').innerHTML = quesQuesHTML[i].optionsHTML
  await delay(5000)
}
=======
const addScore = (score) => {}

let j = 0;

const code = window.location.search.split("code=")[1];
const db = getFirestore(app);
const quizIdCol = collection(db, "quiz");
const quizSnapshot = await getDocs(quizIdCol);
const quizObject = quizSnapshot.docs.map((doc) => doc.data());
const myQuiz = quizObject.filter((quiz) => quiz.quizId == code);
const title = myQuiz[0].title;

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms/5000);
    }, ms);
  });
};

document.getElementById("h1").innerText = title;

let quizQuesLen = Object.entries(myQuiz[0].ques).length;

Object.entries(myQuiz[0].ques).forEach(async (i) => {
  j++;
  await delay(5000 * j).then((quesNum) => {
    document.getElementById("num").innerHTML = `<p>${quesNum} / ${quizQuesLen}</p>`;
    document.getElementById("options").innerHTML = "";
    document.getElementById("ques").innerText = `${i[0]} ${i[1].question}`;
    const ans = i[1].ans;
    const options = i[1].option;
    for (let k = 0; k < options.length; k++) {
      document.getElementById(
        "options"
      ).innerHTML += `<label class="ql" for="option${
        k + 1
      }"><input type="radio" name="options" id="option${k + 1}" value="${
        k + 1
      }" onclick="clickedOption(this, ${ans})"/>${options[k]}</label>`;
    }
  });
});
delay(5000 * (quizQuesLen+1)).then(() => {
  document.getElementById('quiz').innerHTML = 
  `Score = ${
    document.getElementById('score').innerText}`
  addScore(score);
  delay(5000).then(()=>{
    window.location = "dashboard.html"
  })

});

>>>>>>> e654935ad06e79ed4908dc2ef7f9a937919c88de
