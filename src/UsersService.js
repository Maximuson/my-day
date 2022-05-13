import axios from "axios";
import {FIREBASE_API_KEY} from "./consts"

class UsersService {
  static async getUserData(name = "") {
    const response = await axios.get(
      `https://my-day-sandbox-default-rtdb.europe-west1.firebasedatabase.app/users/${name}.json`
    );
    return response.data;
  }

  static async addUser({ name = "", password = "" }) {
    const isExist = await this.getUserData(name);

    if (isExist) {
      return { isExist: true };
    }

    const response = await axios.put(
      `https://my-day-sandbox-default-rtdb.europe-west1.firebasedatabase.app/users.json/`,
      {
        [name]: {
          password: password,
        },
      }
    );

    return response.data;
  }

  static async signUp({email, password}) {
    const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`, {
            email,
            password
        }
      );
      return response.data;
  }

  static async login({email, password}) {
    const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`, {
            email,
            password
        }
      );
      return response.data;
  }

  static async addTask(name, task) {
    const response = await axios.put(
      `https://my-day-sandbox-default-rtdb.europe-west1.firebasedatabase.app/`
    );
  }
}

export default UsersService;
