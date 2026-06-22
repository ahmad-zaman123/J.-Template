// Format a number as a PKR price string (e.g. 2,590.00).
export const formatPrice = (value) => {
  const n = Number(value);
  if (!Number.isFinite(n)) return value ?? "";
  return n.toLocaleString("en-PK", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};
