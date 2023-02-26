import { HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface IWrapperProps {
	children: ReactNode
	className?: HTMLAttributes<HTMLDivElement>['className']
}

export const Section = ({ children, className }: IWrapperProps) => (
	<section className={clsx('py-xl', className)}>{children}</section>
)

export const Container = ({ children, className }: IWrapperProps) => (
	<div className={clsx('px-xxl m-auto', className)}>{children}</div>
)

export const PageContainer = ({ children }: { children: ReactNode }) => (
	<main className='py-lg relative'>{children}</main>
)
