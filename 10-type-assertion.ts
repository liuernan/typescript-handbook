{
  let a: unknown;

  (a as string).length;
  (<string>a).length;
}
