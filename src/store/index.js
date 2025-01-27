import { defineStore } from "pinia";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged,createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/index.js";

import messageError from "./utils.js";

export const useUserStore = defineStore('userState',{
	state: () => ({ user: null, uid: null,isAutentication: false, error: null }),
	getters: {
		isActiveUser: (state) => ((state.user && state.uid) ? true : false)
	},
	actions: {
		async login(email, password) {
			try {
				const userCredential = await signInWithEmailAndPassword(auth, email, password);
				this.user = userCredential.user.email;
				this.uid = userCredential.user.uid;
				return {
					user: this.user,
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
					user:null,
					error: null
				}
			} catch (error) {
				alert("Error al cerrar session");
			}
			return;
		},
    async registerNewUser(email, password) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user.email;
        this.uid = userCredential.user.uid;

        return {
          user: this.user,
          uid: this.uid
        }


      } catch (error) {
        console.log({Error: error})
      }
      return ;
    },
		async initializeAuthListener() {
			try {
				return new Promise((resolve) => {
					onAuthStateChanged(auth, (user) => {
						if (user) {
							this.$patch({
								user: user.email,
								uid: user.uid
							});
						} else {
							this.$patch({
								user: null,
								uid: null
							});
						}
						this.isAuthLoaded = true; // Marca como cargado
						resolve();
					});
				});
			} catch (error) {
				console.log("Error en initializeAuthListener:", error);
			}
		}
		
		
	}
})
