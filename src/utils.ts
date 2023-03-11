import axios from "axios";

interface IRequestParams {
    item?: string;
    platform?: string;
    language?: string;
}

interface IResponsePayload {
    // Define the type of the response payload here
}

const config = {
    API_BASE_URL: "https://example.com/api/v1",
};

const makeRequest = async (
    endpoint: string,
    params: IRequestParams = {}
): Promise<IResponsePayload> => {
    try {
        const {item = null, platform = "pc", language = "en"} = params;

        const response = await axios.get<IResponsePayload>(
            `${config.API_BASE_URL}${endpoint}${item ? `/${item}` : ""}`,
            {
                headers: {
                    platform,
                    language,
                },
            }
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};
export default {
    makeRequest
}