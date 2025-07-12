function printNumber(sRange, eRange) {
  // Base Case
  if (sRange > eRange) {
    return;
  }
  console.log(sRange);
  printNumber(sRange + 1, eRange);
}
printNumber(1, 5);
