function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
generateError("Error Occured!!", 500);
