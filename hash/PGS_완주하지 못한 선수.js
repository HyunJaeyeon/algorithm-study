var completion = ["stanko", "ana", "mislav"];
var participant = ["mislav", "stanko", "mislav", "ana"];
// var completion = ["josipa", "filipa", "marina", "nikola"];
// var participant = ["marina", "josipa", "nikola", "vinko", "filipa"];

function solution(participant, completion) {
  var answer = "";
  answer = completion.filter((person) => !participant.includes(person));
  return answer;
}

console.log(solution(participant, completion));
