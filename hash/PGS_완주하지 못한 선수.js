function solution(participant, completion) {
  // 참가자 완주자 알파벳 순으로 정리함 -> 전부 완주 시, 두 배열의 이름.인덱스가 같을 것이다.
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i += 1) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

var participant = ["mislav", "stanko", "mislav", "ana"];
var completion = ["stanko", "ana", "mislav"];
// var completion = ["josipa", "filipa", "marina", "nikola"];
// var participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
console.log(solution(participant, completion));
