export function getGreeting(fName, ...emotions) {
  if (fName === undefined) {
    throw new Error("You need to provide arguments");
  }
  let emotionString = emotions.join(", ");
  const rege = /,(?=[^,]*$)/;
  emotionString = emotionString.replace(rege, " and");
  return `Hello ${fName}! ${
    emotions.length === 0
      ? "So are you not feeling anything specific today?"
      : `It seems you are feeling ${emotionString}.`
  }`;
}
