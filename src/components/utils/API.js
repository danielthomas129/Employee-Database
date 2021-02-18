import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API
async function getRandomUser() {
  return await axios.get("https://randomuser.me/api/");
}

async function getTenRandomUser() {
  return await axios.get("https://randomuser.me/api/?results=10");
}

const exportObject = {
  getRandomUser, 
  getTenRandomUser
}


export default exportObject;
