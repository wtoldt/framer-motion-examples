import * as React from 'react';

type ExampleSectionProps = React.ComponentPropsWithoutRef<'section'> & {
  heading: string
}

const ExampleSection = ({ children, heading }: ExampleSectionProps) => (
  <section className="flex w-full flex-col items-center justify-center gap-2 p-5">
    <h2 className="text-center text-5xl underline">{heading}</h2>
    {children}
  </section>
);
ExampleSection.displayName = 'ExampleSection';

export { ExampleSection };
