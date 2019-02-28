/**
 * Pick properties from Props to use in properly typed DefaultProps.
 * Use union to pick multiple properties.
 *
 * Usage:
 * ```ts
 *   interface ExampleProps {
 *     foo: string;
 *     bar: number;
 *     baz: () => void;
 *   }
 *
 *   const exampleDefaultProps: PickDefaultProps<ExampleProps, 'foo' | 'bar'> = {
 *     foo: 'baz',
 *     bar: 42
 *   };
 *
 *   class ExampleComponent extends React.PureComponent<ExampleProps> {
 *     public static defaultProps = exampleDefaultProps;
 *     ...
 *   }
 * ```
 */
export type PickDefaultProps<Props, defaultPropsKeys extends keyof Props> = Readonly<Required<{
  [P in defaultPropsKeys]: Props[P];
}>>;
