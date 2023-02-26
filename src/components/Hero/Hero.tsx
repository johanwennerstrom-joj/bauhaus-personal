import BauhausGen from 'components/BauhausGeometry/BauhausGeometry'
import { Heading } from 'ui/typography/typography'
import { Container, Section } from 'ui/wrappers/wrappers'

const Hero = () => (
	<Section>
		<Container className='md:base-grid'>
			<div className='col-span-7 flex flex-col justify-between '>
				<div>
					<Heading variant='xl' className='text-crimson-100 uppercase' weight='normal' as='h1'>
						Johan
					</Heading>
					<Heading variant='xl' className='text-crimson-100 uppercase' weight='bold' as='h2'>
						Wennerström
					</Heading>
				</div>
				<div>
					<Heading variant='md' as='h3' weight='light' className='text-crimson-100 uppercase'>
						Frontend dev
					</Heading>
				</div>
			</div>
			<div className='col-span-5 col-start-8 flex gap-sm flex-col'>
				<div className='flex gap-sm'>
					<BauhausGen
						patterns={[
							{ shape: 'tile', color: 'fill-crimson-100' },
							{ shape: 'tile', color: 'fill-crimson-100', rotation: '90' },
							{ shape: 'backs', color: 'fill-crimson-100', rotation: '0' },
							{ shape: 'tile', color: 'fill-crimson-100', rotation: '90' },
							{ shape: 'backs', color: 'fill-crimson-100', rotation: '90' },
							{ shape: 'tile', color: 'fill-crimson-100', rotation: '90' }
						]}
					/>
				</div>
				<div className='flex gap-sm'>
					<BauhausGen
						patterns={[
							{ shape: 'backs', color: 'fill-navy' },
							{ shape: 'backs', color: 'fill-navy', rotation: '90' },
							{ shape: 'tile', color: 'fill-navy', rotation: '90' },
							{ shape: 'backs', color: 'fill-navy', rotation: '0' },
							{ shape: 'square', color: 'fill-navy', rotation: '90' },
							{ shape: 'backs', color: 'fill-navy', rotation: '90' }
						]}
					/>
				</div>
				<div className='flex gap-sm'>
					<BauhausGen
						patterns={[
							{ shape: 'square', color: 'fill-crimson-100' },
							{ shape: 'backs', color: 'fill-crimson-100' },
							{ shape: 'square', color: 'fill-crimson-100', rotation: '90' },
							{ shape: 'tile', color: 'fill-crimson-100', rotation: '90' },
							{ shape: 'tile', color: 'fill-crimson-100', rotation: '90' },
							{ shape: 'square', color: 'fill-crimson-100', rotation: '90' }
						]}
					/>
				</div>
				<div className='flex gap-sm'>
					<BauhausGen
						patterns={[
							{ shape: 'backs', color: 'fill-crimson-50' },
							{ shape: 'square', color: 'fill-crimson-50' },
							{ shape: 'tile', color: 'fill-crimson-50', rotation: '90' },
							{ shape: 'square', color: 'fill-crimson-50', rotation: '90' },
							{ shape: 'backs', color: 'fill-crimson-50', rotation: '90' },
							{ shape: 'tile', color: 'fill-crimson-50', rotation: '90' }
						]}
					/>
				</div>
				<div className='flex gap-sm'>
					<BauhausGen
						patterns={[
							{ shape: 'tile', color: 'fill-navy' },
							{ shape: 'tile', color: 'fill-navy' },
							{ shape: 'backs', color: 'fill-navy', rotation: '90' },
							{ shape: 'tile', color: 'fill-navy', rotation: '0' },
							{ shape: 'backs', color: 'fill-navy', rotation: '0' },
							{ shape: 'tile', color: 'fill-navy', rotation: '0' }
						]}
					/>
				</div>
				<div className='flex gap-sm'>
					<BauhausGen
						patterns={[
							{ shape: 'square', color: 'fill-crimson-100' },
							{ shape: 'backs', color: 'fill-crimson-100' },
							{ shape: 'square', color: 'fill-crimson-100', rotation: '0' },
							{ shape: 'tile', color: 'fill-crimson-100', rotation: '0' },
							{ shape: 'tile', color: 'fill-crimson-100', rotation: '90' },
							{ shape: 'square', color: 'fill-crimson-100', rotation: '90' }
						]}
					/>
				</div>
			</div>
		</Container>
	</Section>
)
export default Hero
