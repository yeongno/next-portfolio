// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { DATABASE_ID, TOKEN } from "../../config";
// //빌드 타임에 호출
// export default async function getStaticProps1() {
// const options = {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Notion-Version': '2022-06-28',
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${TOKEN}`
//   },
//   data: JSON.stringify({
//     sorts: [
//       {
//         property: 'title',
//         direction: 'ascending'
//       }
//     ],
//     page_size: 100
//   })
// };

// try {
//   const res = await axios.post(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);

//   const projects = res.data;
//   // Continue with your code logic here using the 'projects' variable
//   console.log(res, "res")
// } catch (error) {
//   console.error('Error:', error.message);
//   }
  

  
// }