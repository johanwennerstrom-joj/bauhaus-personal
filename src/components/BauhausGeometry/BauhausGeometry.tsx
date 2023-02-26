import { memo } from 'react'
import { Backs, Half, Square, Tile } from './Shapes'

type TShape = 'square' | 'backs' | 'tile' | 'half'

type TPattern = {
	shape: TShape
	color: SVGSVGElement['style']['fill']
	rotation?: '0' | '45' | '90'
	height?: number
	width?: number
}

export interface IBauhausGeometryProps {
	patterns: TPattern[]
}

const BauhausGeometry = ({ patterns = [] }: IBauhausGeometryProps) => {
	return (
		<>
			{patterns.map((pattern, index) => {
				switch (pattern.shape) {
					case 'backs':
						return (
							<Backs
								key={index}
								height={pattern.height}
								width={pattern.width}
								rotation={pattern.rotation}
								color={pattern.color}
							/>
						)
					case 'square':
						return (
							<Square
								key={index}
								height={pattern.height}
								width={pattern.width}
								color={pattern.color}
							/>
						)
					case 'tile':
						return (
							<Tile
								key={index}
								height={pattern.height}
								width={pattern.width}
								rotation={pattern.rotation}
								color={pattern.color}
							/>
						)
					case 'half':
						return (
							<Half
								key={index}
								height={pattern.height}
								width={pattern.width}
								rotation={pattern.rotation}
								color={pattern.color}
							/>
						)
				}
			})}
		</>
	)
}

export default memo(BauhausGeometry)
