const nums = [1, -2, 3, -4, 5];

// function lastNegativeIndex(nums) {
//   let idx = -1;
//   for (let i = nums.length; i >= 0; i--) {
//     if (nums[i] < 0) {
//       idx = i;
//     }
//   }
//   return idx;
// }

// โค้ดเดิมผิดพลาดที่บรรทัดที่ 5
// เพราะเริ่มต้น i = nums.length ซึ่งเกินขอบเขตอาเรย์ (index สูงสุดคือ nums.length - 1)
// ทำให้เช็ก nums[nums.length] ซึ่งเป็น undefined และทำให้ผลลัพธ์ไม่ถูกต้อง
// แก้ไขเป็นการวนลูปจากซ้ายไปขวา (i = 0 ถึง i < nums.length)
// เพื่อหา index ของเลขติดลบตัวสุดท้ายที่เจอ

function lastNegativeIndex(nums) {
  let idx = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      idx = i;
    }
  }
  return idx;
}

console.log(lastNegativeIndex(nums));

// ตัวอย่างการทำงานที่ถูกต้อง
console.log(lastNegativeIndex([1, -2, 3, -4, 5])); // 3
console.log(lastNegativeIndex([-1, -2, -3])); // 2
console.log(lastNegativeIndex([1, 2, 3])); // -1 (ถ้าไม่มีจำนวนติดลบ ต้อง return -1)