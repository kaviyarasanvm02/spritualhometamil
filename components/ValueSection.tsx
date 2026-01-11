import { Play, Shield, Users } from "lucide-react";

const features = [
    {
        name: 'Expert Guidance',
        description: 'Learn from experienced spiritual masters and guides.',
        icon: Users,
    },
    {
        name: 'Secure Platform',
        description: 'Your data and payments are 100% secure with us.',
        icon: Shield,
    },
    {
        name: 'HD Video Content',
        description: 'High-quality video lessons accessible on any device.',
        icon: Play,
    },
];

export default function ValueSection() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-amber-600">Why Choose Us</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Everything you need to grow spiritually
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We provide a safe, nurturing environment for your spiritual journey with premium content and community support.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
