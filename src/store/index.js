import { defineStore } from "pinia";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import messageError from "./utils.js";
import auth from "../firebase/index.js";

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
					user: null
				}
			} catch (error) {
				alert("Error al cerrar session");
			}
			return;
		},
		
	}
})
