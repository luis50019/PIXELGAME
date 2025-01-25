import { defineStore } from "pinia";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import auth from "../firebase/index.js";

import messageError from "./utils.js";

export const useUserStore = defineStore('userState',{
	state: () => ({ user: null, uid: null, error: null }),
	getters: {
		isActiveUser: (state) => ((state.user && state.uid) ? true : false)
	},
	actions: {
		async login(email, password) {
			try {
				const userCredential = await signInWithEmailAndPassword(auth, email, password);
				this.user = userCredential.user;
				this.uid = userCredential.user.uid;
				return {
					email: this.user.email,
					uid: this.uid
				}
			} catch (error) {
				this.error = messageError[error.code];
			}
			return;
		},
		async logout() {
			try {
				await signOut(auth);
				this.user = null;
				this.uid = null;
				this.error = null;
				return{
					email:null,
					error: null
				}
			} catch (error) {
				alert("Error al cerrar session");
			}
			return;
		},
		initializeAuthListener() {
			return onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user.email
          this.uid = user.uid
        } else {
          this.user = null
          this.uid = null
        }
      })
		}
		
	}
})
