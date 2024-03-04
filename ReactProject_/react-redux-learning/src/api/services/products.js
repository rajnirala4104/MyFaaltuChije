import { ENDPOINT } from "../constants"
import { http } from "../http"

export const getAllTheProducts = async () => {
    return http.get(ENDPOINT.product)
}