import axios from "axios";
import config from "./api.config";
import ResponsePayload from "../../interfaces/ResponsePayload";

interface RequestParams {

    platform?: string,
    language?: string,
}

const makeRequest = async (
    endpoint: string,
    {platform = "pc", language = "en"}: RequestParams = {}
): Promise<ResponsePayload> => {
    try {
        const response = await axios.get(
            `${config.API_BASE_URL}${endpoint}`,
            {
                timeout: 20000,
                headers: {
                    platform,
                    language
                }
            }
        );

        return response.data.payload;
    } catch (e) {
        if (e.code == "ECONNABORTED") {
            console.log("Connection timeout exceeded");
        }

        throw e;
    }
}

export default makeRequest;