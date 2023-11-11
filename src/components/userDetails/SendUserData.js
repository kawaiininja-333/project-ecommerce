import axios from "axios";

async function SendUserData() {
  const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");

  try {
    const response = await axios({
      method: "GET",
      url: `http://127.0.0.1:5001/profile/${email}`,
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

export default SendUserData;
