function constructionCrew(worker) {
   if(worker.handsShaking == true) {
       worker.bloodAlcoholLevel += worker.weight * 0.1;
       worker.handsShaking = false;
   }

   return worker;
}

console.log(constructionCrew({
    weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true
}));

console.log(constructionCrew({
    weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: false
}));