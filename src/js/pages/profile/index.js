import pageSpecific from "./pageSpecific.js";
import requests from "../../api/auth/requests/index.js";

const data = await pageSpecific();

// await requests.profileMedia(
//   {
//     avatar: {
//       url: "https://st.depositphotos.com/1779253/5140/v/950/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg",
//       alt: "user avatar",
//     },
//   },
//   data.profile.name
// );
// console.log(data.profile);
