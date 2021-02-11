function abbreviateString(str) {
    const length = str.split(" ").length;
    return (
      str.split(" ")[0] +
      " " +
      str.split(" ")[length - 1].substr(0, 1).toUpperCase() +
      "."
    );
  }
  
  export { abbreviateString };
  