function debounce(fn, timeInMs) {
  let debounceTimer;
  return () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(fn, timeInMs);
  };
}

export { debounce };
