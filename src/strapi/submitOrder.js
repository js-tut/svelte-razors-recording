import axios from "axios";
import url from "./URL";
let user = JSON.parse(localStorage.getItem("user"));

async function submitOrder({ name, total, items, tokenId }) {
  const response = await axios
    .post(
      `${url}/orders`,
      {
        name,
        total,
        items,
        tokenId
      },
      {
        headers: {
          Authorization: `Bearer ${user.jwt}`
        }
      }
    )
    .catch(error => console.log(error));

  return response;
}

export default submitOrder;
