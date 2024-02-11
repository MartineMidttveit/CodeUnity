import pageSpecific from "./pageSpecific.js";
import requests from "../../api/auth/requests/index.js";

const data = await pageSpecific();

await requests.profileMedia(
  {
    avatar: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1200px-Google_Chrome_icon_%28February_2022%29.svg.png",
      alt: "user avatar",
    },
  },
  data.profile.name
);
console.log(data.profile);
