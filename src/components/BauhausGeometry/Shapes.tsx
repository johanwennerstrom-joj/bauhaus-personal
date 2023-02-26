import clsx from 'clsx'
import { IBauhausGeometryProps } from './BauhausGeometry'

interface IShapeProps {
	color: IBauhausGeometryProps['patterns'][number]['color']
	rotation?: IBauhausGeometryProps['patterns'][number]['rotation']
	height?: number
	width?: number
}

const Square = ({ color, height = 80, width = 80 }: IShapeProps) => (
	<svg
		className='shape-transition'
		width={width}
		height={height}
		viewBox='0 0 80 80'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<rect width='80' height='80' className={color} />
	</svg>
)

const Tile = ({ color, rotation, height = 80, width = 80 }: IShapeProps) => (
	<svg
		width={width}
		height={height}
		viewBox='0 0 80 80'
		className={clsx({
			'rotate-0': rotation === '0',
			'rotate-45': rotation === '45',
			'rotate-90': rotation === '90'
		})}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<g className={color}>
			<path d='M0 80C0 35.8172 35.8172 0 80 0V80H0Z' />
		</g>
	</svg>
)

const Backs = ({ color, rotation, height = 80, width = 80 }: IShapeProps) => (
	<svg
		width={width}
		height={height}
		viewBox='0 0 80 80'
		className={clsx({
			'rotate-0': rotation === '0',
			'rotate-45': rotation === '45',
			'rotate-90': rotation === '90'
		})}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path d='M0 0L80 80H0V0Z' className={color} />
	</svg>
)

const Half = ({ color, rotation, height = 80, width = 40 }: IShapeProps) => (
	<svg
		className={clsx({
			'rotate-0': rotation === '0',
			'rotate-45': rotation === '45',
			'rotate-90': rotation === '90'
		})}
		width={width}
		height={height}
		viewBox='0 0 40 80'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M60 40C60 62.0914 60 80 60 80C37.9086 80 20 62.0914 20 40C20 17.9086 37.9086 0 60 0C60 0 60 17.9086 60 40Z'
			className={color}
		/>
	</svg>
)

export { Square, Tile, Backs, Half }
