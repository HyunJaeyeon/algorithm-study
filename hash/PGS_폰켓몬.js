function solution(nums) {
  const max = nums.length;
  let noDuplication = [nums[0]];

  for (let i = 1; i < nums.length; i += 1) {
    // 중복되는 숫자 제거
    if (!noDuplication.includes(nums[i])) {
      noDuplication.push(nums[i]);
    }
  }
  // N/2보다 크면 N/2, 작으면 그 length
  return noDuplication.length > max / 2 ? max / 2 : noDuplication.length;
}
