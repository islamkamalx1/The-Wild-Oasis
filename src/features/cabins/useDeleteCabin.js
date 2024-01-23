import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

export function useDeleteCabin() {
  // connect to the query instance
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    // on delete we want to invalidate the query [re-fetch]
    onSuccess: () => {
      toast.success("Cabin was successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },

    // The error thrown in the mutation function [deleteCabin]
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
