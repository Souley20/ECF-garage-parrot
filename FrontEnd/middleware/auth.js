import {useUserStore} from "~/stores/userStore.js";
import pinia from "~/stores/index.ts";

export default  defineNuxtRouteMiddleware((to, from) => {


const userStore = useUserStore(pinia())
    const router = useRouter()
    const auth = sessionStorage.getItem("auth")
    console.log(auth)
    if (userStore.isAuth === true)  {


    } else {

        router.push('/login')

    }




})