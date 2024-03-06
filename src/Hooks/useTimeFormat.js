export const useTimeFormat = (timeBlock) => {
    const splittedFirstValue = parseInt(
        timeBlock.firstValue.toString().split(".")[0]
      );
      const remainderFirst = timeBlock.firstValue % splittedFirstValue;
      const fractionFirstTimeString = remainderFirst == 0.5 ? ".30" : ".00";
      const splittedSecondValue = parseInt(
        timeBlock.secondValue.toString().split(".")[0]
      );
      const remainderSecond = timeBlock.secondValue % splittedSecondValue;
      const fractionSecondTimeString = remainderSecond == 0.5 ? ".30" : ".00";

      return {splittedFirstValue, fractionFirstTimeString, splittedSecondValue, fractionSecondTimeString}
}