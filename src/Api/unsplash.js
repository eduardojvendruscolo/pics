import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID uo6AnxFTBSs2di1uPneZXe9hKz3sg1BanYkuNUQR0i8"
  }
});
