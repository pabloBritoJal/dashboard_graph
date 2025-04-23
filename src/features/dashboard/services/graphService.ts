import { apiRequest } from "../../../services/apiRequest";
import { FiltersData } from "../types/filtersData";

type SendFiltersResponse = {
  success: boolean;
  message: string;
};

export const graphService = {
  sendFilters: async (data: FiltersData): Promise<SendFiltersResponse> => {
    try {
      const response = await apiRequest.post("auth", "filters", data);
      return response.data as SendFiltersResponse;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message || "Error sending filters");
      }
      throw new Error("Unknown error sending filters");
    }
  },
};
