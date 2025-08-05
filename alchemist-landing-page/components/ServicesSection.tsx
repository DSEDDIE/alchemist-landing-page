import React from 'react';
import { Service } from '../types';
import { SectionTitle } from './SectionTitle';
import { ArrowRightIcon, TelescopeIcon } from './icons';

const servicesData: Service[] = [
	{
		id: '1',
		imageSrc: '/Group4.png',
		title: 'RESIDENTIAL EPOXY FLOORING',
		description:
			'Enhance the beauty and durability of your homes floors with our residential epoxy flooring services. Our skilled craftsmen create stunning designs that not only elevate the aesthetics of your living spaces but also provide a long-lasting and easy-to-maintain surface',
	},
	{
		id: '2',
		imageSrc: '/Group3.png',
		title: 'COMMERCIAL EPOXY FLOORING',
		description:
			'Make a lasting impression on your clients and employees with our commercial epoxy flooring solutions. Our team understands the unique challenges that commercial spaces face, and we tailor our services to meet your specific needs.',
		highlighted: true,
	},
	{
		id: '3',
		imageSrc: '/Group5.png',
		title: 'CONCRETE SEALING',
		description:
			'Preserve the longevity of your concrete surfaces with our professional concrete sealing services. Our advanced sealing techniques protect your concrete from moisture, stains, and wear, ensuring a longer lifespan and reducing the need for costly repairs.',
	},
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
	return (
		<div
			className={`bg-[#1C1C1C] p-6 rounded-2xl shadow-xl flex flex-col transition-all duration-300 hover:shadow-[#D1A054]/30 ${
				service.highlighted ? 'border-2 border-[#D1A054]' : 'border-2 border-transparent'
			}`}
		>
			<img
				src={service.imageSrc}
				alt={service.title}
				className="w-full h-48 object-cover rounded-lg mb-6"
			/>
			<h3 className="text-xl font-semibold text-[#D1A054] mb-3">{service.title}</h3>
			<p className="text-gray-400 text-sm mb-6 flex-grow">{service.description}</p>
			<a
				href="#"
				className="text-[#D1A054] hover:text-yellow-300 font-medium flex items-center group"
			>
				Learn More
				<ArrowRightIcon className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
			</a>
		</div>
	);
};

export const ServicesSection: React.FC = () => {
	return (
		<section className="bg-[#101010] py-16 md:py-24">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12 md:mb-16">
					<div className="flex justify-center items-center mb-4">
						<TelescopeIcon className="w-12 h-12 text-[#D1A054]" />
					</div>
					<SectionTitle
						text="CHECK OUR SERVICES"
						className="mb-4"
						useGradient={false}
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
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{servicesData.map((service) => (
						<ServiceCard key={service.id} service={service} />
					))}
				</div>
				<div className="flex justify-center mt-12 space-x-2">
					<button className="w-3 h-3 bg-gray-500 rounded-full focus:outline-none focus:bg-[#D1A054]"></button>
					<button className="w-3 h-3 bg-[#D1A054] rounded-full focus:outline-none"></button> {/* Active state */}
					<button className="w-3 h-3 bg-gray-500 rounded-full focus:outline-none focus:bg-[#D1A054]"></button>
				</div>
			</div>
		</section>
	);
};
