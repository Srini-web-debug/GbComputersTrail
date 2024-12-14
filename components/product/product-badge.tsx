import { cn } from '@/lib/utils';

interface ProductBadgeProps {
  variant?: 'inStock' | 'lowStock' | 'outOfStock';
  children: React.ReactNode;
}

export function ProductBadge({ variant = 'inStock', children }: ProductBadgeProps) {
  return (
    <span className={cn(
      "px-2 py-1 text-xs font-medium rounded-full",
      {
        'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100': variant === 'inStock',
        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100': variant === 'lowStock',
        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100': variant === 'outOfStock',
      }
    )}>
      {children}
    </span>
  );
}