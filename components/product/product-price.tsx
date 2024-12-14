interface ProductPriceProps {
  price: number;
  currency?: string;
}

export function ProductPrice({ price, currency = "USD" }: ProductPriceProps) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price);

  return (
    <p className="text-lg font-bold text-primary">
      {formattedPrice}
    </p>
  );
}