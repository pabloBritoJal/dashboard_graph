import { useMutation } from "@tanstack/react-query";
import { FiltersData } from "../types/filtersData";
import { SendFiltersResponse } from "../types/sendFiltersResponse";
import { graphService } from "../services/graphService";

export const useSendFilters = () => {
  const {
    mutateAsync: sendFilters,
    isPending: isSending,
    isError,
    error,
    isSuccess,
    data,
  } = useMutation<SendFiltersResponse, Error, FiltersData>({
    mutationFn: async (filtersData) => {
      try {
        const response = await graphService.sendFilters(filtersData);
        return response;
      } catch (err) {
        console.error("Error al enviar filtros:", err);
        throw err;
      }
    },
  });

  return {
    sendFilters,
    isSending,
    isError,
    error,
    isSuccess,
    data,
  };
};
