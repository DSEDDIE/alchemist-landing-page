import React, { useEffect, useState } from 'react';
import { Service } from '../types';
import { SectionTitle } from './SectionTitle';
import { ArrowRightIcon } from './icons';

// A small list of the services we offer. Each object here is just plain data
// (an id, image path, title and a short description). The component below
// reads this list and renders one card for each service. Keeping the data
// here keeps markup (the look) separate from content (the words and images).
const servicesData: Service[] = [
	{
		id: '1',
		imageSrc: '/IMG_6331.jpg',
		title: 'RESIDENTIAL EPOXY FLOORING',
		description:
			'Enhance the beauty and durability of your homes floors with our residential SUBTLE METALLIC epoxy flooring system. Our skilled craftsmen create stunning designs that not only elevate the aesthetics of your living spaces but also provide a long-lasting and easy-to-maintain surface',
	},
	{
		id: '2',
		imageSrc: 'BWGIMG_5816.jpeg',
		title: 'COMMERCIAL EPOXY FLOORING',
		description:
			'Make a lasting impression on your clients and employees with our commercial ELEGANCE METALLIC SWIRL epoxy flooring system. Our team understands the unique challenges that commercial spaces face, and we tailor our services to meet your specific needs.',
		// example of adding per-card CSS overrides (optional)
		containerClass: 'bg-gradient-to-br from-[#111111] to-[#121212]',
		// ensure this title uses the same gold color and weight as others
		titleClass: 'text-2xl font-semibold text-[#D1A054] mb-3',
	},
	{
		id: '3',
		imageSrc: '/IMG_2974.JPEG',
		title: 'FLAKE SYSTEMS',
		description:
			'Preserve the longevity of your concrete surfaces with our professional FLAKE SYSTEM. Our High performance coatings and techniques protect your concrete from moisture, stains, and wear, ensuring a longer lifespan and reducing the need for costly repairs.',
	},
	{
		id: '4',
		imageSrc: '/IMG_6380.jpg',
		title: 'MULTI-METALLIC DESIGN SYSTEM',
		description:
			'A one-of-a-kind metallic masterpiece—custom-crafted to express your inner self. Make a statement without saying a word.We specialize in installing high-performance epoxy and polyurethane floors that can withstand heavy machinery, chemical spills, and constant foot traffic, ensuring safety and durability in demanding environments.',
	}
];

// This is a small, reusable piece that shows a single service.
// Think of it as a template for one card: it shows the picture, the title,
// a short description and a "Learn More" link. When someone clicks the
// picture, this card calls a function (if provided) to tell the parent
// "hey, open this image" so the parent can show the bigger version.
const ServiceCard: React.FC<{
	service: Service;
	onOpenImage?: (src: string, alt?: string) => void;
	onSelect?: (id: string) => void;
	selected?: boolean;
}> = ({ service, onOpenImage, onSelect, selected }) => {
	// Show the gold border only when the card is selected by the user.
	// This makes selection explicit: data no longer forces the gold border.
	const baseContainer = `bg-[#1C1C1C] p-6 rounded-2xl shadow-xl flex flex-col transition-all duration-300 hover:shadow-[#D1A054]/30 ${
		selected ? 'border-2 border-[#D1A054]' : 'border-2 border-transparent'
	}`;

	return (
		<div
			className={`${baseContainer} ${service.containerClass ?? ''}`}
			role="button"
			tabIndex={0}
			onClick={() => onSelect?.(service.id)}
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') onSelect?.(service.id);
			}}
		>
			{/* The image is interactive: clicking or pressing Enter/Space
				tells the parent component to open a larger version. We make it
				keyboard-focusable so people who navigate with the keyboard can
				also open the image. */}
				<img
					src={service.imageSrc}
					alt={service.title}
					className={`${service.imageClass ?? 'w-full h-48 object-cover rounded-lg mb-6'} cursor-pointer`}
					role="button"
					tabIndex={0}
					onClick={(e) => {
						e.stopPropagation();
						onOpenImage?.(service.imageSrc, service.title);
					}}
					onKeyDown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.stopPropagation();
							onOpenImage?.(service.imageSrc, service.title);
						}
					}}
				/>
			<h3 className={`${service.titleClass ?? 'text-xl font-semibold text-[#D1A054] mb-3'}`}> {service.title}</h3>
			<p className={`${service.descriptionClass ?? 'text-gray-400 text-sm mb-6 flex-grow'}`}>{service.description}</p>
			<a
				href="#"
				className={`${service.linkClass ?? 'text-[#D1A054] hover:text-yellow-300 font-medium flex items-center group'}`}
			>
				Learn More
				<ArrowRightIcon className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
			</a>
		</div>
	);
};

