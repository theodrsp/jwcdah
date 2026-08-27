function twoSum(nums: number[], target: number): number[] {
    for (let i: number = 0; i<nums.length; i++) {
        for (let j: number = i+1; j<nums.length; j++){
            if (nums[i]! + nums[j]! === target) {
                return[i,j]
            }
        }
    }
    return[]
}

const numsArr = [2, 7, 11, 15];
console.log(twoSum(numsArr, 9)); // [0, 1]