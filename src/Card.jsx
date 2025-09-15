// function Card({ title, description, imageUrl }) {
//   return (
//     <article className="card">
//       <img src={imageUrl} alt="card image" />
//       <h2>{title}</h2>
//       <div>{description}</div>
//     </article>
//   );
// }

// แก้ไขบรรทัดที่ 4 alt ของ <img> แก้ไขจาก "card image" เป็นใช้ title เป็นค่า alt
//  แก้ไขบรรทัดที่ 5 ใช้ <h2> แสดงหัวข้อ แต่ Requirement กำหนดให้ใช้ <h3>
// แก้ไขบรรทัดที่ 6 ใช้ <div> แสดงคำอธิบาย แต่ Requirement กำหนดให้ใช้ <p>

function Card({ title, description, imageUrl }) {
  return (
    <article className="card">                    
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
export default Card;