// This component puts everything together: it shows the title, the grid of
// service cards (one card per item in `servicesData`) and it also manages the
// small "image preview" popup (modal). The modal is simply controlled by a
// piece of state: when `modalImage` is set, the popup appears showing the
// larger image. When it's null, the popup is hidden.
export const ServicesSection: React.FC = () => {
	// Holds the image to show in the popup. When null, no popup is shown.
	const [modalImage, setModalImage] = useState<{ src: string; alt?: string } | null>(null);

	// Track which service (by id) the user has selected. When a card is
	// selected we show the gold border around it.
	const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

	// Keep Escape-key closing working: when the popup is open we listen for
	// the Escape key and close the popup. The listener is removed when the
	// popup is closed or when the component unmounts.
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setModalImage(null);
		};
		if (modalImage) window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [modalImage]);

	const closeModal = () => setModalImage(null);

	return (
		<section className="bg-[#101010] py-16 md:py-24">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12 md:mb-16">

					<SectionTitle
						text="CHECK OUR SERVICES"
						className="mb-4 drop-shadow-[0_0_16px_rgba(209,160,84,0.55)] animate-pulse"
						useGradient={true}
					/>
					<p className="text-gray-400 max-w-2xl mx-auto">
						We offer a wide range of services designed to meet your needs with
						precision and care. Whether you're looking for expert support, reliable
						solutions, or innovative ideas, our team is here to help. Each service
						is delivered with a focus on quality, efficiency, and customer
						satisfaction. Take a look at what we offer and discover how we can
						make a difference for you.
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{servicesData.map((service) => (
							<ServiceCard
								key={service.id}
								service={service}
								onOpenImage={(src, alt) => setModalImage({ src, alt })}
								selected={selectedServiceId === service.id}
								onSelect={(id) => setSelectedServiceId((prev) => (prev === id ? null : id))}
							/>
						))}
				</div>
				<div className="flex justify-center mt-12 space-x-2">
					<button className="w-3 h-3 bg-gray-500 rounded-full focus:outline-none focus:bg-[#D1A054]"></button>
					<button className="w-3 h-3 bg-[#D1A054] rounded-full focus:outline-none"></button> {/* Active state */}
					<button className="w-3 h-3 bg-gray-500 rounded-full focus:outline-none focus:bg-[#D1A054]"></button>
				</div>
			</div>
			{/* Popup/modal that shows a bigger version of the image. Clicking
				outside the image or pressing Escape closes it. We stop the
				click event from bubbling when clicking inside the inner box so
				the overlay doesn't immediately close the popup. */}
			{modalImage && (
				<div
					className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6"
					onClick={closeModal}
					role="dialog"
					aria-modal="true"
				>
					<div className="relative max-w-[90%] max-h-[90%] w-full" onClick={(e) => e.stopPropagation()}>
						<button
							onClick={closeModal}
							aria-label="Close image"
							className="absolute top-2 right-2 z-50 text-white bg-black/40 rounded-full p-2 hover:bg-black/60"
						>
							✕
						</button>
						<img
							src={modalImage.src}
							alt={modalImage.alt}
							className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
						/>
					</div>
				</div>
			)}
		</section>
	);
};
