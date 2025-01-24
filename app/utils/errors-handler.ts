export const errorHandler = (error: any) => {
  if (error?.errors) {
    return error.errors[0];
  }

  return error;
};
