import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES, ICONS_MAP } from "@/app/constants";

type Props = {
  limit?: number;
  title?: string;
  description?: string;
};

export default function ServicesGrid({
  limit,
  title = "What We Actually Do",
  description = "We believe in marketing that brings clarity, direction and business outcomes.",
}: Props) {
  const services = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* ---- Heading block ---- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4 text-black">
            {title}
          </h2>
          <p className="text-gray-500">{description}</p>
        </div>

        {/* ---- Grid ---- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = ICONS_MAP[service.iconName];

            return (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                aria-label={`View ${service.title} service`}
                className="group block h-full text-black"
              >
                <div className="border p-8 h-full hover:border-brand-purple hover:shadow-[8px_8px_0px_0px_rgba(128,0,128,0.2)] transition-all duration-300">
                  <Icon className="w-12 h-12 text-brand-purple mb-6" />

                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>

                  <p className="text-gray-600 mb-6">
                    {service.shortDescription}
                  </p>

                  <span className="flex items-center text-brand-purple font-bold">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
