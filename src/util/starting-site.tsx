export function displayText(text: string) {
  const words = text.split(" ");

  if (words.length === 2) {
    return (
      <>
        {words[0].toUpperCase()}
        <br />
        {words[1].toUpperCase()}
      </>
    );
  } else if (words.length > 2) {
    return (
      <>
        {words[0].toUpperCase()} {words[1].toUpperCase()}
        <br />
        {words.slice(2).join(" ").toUpperCase()}
      </>
    );
  } else {
    return text.toUpperCase();
  }
}
