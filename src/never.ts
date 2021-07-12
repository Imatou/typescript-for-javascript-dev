function error(message: string): never {
  throw new Error(message);

}
try {
  error('test error!!');
} catch (error) {
  console.log({ error });
}
