/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react"
import Card, { CardProps } from "./Card"

interface EffectProps {
	item: CardProps["item"];
}

export default function Effect({ item }: EffectProps) {
	const initStyle = {
		transform: 'rotateY(0deg) rotateX(0deg)'
	}
	const hoverRef = useRef(null)
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [mousePercentPosition, setMousePercentPosition] = useState({ x: 0, y: 0 })
	const [dynamicStyles, setDynamicStyles] = useState(initStyle);
	const [size, setSize] = useState({ x: 0, y: 0 })
	const [scrolled, setScrolled] = useState(false)
	const [focus, setFocus] = useState(false)
	useEffect(() => {
		setDynamicStyles(initStyle)
		const rect = hoverRef.current.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;
		const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			setMousePosition({ x, y });
		};
		const handleScroll = () => {
			setScrolled(!scrolled)
		};

		window.addEventListener('scroll', handleScroll);
		hoverRef.current.addEventListener('mousemove', handleMouseMove);
		setSize({ x: width, y: height })

		return () => {
			hoverRef.current && hoverRef.current.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('scroll', handleScroll);
		}
	}, [scrolled])

	const handleMouseEnter = () => {
		setDynamicStyles(initStyle)
		setFocus(true)
	};

	const handleMouseLeave = () => {
		setDynamicStyles(initStyle)
		setFocus(false)
	};

	useEffect(() => {
		const rotateX = (mousePosition.x - size.x / 2) / size.x * 30
		const rotateY = (mousePosition.y - size.y / 2) / size.y * 40
		const x = (mousePosition.x) / size.x * 100
		const y = (mousePosition.y) / size.y * 100
		setMousePercentPosition({ x, y });
		let updatedStyle = { ...initStyle }
		updatedStyle.transform = `rotateX(${rotateY}deg) rotateY(${-rotateX}deg)`
		setDynamicStyles(updatedStyle)
	}, [mousePosition])

	return (
		<div style={{ perspective: '500px' }}>
			<div style={{ ...dynamicStyles, transition: 'transform 0.3s' }} ref={hoverRef} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
				<Card item={item} position={mousePercentPosition} size={size} focus={focus} />
			</div>
		</div>
	)
}