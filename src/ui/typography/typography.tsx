import clsx from 'clsx'
import { HTMLAttributes, ReactHTML, ReactNode } from 'react'

interface ITypographyProps {
	as?: keyof Pick<ReactHTML, 'p' | 'span' | 'strong' | 'em' | 'address' | 'time' | 'blockquote'>
	children: ReactNode
	className?: HTMLAttributes<HTMLParagraphElement | HTMLSpanElement>['className']
	variant: 'lg' | 'md' | 'sm' | 'xs'
	weight?: 'bold' | 'light'
}

interface IHeadingProps {
	as?: keyof Pick<ReactHTML, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>
	children: ReactNode
	className?: HTMLAttributes<HTMLHeadingElement>['className']
	variant: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs'
	weight?: 'bold' | 'light' | 'normal'
}

export const Heading = ({
	as: Type = 'h3',
	children,
	variant,
	className,
	weight = 'bold',
	...rest
}: IHeadingProps) => (
	<Type
		className={clsx(
			className,
			{
				mega: variant === 'xxl',
				h1: variant === 'xl',
				h2: variant === 'lg',
				h3: variant === 'md',
				h4: variant === 'sm',
				h5: variant === 'xs',
				h6: variant === 'xxs'
			},
			{
				'font-bold': weight === 'bold',
				'font-light': weight === 'light',
				'': weight === 'normal'
			}
		)}
		{...rest}
	>
		{children}
	</Type>
)

export const Text = ({ as: Type = 'p', children, variant, className, weight, ...rest }: ITypographyProps) => (
	<Type
		className={clsx(
			className,
			{
				body: variant === 'lg',
				'body-sm': variant === 'md',
				'body-xs': variant === 'sm',
				'body-xxs': variant === 'xs'
			},
			{
				'font-bold': weight === 'bold',
				'font-light': weight === 'light'
			}
		)}
		{...rest}
	>
		{children}
	</Type>
)
