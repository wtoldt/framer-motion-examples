import * as React from 'react';

const Button = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'button'>) => (
  <button
    className="min-w-32 rounded bg-slate-600/75 p-2 font-semibold text-slate-50
      hover:bg-slate-600 active:bg-slate-600/75"
    {...props}
  >
    {children}
  </button>
);
Button.displayName = 'Button';

export { Button };
